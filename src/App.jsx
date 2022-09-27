import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";

import "./Styles/app.css";

function App() {
  return (
    <div id="portfolio">
      <h1>Igor Gomes</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
