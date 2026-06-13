import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre Carte", href: "#carte" },
  { label: "Contact", href: "#footer" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "#F5EFE0" : "transparent",
          boxShadow: scrolled ? "0 1px 16px rgba(61,28,2,0.1)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <button
            onClick={() => handleLink("#accueil")}
            className="flex flex-col leading-tight bg-transparent border-none cursor-pointer text-left p-0"
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#3D1C02",
                fontSize: "clamp(1rem, 3vw, 1.4rem)",
                fontWeight: 700,
                letterSpacing: "0.03em",
              }}
            >
              Asian Traiteur
            </span>
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#8B5E3C",
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
              }}
              className="uppercase"
            >
              Pacy-sur-Eure
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "#3D1C02",
                  fontSize: "0.82rem",
                  letterSpacing: "0.1em",
                }}
                className="uppercase hover:opacity-60 transition-opacity bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Phone + Burger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0954890997"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-transform hover:scale-105"
              style={{
                backgroundColor: "#3D1C02",
                color: "#F5EFE0",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.78rem",
                textDecoration: "none",
              }}
            >
              <Phone size={12} />
              <span>09 54 89 09 97</span>
            </a>
            <button
              className="md:hidden p-2 rounded-md"
              style={{ color: "#3D1C02" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(61,28,2,0.5)" }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full z-50 w-72 flex flex-col transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#F5EFE0" }}
      >
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: "#DDD0B8" }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#3D1C02",
              fontSize: "1.1rem",
              fontWeight: 700,
            }}
          >
            Asian Traiteur
          </span>
          <button onClick={() => setMenuOpen(false)} style={{ color: "#3D1C02" }}>
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-left py-3.5 px-2 border-b bg-transparent border-none cursor-pointer"
              style={{
                borderColor: "#DDD0B8",
                fontFamily: "'Lato', sans-serif",
                color: "#3D1C02",
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-6 flex flex-col gap-3">
          <a
            href="tel:0954890997"
            className="flex items-center gap-2 justify-center py-3.5 rounded-full"
            style={{
              backgroundColor: "#3D1C02",
              color: "#F5EFE0",
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            <Phone size={15} />
            <span>09 54 89 09 97</span>
          </a>
          <div
            className="flex items-start gap-2"
            style={{
              color: "#8B5E3C",
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.78rem",
              lineHeight: 1.5,
            }}
          >
            <MapPin size={13} className="mt-0.5 shrink-0" />
            <span>55 rue Édouard Isambard<br />27120 Pacy-sur-Eure</span>
          </div>
        </div>
      </aside>
    </>
  );
}
