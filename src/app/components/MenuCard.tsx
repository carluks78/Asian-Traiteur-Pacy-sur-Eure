import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MenuCardProps {
  name: string;
  price: string;
  unit?: string;
  badge?: string;
  imageUrl: string;
  description?: string;
}

export function MenuCard({ name, price, unit, badge, imageUrl, description }: MenuCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "#FEFAF3",
        boxShadow: "0 2px 12px rgba(61,28,2,0.07)",
      }}
    >
      <div className="relative overflow-hidden" style={{ height: "150px" }}>
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span
            className="absolute top-2 left-2 px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: "#C0392B",
              color: "#fff",
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="p-3 flex flex-col gap-1 flex-1">
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#3D1C02",
            fontSize: "0.9rem",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          {name}
        </h3>
        {description && (
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#8B5E3C",
              fontSize: "0.72rem",
              lineHeight: 1.5,
            }}
            className="hidden sm:block"
          >
            {description}
          </p>
        )}
        <div className="mt-auto pt-2 flex items-baseline gap-1 flex-wrap">
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#C0392B",
              fontSize: "1.05rem",
              fontWeight: 700,
            }}
          >
            {price}
          </span>
          {unit && (
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#8B5E3C",
                fontSize: "0.7rem",
              }}
            >
              {unit}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
