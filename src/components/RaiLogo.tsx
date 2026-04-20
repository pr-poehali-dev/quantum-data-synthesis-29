interface RaiLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  inverted?: boolean;
}

const sizeMap = {
  sm: "h-24 md:h-28",
  md: "h-40 md:h-48",
  lg: "h-64 md:h-80 lg:h-96",
  xl: "h-96 md:h-[32rem] lg:h-[40rem]",
};

const LOGO_URL =
  "https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/bucket/68813923-62f1-45d6-8948-deec2edf75a4.png";

export default function RaiLogo({ size = "md", className = "", inverted = false }: RaiLogoProps) {
  return (
    <img
      src={LOGO_URL}
      alt="#ПРОЕКТ RAi — Республика Автоматики Интегра"
      className={`${sizeMap[size]} w-auto object-contain select-none ${inverted ? "brightness-0 invert-0" : ""} ${className}`}
      style={inverted ? { filter: "drop-shadow(0 0 20px rgba(0, 255, 60, 0.2))" } : undefined}
      draggable={false}
    />
  );
}