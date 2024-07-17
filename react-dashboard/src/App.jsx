import { Dashboard } from "@mui/icons-material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { createContext } from "react";

// Initialize context with createContext()
const MyContext = createContext();

function App() {
  const values = {};

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <section className="main flex">
            <div className="side-wrapper w-[15%]">
              <Sidebar />
            </div>

            <div className="context-right w-[85%] px-3 ">
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </section>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
