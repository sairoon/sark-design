import React, { useEffect, useState } from "react";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = duration / target / 1000; 
    let current = 0;

    const increment = target / ((duration * 1000) / 10); 
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, interval * 10);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>{target === 99.99 ? `${count.toFixed(2)}%` : Math.round(count)}</span>
  );
};

const Banner = () => {
  return (
    <div className="bg-[#0F172A] w-[1076px] rounded-[10px] absolute top-[900px] left-1/2 -translate-x-1/2">
      <div className="px-14 py-9">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center justify-center">
            <div className="font-primaryBold text-5xl text-white">
              <Counter target={110} duration={10} />+ {/* 5 sec */}
            </div>
            <div className="font-primaryMedium text-base mt-6 text-center text-[#CBD5E1]">
              Automation templates for creating your campaigns quickly
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-primaryBold text-5xl text-white">
              <Counter target={4} duration={10} />M
            </div>
            <div className="font-primaryMedium text-base mt-6 text-center text-[#CBD5E1]">
              Automation templates for creating your campaigns quickly
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-primaryBold text-5xl text-white">
              <Counter target={99.99} duration={10} />
            </div>
            <div className="font-primaryMedium text-base mt-6 text-center text-[#CBD5E1]">
              Automation templates for creating your campaigns quickly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
