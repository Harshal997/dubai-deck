"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props {
    end: number;
    suffix?: string;
}

export default function StatsCard({ end, suffix }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="backdrop-blur-xl"
    >
      <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-white">
        {inView && (
          <CountUp
            end={end}
            duration={2.5}
            suffix={suffix}
          />
        )}
      </h3>
    </div>
  );
}