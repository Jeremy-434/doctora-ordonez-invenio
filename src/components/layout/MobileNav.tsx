import { useState } from 'react';

interface Props {
  navLinks: string[];
}

export default function MobileNav({ navLinks }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (text: string) => {
    setIsOpen(false);
    let id = '';
    if (text === 'Servicios') id = 'servicios';
    else if (text === 'Proceso') id = 'proceso';
    else if (text === 'Testimonios') id = 'testimonios';
    else if (text === 'Agendá tu turno') id = 'calendar';

    if (id) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-accent-light transition"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {isOpen && (
        <nav className="md:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-md z-40">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="px-4 py-3 text-left text-primary hover:bg-accent-light border-b border-gray-100 transition"
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
