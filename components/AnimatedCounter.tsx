"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
};

export default function AnimatedCounter({
  end,
  suffix = "",
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div ref={ref}>
      {inView && (
        <CountUp start={0} end={end} duration={2.5} separator=",">
          {({ countUpRef }) => (
            <span
              ref={countUpRef}
              className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            />
          )}
        </CountUp>
      )}
      <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {suffix}
      </span>
    </div>
  );
}
