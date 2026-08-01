import { Link } from 'react-router-dom'
import ArrowButton from '../components/ArrowButton'
import './NotFound.css'

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="container notfound-inner">
        <div className="notfound-card">
          <span className="notfound-icon" aria-hidden="true">🌳</span>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Looks like this branch doesn't exist. Let's get you back on solid ground.</p>
          <ArrowButton to="/" variant="light">Back to Home</ArrowButton>
        </div>
      </div>
    </div>
  )
}

export default NotFound
