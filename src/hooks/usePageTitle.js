import { useEffect } from 'react'

const SITE = 'City Roots Tree Services'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : SITE
    return () => {
      document.title = SITE
    }
  }, [title])
}
