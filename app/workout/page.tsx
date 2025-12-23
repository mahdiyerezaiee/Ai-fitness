"use client";
import { useEffect, useState } from "react";
import { ExerciseCard } from "@/components/workout/ExerciseCard";
import { useWorkout } from "@/context/WorkoutContext";

export default function WorkoutPage() {
  const { state } = useWorkout();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/generate-workout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <p className="p-6">Generating workout…</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Your Workout</h2>

      {data.exercises.map((ex: any) => (
        <ExerciseCard
          key={ex.name}
          name={ex.name}
          sets={ex.sets}
          reps={ex.reps}
          animation={ex.animation}
        />
      ))}
    </div>
  );
}
