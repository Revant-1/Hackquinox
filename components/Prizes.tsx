"use client";
import AnimatedShinyText from "./textshineeffect";
import LampHeader from "./ui/lamp";
export function Prizes() {
  const words = [
    {
      text: "",
    }
    
  ];
  return (<>
    <LampHeader text="Prizes" lampColor="#E9ECEF" />
    <AnimatedShinyText className="text-4xl text-center p-10 font-bold" shimmerWidth={200}>
            Coming Soon ...
    </AnimatedShinyText>
    </>
  );
}
