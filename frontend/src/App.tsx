import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { Home } from "./pages";
import { CustomToaster } from "./components/CustomToaster";
import axios from "axios";
import toast from "react-hot-toast";

function App() {
  // Add a response interceptor to handle errors
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error.code === "ERR_NETWORK") toast.error("Error en el servicio");
      //else toast.error(error.response.data.message);
      return Promise.reject(error);
    }
  );

  return (
      <Provider store={store}>
        <CustomToaster />
        <Home />
      </Provider>
  );
}

export default App;
