import { lazy } from "react";
export const Dashboard = lazy(() => import("./Dashboard"));
export const Users = lazy(() => import("./User"));
export const Category = lazy(()=>import('./Category'))
export const Products = lazy(()=>import('./Products'))