import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages";
import { CustomToaster } from "./components/CustomToaster";
import axios from "axios";
import toast from "react-hot-toast";

function App() {

  // react-query client
  const queryClient = new QueryClient();

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
      toast.error(error.message);
      //return Promise.reject(error);
    }
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CustomToaster/>
        <Home />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
