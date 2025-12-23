"use client";
import { createContext, useContext, useState } from "react";

type WorkoutState = {
  gender?: "male" | "female";
  location?: "home" | "gym";
  goal?: "lose" | "gain" | "maintain";
  level?: "beginner" | "intermediate";
  duration?: number;
};

const WorkoutContext = createContext<any>(null);

export function WorkoutProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<WorkoutState>({});

  return (
    <WorkoutContext.Provider value={{ state, setState }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export const useWorkout = () => useContext(WorkoutContext);
