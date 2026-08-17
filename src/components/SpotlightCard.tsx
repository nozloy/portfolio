import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from 'react'

type SpotlightCardProps = { children: ReactNode; className?: string }

// Lightweight local implementation of the cursor spotlight pattern popularized by React Bits.
export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const onPointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect || !ref.current) return
    ref.current.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    ref.current.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }
  return (
    <div ref={ref} onMouseMove={onPointerMove} className={`spotlight-card ${className}`} style={{ '--spot-x': '50%', '--spot-y': '50%' } as CSSProperties}>
      {children}
    </div>
  )
}
