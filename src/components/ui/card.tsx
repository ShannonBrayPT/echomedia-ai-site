
import { ReactNode } from "react";
export function Card({ children }: { children: ReactNode }) {
  return <div className="bg-slate-700 p-4 rounded-xl shadow-md">{children}</div>;
}
export function CardContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
