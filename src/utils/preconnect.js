export function addPreconnect() {
  if (typeof document === 'undefined') return
  
  const origins = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://aziza-spa.vercel.app'
  ]
  
  origins.forEach(origin => {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = origin
    if (origin.includes('fonts')) {
      link.crossOrigin = 'anonymous'
    }
    document.head.appendChild(link)
  })
}
