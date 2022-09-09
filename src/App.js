import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./contexts/Layout";
import ErrorBoundary from "./error_boundary";
import MainRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Layout>
          <MainRoutes />
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
