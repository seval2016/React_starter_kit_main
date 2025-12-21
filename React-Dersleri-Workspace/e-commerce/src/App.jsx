import { ThemeProviderCustom } from "./context/ThemeContext";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProviderCustom>
      <Header />
      <RouterConfig />
      <Loading />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        transition={Slide}
        theme="colored"
      />
    </ThemeProviderCustom>
  );
}

export default App;
