import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./contexts/Layout";
import ErrorBoundary from "./error_boundary";
import MainRoutes from "./routes";
import { UserProvider } from "./contexts/User";
function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <UserProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </UserProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
