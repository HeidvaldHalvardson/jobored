import {BrowserRouter} from "react-router-dom";
import {useEffect} from "react";
import {auth} from "./api/api";
import {Provider} from "react-redux";
import {store} from "./reducers/store";
import Header from "./layots/Header/Header";
import Main from "./layots/Main/Main";

function App() {

  useEffect(() => {
    auth()
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
