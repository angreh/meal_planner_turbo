import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="flex float-start flex-col w-full max-w-[400px] px-6 pb-4 mt-4">
        <h1 className="text-3xl font-bold">Meal Planner</h1>
      </div>

      <div className="w-full max-w-[400px]">
        <Outlet />
      </div>

      <div className="mx-auto px-4 py-4"></div>
    </div>
  );
};
