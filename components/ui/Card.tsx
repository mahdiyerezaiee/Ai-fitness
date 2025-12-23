"use client";


export function Card({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl cursor-pointer border
      ${active ? "border-primary" : "border-transparent"}
      bg-card`}
    >
      {children}
    </div>
  );
}
