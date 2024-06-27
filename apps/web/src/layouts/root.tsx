import { NavLink, Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <nav className="w-[380px]">
        <ul className="flex items-center p-4 space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/plans">Plans</NavLink>
          </li>
          <li>
            <NavLink to="/meals">Meals</NavLink>
          </li>
          <li>
            <NavLink to="/ingredients">Ingredients</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <div className="flex float-start flex-col w-full max-w-[400px] px-6 pb-4">
        <h1 className="text-3xl font-extralight">Meal Planner</h1>
      </div>

      <div className="w-full max-w-[400px]">
        <Outlet />
      </div>

      <div className="mx-auto px-4 py-4"></div>
    </div>
  );
};
