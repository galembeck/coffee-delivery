import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";

import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/complete-order" element={<CompleteOrderPage />} />
        <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  );
}
