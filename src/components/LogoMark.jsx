function LogoMark({ size = 36, background = 'var(--green)', foreground = 'var(--bg)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="21" fill={background} />
      <path
        d="M22 9c-3.5 4-8 6-8 11.5A8 8 0 0 0 22 28a8 8 0 0 0 8-7.5C30 15 25.5 13 22 9Z"
        fill={foreground}
      />
      <rect x="20.6" y="26" width="2.8" height="9" rx="1.2" fill={foreground} />
    </svg>
  )
}

export default LogoMark
