import React, { useEffect, useState, useRef } from 'react';
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  once?: boolean;
}
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 600,
  once = false
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '20px 0px -40px 0px'
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);
  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`
  };
  // Entrance: use provided delay and duration
  // Exit: no delay, faster duration for snappy disappearance
  const exitDuration = Math.max(300, duration * 0.5);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : translateMap[direction],
        transition: isVisible ?
        `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms` :
        `opacity ${exitDuration}ms ease-in 0ms, transform ${exitDuration}ms ease-in 0ms`,
        willChange: 'opacity, transform'
      }}>

      {children}
    </div>);

}