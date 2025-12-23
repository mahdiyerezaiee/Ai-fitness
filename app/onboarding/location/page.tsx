"use client";
import { Card } from "@/components/ui/Card";
import { useWorkout } from "@/context/WorkoutContext";
import { useRouter } from "next/navigation";

export default function LocationPage() {
  const { state, setState } = useWorkout();
  const router = useRouter();

  return (
    <div className="p-6">
      <h2 className="mb-6 text-xl">Workout place</h2>

      <Card active={state.location === "home"} onClick={() => setState({ ...state, location: "home" })}>
        Home
      </Card>
      <div className="h-4" />
      <Card active={state.location === "gym"} onClick={() => setState({ ...state, location: "gym" })}>
        Gym
      </Card>

      <button className="mt-6 underline" onClick={() => router.push("/onboarding/goal")}>
        Continue →
      </button>
    </div>
  );
}
