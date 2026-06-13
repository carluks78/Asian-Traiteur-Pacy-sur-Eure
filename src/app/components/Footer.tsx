import { Phone, MapPin, Clock } from "lucide-react";

const hours = [
  { day: "Jeudi", time: "10:00–14:30, 17:00–21:30" },
  { day: "Vendredi", time: "10:00–21:30" },
  { day: "Samedi", time: "10:00–21:30" },
  { day: "Dimanche", time: "10:00–14:30, 17:00–21:30" },
  { day: "Lundi", time: "Fermé", closed: true },
  { day: "Mardi", time: "10:00–14:30, 17:00–21:30" },
  { day: "Mercredi", time: "10:00–14:30, 17:00–21:30" },
];

const todayIndex = new Date().getDay();
const dayMap: Record<number, string> = {
  0: "Dimanche",
  1: "Lundi",
  2: "Mardi",
  3: "Mercredi",
  4: "Jeudi",
  5: "Vendredi",
  6: "Samedi",
};
const todayName = dayMap[todayIndex];

export function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: "#3D1C02" }} className="pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", color: "#F5EFE0", fontSize: "1.4rem", fontWeight: 700 }}
            >
              Asian Traiteur
            </h2>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#C4A882", fontSize: "0.75rem", letterSpacing: "0.12em" }}
               className="uppercase mt-1">
              Vente à emporter
            </p>
          </div>
          <div className="flex items-start gap-2" style={{ color: "#C4A882", fontFamily: "'Lato', sans-serif" }}>
            <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#E8C99A" }} />
            <span>55 rue Édouard Isambard<br />27120 Pacy-sur-Eure</span>
          </div>
          <a
            href="tel:0954890997"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            style={{ color: "#E8C99A", fontFamily: "'Lato', sans-serif", textDecoration: "none" }}
          >
            <Phone size={14} />
            <span>09 54 89 09 97</span>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61588891238903"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-1 transition-opacity hover:opacity-80"
            style={{ color: "#C4A882", fontFamily: "'Lato', sans-serif", textDecoration: "none", fontSize: "0.85rem" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
            <span>Suivez-nous sur Facebook</span>
          </a>
        </div>

        {/* Hours */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock size={16} style={{ color: "#E8C99A" }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#F5EFE0", fontSize: "1rem", fontWeight: 600 }}>
              Horaires d'ouverture
            </h3>
          </div>
          <ul className="flex flex-col gap-2">
            {hours.map(({ day, time, closed }) => (
              <li
                key={day}
                className="flex justify-between items-baseline gap-2"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: day === todayName ? "#E8C99A" : closed ? "#7A5C42" : "#C4A882",
                  fontSize: "0.82rem",
                  fontWeight: day === todayName ? 700 : 400,
                }}
              >
                <span className="flex items-center gap-1.5">
                  {day === todayName && (
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#E8C99A" }}
                    />
                  )}
                  {day}
                </span>
                <span className={closed ? "italic" : ""}>{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#F5EFE0", fontSize: "1rem", fontWeight: 600 }}
              className="mb-4">
            Le Restaurant
          </h3>
          <p style={{ fontFamily: "'Lato', sans-serif", color: "#C4A882", fontSize: "0.82rem", lineHeight: 1.8 }}>
            Cuisine asiatique authentique préparée chaque jour avec soin. Profitez de nos spécialités à emporter : plats chauds, bouchées vapeur, nems et douceurs.
          </p>
          <div
            className="mt-5 p-3 rounded-xl"
            style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#E8C99A", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em" }}
               className="mb-1 uppercase">
              Offre fidélité
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#C4A882", fontSize: "0.78rem", lineHeight: 1.6 }}>
              5 pièces achetées = 1 offerte sur nos raviolis, bouchées et nems !
            </p>
          </div>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <p style={{ fontFamily: "'Lato', sans-serif", color: "#7A5C42", fontSize: "0.72rem" }}>
          © 2025 Asian Traiteur – Tous droits réservés
        </p>
        <p style={{ fontFamily: "'Lato', sans-serif", color: "#7A5C42", fontSize: "0.72rem" }}>
          55 rue Édouard Isambard, 27120 Pacy-sur-Eure
        </p>
      </div>
    </footer>
  );
}
