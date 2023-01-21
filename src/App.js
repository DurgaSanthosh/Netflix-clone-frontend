import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Rowcards from "./Components/Rowcards/Rowcards";
import { action, comedy, horror, originals, romance } from "./Urls";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowcards url={originals} title="Netflix Originals" />
      <Rowcards url={action} title="Action" isSmall />
      <Rowcards url={comedy} title="Comedy" isSmall />
      <Rowcards url={horror} title="Horror" isSmall />
      <Rowcards url={romance} title="Romance" isSmall />
    </div>
  );
}

export default App;
