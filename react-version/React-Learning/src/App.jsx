
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import SecondWrapper from "./components/SecondWrapper/Secondwrapper";
import Thirdwrapper from "./components/Thirdwrapper/Thirdwrapper";
import Fourthwrapper from "./components/Fourthwrapper/Fourthwrapper";
import Fifthwrapper from "./components/Fifthwrapper/Fifthwrapper";
import Sixthwrapper from "./components/Sixthwrapper/Sixthwrapper";
import "./css/styles.css";

  function App() {
    return (
      <div>
        <Header />
        <Wrapper />
        <SecondWrapper/>
  <Thirdwrapper/>
  <Fourthwrapper/>
  <Fifthwrapper/>
  <Sixthwrapper/>

        <Footer />
      </div>
    );
  }

export default App;
