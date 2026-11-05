import * as React from "react";

/**
 * @typedef {Object} LogoProps
 * @property {"badge" | "glyph"} [variant] - "badge" (default) includes outer circular ribbon; "glyph" renders only the inner F ribbon.
 * @property {string} [className] - CSS class name for styling
 */

/**
 * FlashCards 3D ribbon logo featuring the letter 'F'
 * in an electric blue to crimson red gradient combination.
 *
 * @param {LogoProps & React.SVGProps<SVGSVGElement>} props
 */
export const FlashCardsLogo = ({
  variant = "badge",
  className = "w-full h-full",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        {/* Main circular ribbon: Electric Blue -> Royal Blue -> Indigo -> Purple -> Crimson -> Scarlet Red */}
        <linearGradient
          id="flash-ring"
          x1="12"
          y1="15"
          x2="90"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="20%" stopColor="#2563EB" />
          <stop offset="45%" stopColor="#4F46E5" />
          <stop offset="68%" stopColor="#9333EA" />
          <stop offset="85%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>

        {/* Inner F stem and top arm: Pure White -> Ice Sky -> Vivid Blue -> Royal Blue -> Indigo */}
        <linearGradient
          id="flash-f"
          x1="32"
          y1="22"
          x2="68"
          y2="76"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#BAE6FD" />
          <stop offset="55%" stopColor="#60A5FA" />
          <stop offset="80%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>

        {/* Ring specular highlight */}
        <linearGradient
          id="flash-highlight"
          x1="20"
          y1="10"
          x2="75"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Crossbar ribbon: Glowing Coral -> Vivid Crimson -> Deep Ruby Red */}
        <linearGradient
          id="flash-tail"
          x1="33"
          y1="46"
          x2="65"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="28%" stopColor="#FB7185" />
          <stop offset="70%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>

        {/* Outer drop shadow */}
        <filter
          id="flash-shadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="4"
            floodColor="#020617"
            floodOpacity="0.35"
          />
        </filter>

        {/* Inner drop shadow */}
        <filter
          id="inner-shadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="2.5"
            floodColor="#1E1B4B"
            floodOpacity="0.45"
          />
        </filter>
      </defs>

      {/* ===================================== */}
      {/* OUTER CIRCULAR RIBBON (badge variant) */}
      {/* ===================================== */}
      {variant === "badge" && (
        <g filter="url(#flash-shadow)">
          <path
            d="
              M 77 21
              C 91 33
                96 52
                89 69
              C 82 87
                63 95
                44 91
              C 25 88
                10 73
                8 54
              C 6 35
                17 18
                34 11
              C 50 4
                68 9
                77 21
            "
            stroke="url(#flash-ring)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* subtle top light */}
          <path
            d="
              M 18 29
              C 30 10
                58 5
                77 21
            "
            stroke="url(#flash-highlight)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* ========================= */}
      {/* INNER F RIBBON            */}
      {/* ========================= */}
      <g filter="url(#inner-shadow)">
        {/* vertical stem flowing into top arm */}
        <path
          d="
            M 36 72
            L 36 34
            C 36 28
              40 25
              47 25
            L 68 25
          "
          stroke="url(#flash-f)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* flowing crossbar in vibrant crimson gradient */}
        <path
          d="
            M 36 49
            L 60 49
          "
          stroke="url(#flash-tail)"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* top arm highlight */}
        <path
          d="
            M 38 42
            L 38 33
            C 38 29
              41 27
              47 27
            L 65 27
          "
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />

        {/* crossbar highlight */}
        <path
          d="M 39 48 L 56 48"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
      </g>

      {/* ========================= */}
      {/* OVERLAP / RIM GLOW EFFECT */}
      {/* ========================= */}
      <path
        d="M 38 50 L 58 50"
        stroke="#FB7185"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
    </svg>
  );
};

export const DaymarkLogo = FlashCardsLogo;
export const TaskLogo = FlashCardsLogo;
export const FlashLogo = FlashCardsLogo;

export const FLASH_CARDS_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><defs><linearGradient id="flash-ring" x1="12" y1="15" x2="90" y2="88" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#38BDF8"/><stop offset="20%" stop-color="#2563EB"/><stop offset="45%" stop-color="#4F46E5"/><stop offset="68%" stop-color="#9333EA"/><stop offset="85%" stop-color="#E11D48"/><stop offset="100%" stop-color="#EF4444"/></linearGradient><linearGradient id="flash-f" x1="32" y1="22" x2="68" y2="76" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="25%" stop-color="#BAE6FD"/><stop offset="55%" stop-color="#60A5FA"/><stop offset="80%" stop-color="#2563EB"/><stop offset="100%" stop-color="#1D4ED8"/></linearGradient><linearGradient id="flash-highlight" x1="20" y1="10" x2="75" y2="75" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9"/><stop offset="35%" stop-color="#FFFFFF" stop-opacity="0.2"/><stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/></linearGradient><linearGradient id="flash-tail" x1="33" y1="46" x2="65" y2="52" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FDA4AF"/><stop offset="28%" stop-color="#FB7185"/><stop offset="70%" stop-color="#E11D48"/><stop offset="100%" stop-color="#BE123C"/></linearGradient><filter id="flash-shadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#020617" flood-opacity="0.35"/></filter><filter id="inner-shadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="#1E1B4B" flood-opacity="0.45"/></filter></defs><g filter="url(#flash-shadow)"><path d="M 77 21 C 91 33 96 52 89 69 C 82 87 63 95 44 91 C 25 88 10 73 8 54 C 6 35 17 18 34 11 C 50 4 68 9 77 21" stroke="url(#flash-ring)" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><path d="M 18 29 C 30 10 58 5 77 21" stroke="url(#flash-highlight)" stroke-width="3" stroke-linecap="round"/></g><g filter="url(#inner-shadow)"><path d="M 36 72 L 36 34 C 36 28 40 25 47 25 L 68 25" stroke="url(#flash-f)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M 36 49 L 60 49" stroke="url(#flash-tail)" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M 38 42 L 38 33 C 38 29 41 27 47 27 L 65 27" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-opacity="0.7"/><path d="M 39 48 L 56 48" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-opacity="0.6"/></g><path d="M 38 50 L 58 50" stroke="#FB7185" stroke-width="1.8" stroke-linecap="round" stroke-opacity="0.45"/></svg>`;

export const DAYMARK_LOGO_SVG = FLASH_CARDS_LOGO_SVG;

export const FLASH_CARDS_FAVICON_DATA_URI = `data:image/svg+xml,${encodeURIComponent(FLASH_CARDS_LOGO_SVG)}`;

export const DAYMARK_FAVICON_DATA_URI = FLASH_CARDS_FAVICON_DATA_URI;

export default FlashCardsLogo;
