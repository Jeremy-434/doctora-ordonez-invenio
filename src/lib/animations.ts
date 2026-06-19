import { gsap, ScrollTrigger, prefersReduced } from './gsap';

export function fadeUp(selector: string, options?: gsap.TweenVars) {
  if (prefersReduced) return;
  return gsap.from(selector, {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    scrollTrigger: { trigger: selector, start: 'top 85%', once: true },
    ...options,
  });
}

export function fadeIn(selector: string, options?: gsap.TweenVars) {
  if (prefersReduced) return;
  return gsap.from(selector, {
    opacity: 0,
    duration: 0.6,
    scrollTrigger: { trigger: selector, start: 'top 85%', once: true },
    ...options,
  });
}

export function staggerCards(selector: string, options?: gsap.TweenVars) {
  if (prefersReduced) return;
  return gsap.from(selector, {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: { amount: 0.5, from: 'start' },
    scrollTrigger: { trigger: selector, start: 'top 80%', once: true },
    ...options,
  });
}

export function countUp(el: Element, target: number, duration = 1.5) {
  if (prefersReduced) { el.textContent = String(target); return; }
  const obj = { val: 0 };
  gsap.to(obj, {
    val: target,
    duration,
    ease: 'power1.out',
    onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
  });
}

export function splitAndReveal(container: Element, options?: gsap.TweenVars) {
  if (prefersReduced) return;
  const text = container.textContent ?? '';
  container.innerHTML = text
    .split(' ')
    .map(word => `<span class="word-wrap" style="display:inline-block;overflow:hidden;">
      <span class="word" style="display:inline-block">${word}&nbsp;</span>
    </span>`)
    .join('');
  return gsap.from(container.querySelectorAll('.word'), {
    y: '110%',
    opacity: 0,
    duration: 0.75,
    stagger: 0.06,
    ease: 'power3.out',
    delay: options?.delay ?? 0,
    ...options,
  });
}

export function drawLine(selector: string) {
  if (prefersReduced) return;
  return gsap.from(selector, {
    scaleX: 0,
    transformOrigin: 'left center',
    duration: 1,
    ease: 'power2.inOut',
    scrollTrigger: { trigger: selector, start: 'top 75%', once: true },
  });
}
