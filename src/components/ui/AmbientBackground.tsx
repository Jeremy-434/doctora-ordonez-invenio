'use client';
import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 767px)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) return;

    let W = canvas.width;
    let H = canvas.height;
    let mouseX = 0.5, mouseY = 0.5;
    let clickX = 0.5, clickY = 0.5;
    let clickTime = -9999;
    const t0 = performance.now();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.width = canvas.offsetWidth * dpr;
      H = canvas.height = canvas.offsetHeight * dpr;
      canvas.style.width = canvas.offsetWidth + 'px';
      canvas.style.height = canvas.offsetHeight + 'px';
      gl.viewport(0, 0, W, H);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = 1 - (e.clientY - rect.top) / rect.height;
    };
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      clickX = (e.clientX - rect.left) / rect.width;
      clickY = 1 - (e.clientY - rect.top) / rect.height;
      clickTime = (performance.now() - t0) / 1000;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const link = (vs: WebGLShader | null, fs: WebGLShader | null) => {
      const p = gl.createProgram();
      if (!p || !vs || !fs) return null;
      gl.attachShader(p, vs);
      gl.attachShader(p, fs);
      gl.linkProgram(p);
      return p;
    };

    const VS = 'attribute vec2 a; void main(){ gl_Position=vec4(a,0.,1.); }';
    const FS = `
precision highp float;
uniform vec2  u_res;
uniform vec2  u_mouse;
uniform float u_time;
uniform vec2  u_click;
uniform float u_click_t;

vec2 _h(vec2 p){
  p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
  return fract(sin(p)*43758.5453);
}
float _n(vec2 p){
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  vec2 a=_h(i), b=_h(i+vec2(1,0)), c=_h(i+vec2(0,1)), d=_h(i+vec2(1,1));
  return mix(mix(dot(a*2.-1., f), dot(b*2.-1., f-vec2(1,0)), u.x),
             mix(dot(c*2.-1., f-vec2(0,1)), dot(d*2.-1., f-vec2(1)), u.x), u.y);
}
float fbm(vec2 p){
  float v=0., a=.5;
  for(int i=0;i<6;i++){ v+=a*_n(p); p=p*2.03+vec2(31.2,17.4); a*=.48; }
  return v;
}

void main(){
  float ar = u_res.x / u_res.y;
  vec2  uv = gl_FragCoord.xy / u_res;
  vec2  p  = (uv - .5) * vec2(ar, 1.);
  float t  = u_time * .16;

  vec2  m    = (u_mouse - .5) * vec2(ar, 1.);
  float md   = length(p - m);
  float pull = .2 * (1. - smoothstep(.0, .65, md));
  p = mix(p, m, pull);

  vec2  cp  = (u_click  - .5) * vec2(ar, 1.);
  float age = u_click_t;
  float cd  = length(p - cp);
  float splash = exp(-cd*cd / (.008 + age*.18)) * exp(-age*1.3) * .28;
  p += normalize(p - cp + .0001) * splash;

  vec2 q = vec2(fbm(p*1.6 + vec2(0.,  t)),
                fbm(p*1.6 + vec2(3.3, t*.8)));
  vec2 r = vec2(fbm(p + q*2. + vec2(t*.4, 1.6)),
                fbm(p + q*2. + vec2(2.8,  t*.5)));
  float f  = fbm(p*1.3 + r*2.2 + t*.15);
  float f2 = fbm(p*2.8 - r     + t*.3 + vec2(7.,0.));

  float v  = f *.5+.5;
  float v2 = f2*.5+.5;

  vec3 col = vec3(.027,.067,.114);
  col = mix(col, vec3(.047,.106,.169), smoothstep(.25, .65, v));
  col = mix(col, vec3(.043,.369,.541), smoothstep(.5,  .88, v));
  col += vec3(.0,.788,.894)  * pow(smoothstep(.62, 1., v),  3.) * .9;
  col += vec3(.22,.745,.973)  * pow(smoothstep(.68, 1., v2), 4.) * .55;

  gl_FragColor = vec4(col, 1.);
}
`;

    const vShader = compile(gl.VERTEX_SHADER, VS);
    const fShader = compile(gl.FRAGMENT_SHADER, FS);
    const prog = link(vShader, fShader);
    if (!prog) return;

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uClick = gl.getUniformLocation(prog, 'u_click');
    const uClickT = gl.getUniformLocation(prog, 'u_click_t');
    const aPos = gl.getAttribLocation(prog, 'a');

    let raf: number;
    const frame = () => {
      const time = (performance.now() - t0) / 1000;
      const age = time - clickTime;

      gl.useProgram(prog);
      gl.bindBuffer(gl.ARRAY_BUFFER, quad);
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(uRes, W, H);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.uniform1f(uTime, time);
      gl.uniform2f(uClick, clickX, clickY);
      gl.uniform1f(uClickT, age);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
