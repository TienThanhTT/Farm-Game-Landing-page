import "./App.css";
import Header from "../layouts/header/Header";
import Home from "../layouts/section";
import Footer from "../layouts/footer/Footer";
import "../styles/components/layout/header/header.css";
import "../styles/components/layout/footer/footer.css";
import "../styles/setting/colors.css";
import "../styles/setting/styleConfig.css";

import "../styles/components/items/textTitle.css";
import "../styles/components/items/playButton.css";
import "../styles/components/items/line.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
