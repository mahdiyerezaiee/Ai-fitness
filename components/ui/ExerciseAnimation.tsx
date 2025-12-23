"use client";

import Lottie from "lottie-react";

type Props = {
  animationPath: string;
};

export function ExerciseAnimation({ animationPath }: Props) {
  return (
    <div className="w-full h-48">
      <Lottie
        animationData={require(`@/public/animations/${animationPath}`)}
        loop
      />
    </div>
  );
}
