import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import MplId from "./components/Mpl_Id";
import MplPh from "./components/MplPh";
import MplMy from "./components/MplMy";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="mplid">
        <MplId />
      </div>

      <div className="mplph">
        <MplPh />
      </div>

      <div className="mplmy">
        <MplMy />
      </div>
    </div>
  );
}

export default App;
