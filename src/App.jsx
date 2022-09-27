import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./Styles/components/app.css";

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
