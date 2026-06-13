import { useState } from "react";
import { Header } from "./components/Header";
import { MenuCard } from "./components/MenuCard";
import { Footer } from "./components/Footer";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { menuItems, categories } from "./menuData";

// ─── Section Title ─────────────────────────────────────────────────────────

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10">
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#3D1C02",
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-2"
          style={{
            fontFamily: "'Lato', sans-serif",
            color: "#8B5E3C",
            fontSize: "0.85rem",
            letterSpacing: "0.04em",
          }}
        >
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="h-px w-16" style={{ backgroundColor: "#C4A882" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C0392B" }} />
        <div className="h-px w-16" style={{ backgroundColor: "#C4A882" }} />
      </div>
    </div>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#F5EFE0" }}
    >
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1565355857989-333dff0b3dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400"
          alt="Nouilles chinoises colorées avec baguettes"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(245,239,224,0.88) 0%, rgba(245,239,224,0.65) 45%, rgba(61,28,2,0.6) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p
          className="mb-3 tracking-widest uppercase"
          style={{
            fontFamily: "'Lato', sans-serif",
            color: "#8B5E3C",
            fontSize: "0.72rem",
            letterSpacing: "0.28em",
          }}
        >
          Vente à emporter · Pacy-sur-Eure
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#3D1C02",
            fontSize: "clamp(2.8rem, 9vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.08,
          }}
        >
          Asian Traiteur
        </h1>
        <p
          className="mt-5 max-w-xl mx-auto"
          style={{
            fontFamily: "'Lato', sans-serif",
            color: "#5C3A1E",
            fontSize: "clamp(0.88rem, 2.5vw, 1.05rem)",
            lineHeight: 1.8,
          }}
        >
          Saveurs authentiques d'Asie, préparées chaque jour avec passion.
          Nems, bouchées vapeur, plats chauds, sushis et douceurs — à emporter !
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:0954890997"
            style={{
              backgroundColor: "#3D1C02",
              color: "#F5EFE0",
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.88rem",
              letterSpacing: "0.06em",
              textDecoration: "none",
            }}
            className="px-7 py-3.5 rounded-full transition-transform hover:scale-105 inline-block"
          >
            📞 Commander : 09 54 89 09 97
          </a>
          <button
            onClick={() => document.querySelector("#carte")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              backgroundColor: "transparent",
              border: "1.5px solid #3D1C02",
              color: "#3D1C02",
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.88rem",
              letterSpacing: "0.06em",
              cursor: "pointer",
            }}
            className="px-7 py-3.5 rounded-full transition-transform hover:scale-105"
          >
            Voir la carte
          </button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {[
            "🥟 Bouchées vapeur",
            "🍤 Nems croustillants",
            "🍱 Sushi & Maki",
            "🥩 Plats chauds",
            "🍜 Nouilles & Riz",
            "🍬 Desserts",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full"
              style={{
                backgroundColor: "rgba(61,28,2,0.09)",
                color: "#5C3A1E",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.78rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-px h-8" style={{ backgroundColor: "#8B5E3C", opacity: 0.5 }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#8B5E3C", opacity: 0.5 }} />
      </div>
    </section>
  );
}

// ─── Promo Banner ──────────────────────────────────────────────────────────

function PromoBanner() {
  return (
    <div className="py-3.5 text-center" style={{ backgroundColor: "#C0392B" }}>
      <p
        style={{
          fontFamily: "'Lato', sans-serif",
          color: "#fff",
          fontSize: "0.82rem",
          letterSpacing: "0.04em",
        }}
      >
        🎁 <strong>Offre fidélité :</strong> 5 pièces achetées = 1 pièce offerte sur les articles marqués !
      </p>
    </div>
  );
}

// ─── Category Tabs + Menu Grid ────────────────────────────────────────────

const categorySubtitles: Record<string, string> = {
  entrees: "Nems, brochettes, tempura, raviolis frits, samousa…",
  vapeur: "Gyoza, bouchées et raviolis cuits à la vapeur · 0,90€/pièce · Offre 5+1",
  salades: "Salade d'algues, salade de choux, sushi & maki frais",
  plats: "Préparés chaque jour au wok · Vendus au poids",
  accompagnements: "Riz et nouilles pour accompagner vos plats · 1,50€/100g",
  desserts: "Douceurs traditionnelles asiatiques",
};

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("entrees");

  const filtered = menuItems.filter((item) => item.category === activeCategory);
  const cat = categories.find((c) => c.id === activeCategory);

  return (
    <section id="carte" className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#F5EFE0" }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Notre Carte" subtitle="Cuisines d'Asie préparées avec soin chaque jour" />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count = menuItems.filter((i) => i.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-2 rounded-full transition-all text-sm"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.82rem",
                  letterSpacing: "0.04em",
                  cursor: "pointer",
                  border: isActive ? "none" : "1.5px solid #C4A882",
                  backgroundColor: isActive ? "#3D1C02" : "transparent",
                  color: isActive ? "#F5EFE0" : "#5C3A1E",
                  fontWeight: isActive ? 700 : 400,
                }}
              >
                {cat.label}
                <span
                  className="ml-1.5 text-xs opacity-60"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Subtitle for active category */}
        {cat && (
          <p
            className="text-center mb-8 -mt-4"
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#8B5E3C",
              fontSize: "0.82rem",
              fontStyle: "italic",
            }}
          >
            {categorySubtitles[activeCategory]}
          </p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((item) => (
            <MenuCard
              key={item.id}
              name={item.name}
              price={item.price}
              unit={item.unit}
              badge={item.badge}
              imageUrl={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Band ──────────────────────────────────────────────────────────────

function CTABand() {
  return (
    <div className="py-14 text-center px-4" style={{ backgroundColor: "#EDE4D3" }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#3D1C02",
          fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
          fontWeight: 600,
        }}
      >
        Passez votre commande
      </h2>
      <p
        className="mt-2"
        style={{
          fontFamily: "'Lato', sans-serif",
          color: "#8B5E3C",
          fontSize: "0.88rem",
        }}
      >
        Appelez-nous ou venez directement au 55 rue Édouard Isambard, Pacy-sur-Eure
      </p>
      <a
        href="tel:0954890997"
        className="inline-flex items-center gap-2 mt-6 px-9 py-4 rounded-full transition-transform hover:scale-105"
        style={{
          backgroundColor: "#3D1C02",
          color: "#F5EFE0",
          fontFamily: "'Lato', sans-serif",
          fontSize: "1rem",
          letterSpacing: "0.06em",
          textDecoration: "none",
        }}
      >
        📞 09 54 89 09 97
      </a>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ backgroundColor: "#F5EFE0", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <PromoBanner />
      <MenuSection />
      <CTABand />
      <Footer />
    </div>
  );
}
