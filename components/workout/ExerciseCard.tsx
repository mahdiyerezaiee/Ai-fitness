
"use client";

import { ExerciseAnimation } from "@/components/ui/ExerciseAnimation";

type Props = {
  name: string;
  sets: number;
  reps: number;
  animation: string;
};

export function ExerciseCard({ name, sets, reps, animation }: Props) {
  return (
    <div className="bg-card rounded-xl p-4 mb-4">
     {/* <div className="w-48"><ExerciseAnimation  animationPath={animation} /> */}
{/* </div>  */}
      <h3 className="text-lg mt-2">{name}</h3>
      <p className="text-muted">
        {sets} sets × {reps} reps
      </p>
    </div>
  );
}
