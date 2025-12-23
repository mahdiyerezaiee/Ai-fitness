"use client";
import { useWorkout } from "@/context/WorkoutContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function LevelPage() {
  const { state, setState } = useWorkout();
  const router = useRouter();

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl">Level</h2>

      <select
        className="w-full mb-4 p-2 rounded"
        onChange={(e) => setState({ ...state, level: e.target.value })}
      >
        <option>beginner</option>
        <option>intermediate</option>
      </select>

      <select
        className="w-full mb-6 p-2 rounded"
        onChange={(e) => setState({ ...state, duration: Number(e.target.value) })}
      >
        <option value={20}>20 min</option>
        <option value={30}>30 min</option>
        <option value={45}>45 min</option>
      </select>

      <Button onClick={() => router.push("/workout")}>
        Generate Plan
      </Button>
    </div>
  );
}
