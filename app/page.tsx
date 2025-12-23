"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">AI Fitness Coach</h1>
      <p className="text-muted mb-8">
        Your personalized workout plan
      </p>
      <Button onClick={() => router.push("/onboarding/gender")}>
        Start
      </Button>
    </main>
  );
}
