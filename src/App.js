import "./assets/scss/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
