import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages";
import axios from "axios";

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
      console.log(error);
      //return Promise.reject(error);
    }
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Home />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
