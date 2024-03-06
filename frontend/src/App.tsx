import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { ThemeButton } from "./components/ThemeButton";

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen w-screen flex justify-center items-center dark:bg-neutral-900">
        <ThemeButton/>
      </div>
    </Provider>
  );
}

export default App;
