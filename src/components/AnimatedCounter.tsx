 import { useEffect, useState, useRef } from 'react';
 import { motion, useInView } from 'framer-motion';
 
 interface AnimatedCounterProps {
   end: number;
   duration?: number;
   suffix?: string;
   className?: string;
 }
 
 export const AnimatedCounter = ({
   end,
   duration = 2,
   suffix = '',
   className = '',
 }: AnimatedCounterProps) => {
   const [count, setCount] = useState(0);
   const ref = useRef<HTMLSpanElement>(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
   const hasAnimated = useRef(false);
 
   useEffect(() => {
     if (isInView && !hasAnimated.current) {
       hasAnimated.current = true;
       const steps = 60;
       const increment = end / steps;
       const stepDuration = (duration * 1000) / steps;
       let current = 0;
 
       const timer = setInterval(() => {
         current += increment;
         if (current >= end) {
           setCount(end);
           clearInterval(timer);
         } else {
           setCount(Math.floor(current));
         }
       }, stepDuration);
 
       return () => clearInterval(timer);
     }
   }, [isInView, end, duration]);
 
   return (
     <motion.span
       ref={ref}
       initial={{ opacity: 0, scale: 0.5 }}
       animate={isInView ? { opacity: 1, scale: 1 } : {}}
       transition={{ duration: 0.5 }}
       className={className}
     >
       {count}{suffix}
     </motion.span>
   );
 };