import "./globals.css";
import { WorkoutProvider } from "@/context/WorkoutContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WorkoutProvider>{children}</WorkoutProvider>
      </body>
    </html>
  );
}
