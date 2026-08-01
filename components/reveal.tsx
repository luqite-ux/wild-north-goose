'use client'

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react'

export function Reveal({ children, delay = 0, variant = 'up', className = '' }: { children: ReactNode; delay?: number; variant?: 'up' | 'left' | 'soft'; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.14 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`outdoor-reveal outdoor-reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>{children}</div>
}
