import { createHashRouter, RouterProvider } from "react-router-dom";
import appRoutes from "./routes/appRoutes.tsx";
import Layout from "./pages/layout.tsx";

function App() {
  let router = createHashRouter(appRoutes);
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
