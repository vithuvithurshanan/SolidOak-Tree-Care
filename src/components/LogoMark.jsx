function LogoMark({ size = 36 }) {
  return (
    <img
      src="/images/logo.webp"
      alt="Solid Oak Tree Care logo"
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'block' }}
    />
  )
}

export default LogoMark
