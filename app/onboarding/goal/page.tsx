"use client";
import { Card } from "@/components/ui/Card";
import { useWorkout } from "@/context/WorkoutContext";
import { useRouter } from "next/navigation";

export default function GoalPage() {
  const { state, setState } = useWorkout();
  const router = useRouter();

  return (
    <div className="p-6">
      <h2 className="mb-6 text-xl">Your goal</h2>

      {["lose", "gain", "maintain"].map((g) => (
        <div key={g} className="mb-4">
          <Card
            active={state.goal === g}
            onClick={() => setState({ ...state, goal: g })}
          >
            {g}
          </Card>
        </div>
      ))}

      <button className="mt-6 underline" onClick={() => router.push("/onboarding/level")}>
        Continue →
      </button>
    </div>
  );
}
