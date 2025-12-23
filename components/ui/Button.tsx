
"use client";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-primary text-white py-3 rounded-xl font-semibold"
    >
      {children}
    </button>
  );
}
