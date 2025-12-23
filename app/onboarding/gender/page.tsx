"use client";
import { Card } from "@/components/ui/Card";
import { useWorkout } from "@/context/WorkoutContext";
import { useRouter } from "next/navigation";

export default function GenderPage() {
  const { state, setState } = useWorkout();
  const router = useRouter();

  return (
    <div className="p-6 bg-background min-h-screen">
      <h2 className="mb-6 text-xl">Select gender</h2>

      <div className="grid grid-cols-2 gap-4">
        <Card
          active={state.gender === "female"}
          onClick={() => setState({ ...state, gender: "female" })}
        >
          Female
        </Card>
        <Card
          active={state.gender === "male"}
          onClick={() => setState({ ...state, gender: "male" })}
        >
          Male
        </Card>
      </div>

      <button
        className="mt-6 underline"
        onClick={() => router.push("/onboarding/location")}
      >
        Continue →
      </button>
    </div>
  );
}
