import { Routes, Route } from "react-router-dom";

import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { Edit } from "../pages/Edit";

export function AppRoutes({ isAdmin }) {
  return (
    <Routes>
      <Route path="/" element={<Home isAdmin={isAdmin} />} />
      <Route path="/new" element={<New isAdmin={isAdmin} />} />
      <Route path="/edit/:id" element={<Edit isAdmin={isAdmin} />} />
      <Route path="/dish/:id" element={<Dish isAdmin={isAdmin} />} />
    </Routes>
  );
}