import { useEffect, useRef } from "react";

export const useObserver = (ref: React.RefObject<HTMLElement | null>, isLoading: boolean, callback: () => void) => {
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
          if (isLoading) return;
          if (!ref.current) return;

          observer.current?.disconnect();

          const cb: IntersectionObserverCallback = (entries) => {
            if (entries[0].isIntersecting){
              callback();
            }
          }
          observer.current = new IntersectionObserver(cb, {
            rootMargin: "100px",
          });
          observer.current.observe(ref.current)

          return () => {
            observer.current?.disconnect();
          }
        }, [isLoading, callback, ref])
}