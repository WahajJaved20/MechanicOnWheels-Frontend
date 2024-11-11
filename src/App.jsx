import "./App.css";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./Contexts/theme";
import { useEffect, useState } from "react";
import Team from "./Components/Team";
import TeamMemberFormPage from "./Components/TeamMemberForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InspectionForm from "./Components/InspectionForm";
import ViewInspection from "./Components/ViewInspection";
function App() {
  const [themeMode, setThemeMode] = useState("light");
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
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Router>
          <div className="flex flex-row dark:bg-black">
            <Sidebar />
            <div className="flex flex-col flex-1">
              <Routes>
                {/* <Route path="/" element={<Dashboard />} /> */}
                <Route path="/team" element={<Team />} />
                {/* <Route path="/addTeamMember" element={<TeamMemberFormPage />} /> */}
                <Route path="/" element={<InspectionForm />} />
                <Route path="/inspectionForm" element={<InspectionForm />} />
                <Route path="/viewInspection" element={<ViewInspection />} />
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
    </>
  );
}

export default App;
