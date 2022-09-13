import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./contexts/Layout";
import ErrorBoundary from "./error_boundary";
import MainRoutes from "./routes";
import { UserProvider } from "./contexts/User";
import { MyThemeProvider } from "./contexts/Theme";
function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <MyThemeProvider>
          <UserProvider>
            <Layout>
              <MainRoutes />
            </Layout>
          </UserProvider>
        </MyThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
