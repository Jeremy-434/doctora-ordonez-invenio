import { useState } from 'react';

interface Props {
  navLinks: string[];
}

export default function MobileNav({ navLinks }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (text: string) => {
    setIsOpen(false);
    let id = '';
    const link = text.toLowerCase();
    
    if (link.includes('servicio')) id = 'servicios';
    else if (link.includes('proceso')) id = 'proceso';
    else if (link.includes('equipo')) id = 'equipo';
    else if (link.includes('reseña')) id = 'testimonios';
    else if (link.includes('ubic')) id = 'visitanos';

    if (id) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 hover:opacity-70 transition"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {isOpen && (
        <nav className="md:hidden fixed top-[73px] left-0 right-0 bg-bg border-b border-border z-40">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="px-4 py-4 text-left text-text hover:bg-surface border-b border-border-light transition label-caps"
              >
                {link}
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
