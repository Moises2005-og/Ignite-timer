import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { ReactNode } from "react";


export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="p-5">
      <Header />
      <main>
        {children}
        <Outlet />
      </main>
    </div>
  );
}
