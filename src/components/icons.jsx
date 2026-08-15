const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

const S = ({ children, ...props }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...base} {...props}>
    {children}
  </svg>
)

export const IconMic = () => (
  <S>
    <rect x="9" y="2.5" width="6" height="11" rx="3" />
    <path d="M5.5 10.5a6.5 6.5 0 0 0 13 0" />
    <path d="M12 17v3.5" />
    <path d="M8.5 21.5h7" />
  </S>
)

export const IconScale = () => (
  <S>
    <path d="M12 4v16" />
    <path d="M7 20h10" />
    <path d="M4.5 7.5h15" />
    <path d="M12 4.5c-1.6-1.6-4.4-.6-4.4 2.4 0 3 2.8 4 4.4 2.4 1.6 1.6 4.4.6 4.4-2.4 0-3-2.8-4-4.4-2.4z" transform="translate(0 2.5)" />
    <path d="M7.5 11.5 6 16.5" />
    <path d="M16.5 11.5 18 16.5" />
    <circle cx="6" cy="18.5" r="1.6" />
    <circle cx="18" cy="18.5" r="1.6" />
  </S>
)

export const IconHouseTraditional = () => (
  <S>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M12 4l2.9 3.9a3 3 0 0 1-5.8 0z" />
    <path d="M5.5 9.7V20h13V9.7" />
    <path d="M10.2 20v-4.2c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8V20" />
    <path d="M5.5 14.5h2.2M16.3 14.5h2.2" />
  </S>
)

export const IconApartment = () => (
  <S>
    <path d="M5.5 21V5.5A1.5 1.5 0 0 1 7 4h10a1.5 1.5 0 0 1 1.5 1.5V21" />
    <path d="M3.5 21h17" />
    <path d="M9 8h1.5M13.5 8H15" />
    <path d="M9 12h1.5M13.5 12H15" />
    <path d="M9 16h1.5M13.5 16H15" />
  </S>
)

export const IconLeaf = () => (
  <S>
    <path d="M4 20C4 10 10 4.5 20 4c.5 10-6 16-16 16z" />
    <path d="M4 20C8 14 12 11 18 7" />
  </S>
)

export const IconCheck = () => (
  <S>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </S>
)

export const IconX = () => (
  <S>
    <path d="M6 6l12 12M18 6 6 18" />
  </S>
)

export const IconSprout = () => (
  <S>
    <path d="M12 21v-8" />
    <path d="M12 13c0-4 3-6.5 7-6.5 0 3.8-2.8 6.5-7 6.5z" />
    <path d="M12 11c0-3-2.2-5-5.5-5 0 2.8 2 5 5.5 5z" />
  </S>
)

export const IconLinked = () => (
  <S>
    <circle cx="9" cy="12" r="4" />
    <circle cx="15" cy="12" r="4" />
  </S>
)

export const IconArrows = () => (
  <S>
    <path d="M4 8h13m0 0-3.5-3.5M17 8l-3.5 3.5" />
    <path d="M20 16H7m0 0 3.5-3.5M7 16l3.5 3.5" />
  </S>
)

export const IconGenerations = () => (
  <S>
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="5.5" cy="17.5" r="2.5" />
    <circle cx="18.5" cy="17.5" r="2.5" />
    <path d="M12 7.5v4m0 0c0 2-2.4 3-4 3.5m4-3.5c0 2 2.4 3 4 3.5" />
  </S>
)

export const IconBook = () => (
  <S>
    <path d="M12 6.5C10 4.8 7.5 4.5 4 5v14c3.5-.5 6-.2 8 1.5 2-1.7 4.5-2 8-1.5V5c-3.5-.5-6-.2-8 1.5z" />
    <path d="M12 6.5v14" />
  </S>
)

export const IconGavel = () => (
  <S>
    <path d="m14 8 4.5 4.5" />
    <path d="M16 6.5 9.5 13a1.6 1.6 0 0 1-2.3 0L4.6 10.5a1.6 1.6 0 0 1 0-2.3L11.2 1.6a1.6 1.6 0 0 1 2.3 0L16 4.2a1.6 1.6 0 0 1 0 2.3z" />
    <path d="M7.5 4.8l5 5" />
    <path d="M20.5 20.5 12.5 13.5" />
    <path d="M17.5 19.5h4" />
  </S>
)

export const IconArrowDown = () => (
  <S>
    <path d="M12 4v15" />
    <path d="m6.5 13.5 5.5 5.5 5.5-5.5" />
  </S>
)

export const IconLotusOrnament = () => (
  <S>
    <path d="M12 4.5c1.6 1.4 2.2 3 1.8 4.6 2.6-.2 4.6.8 5.9 2.4-.4.6-1 1.2-1.7 1.6-.4.2-.9.4-1.4.4.4.6.9 1.3 1.5 2-.9.8-2 1.1-3 1.3.6.7 1.2 1.5 1.7 2.3-.9.4-1.9.4-2.8.2M12 4.5C10.4 5.9 9.8 7.5 10.2 9.1c-2.6-.2-4.6.8-5.9 2.4.4.6 1 1.2 1.7 1.6.4.2.9.4 1.4.4-.4.6-.9 1.3-1.5 2 .9.8 2 1.1 3 1.3-.6.7-1.2 1.5-1.7 2.3.9.4 1.9.4 2.8.2" />
  </S>
)

export const IconQuote = () => (
  <S>
    <path d="M9.5 7C7 8.2 5.5 10.2 5.5 13v4h4.5v-4.5H7.2c.1-1.8 1.1-3.1 3-4L9.5 7z" />
    <path d="M18.5 7c-2.5 1.2-4 3.2-4 6v4H19v-4.5h-2.8c.1-1.8 1.1-3.1 3-4L18.5 7z" />
  </S>
)
