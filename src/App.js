import Header from "./components/layots/Header/Header";
import Main from "./components/layots/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {useEffect} from "react";
import {auth} from "./api/api";

function App() {

  useEffect(() => {
    auth()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
