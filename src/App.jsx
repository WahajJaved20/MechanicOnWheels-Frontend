import "./App.css";
import Sidebar from "./Components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { ThemeProvider } from "./Contexts/theme";
import { useEffect, useState } from "react";
import Team from "./Components/Team";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InspectionForm from "./Components/InspectionForm";
import ViewInspection from "./Components/ViewInspection";
import Error404 from "./404";
import InspectionTable from "./Components/InspectiponTable";
import LoginPage from "./Components/LoginPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useLoading, LoadingProvider } from "./Contexts/loadingContext";
import LoadingBackdrop from "./Components/FullLoder";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [themeMode, setThemeMode] = useState("light");
  const startLoading = () => {
    setIsLoading(true);
  };
  const stopLoading = () => {
    setIsLoading(false);
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <LoadingProvider value={{ isLoading, startLoading, stopLoading }}>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Router>
          <LoadingBackdrop />
          <div className="flex flex-row dark:bg-black">
            <Sidebar />
            <div className="flex flex-col flex-1">
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/team"
                  element={
                    <ProtectedRoute>
                      <Team />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/inspectionForm"
                  element={
                    <ProtectedRoute>
                      <InspectionForm />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/viewInspection/:id"
                  element={
                    <ProtectedRoute>
                      <ViewInspection />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/inspection"
                  element={
                    <ProtectedRoute>
                      <InspectionTable />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </LoadingProvider>
  );
}

export default App;
