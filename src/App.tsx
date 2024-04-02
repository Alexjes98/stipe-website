import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appRoutes from "./routes/appRoutes.tsx";
import Layout from "./pages/layout.tsx";

function App() {
  let router = createBrowserRouter(appRoutes);
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
