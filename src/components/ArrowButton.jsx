import { Link } from 'react-router-dom'
import './ArrowButton.css'

function ArrowIcon() {
  return (
    <svg width="16" height="14" viewBox="0 0 31 28" fill="none" aria-hidden="true">
      <path d="M0.857 13.737h27.057" stroke="currentColor" strokeWidth="3" />
      <path d="M15.456 1.394 27.914 13.852 15.456 26.31" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}

function ArrowButton({ to, href, onClick, type = 'button', variant = 'dark', children, ariaLabel }) {
  const label = ariaLabel || (typeof children === 'string' ? children : undefined)
  const content = (
    <span className={`arrow-btn arrow-btn-${variant}`}>
      <span className="arrow-btn-label">{children}</span>
      <span className="arrow-btn-circle" aria-hidden="true">
        <ArrowIcon />
      </span>
    </span>
  )

  if (to) {
    return (
      <Link to={to} className="arrow-btn-wrap" aria-label={label}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className="arrow-btn-wrap" aria-label={label}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className="arrow-btn-wrap" aria-label={label}>
      {content}
    </button>
  )
}

export default ArrowButton
