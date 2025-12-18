import { ThemeProviderCustom } from "./context/ThemeContext";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";

function App() {
  return (
    <ThemeProviderCustom>
      <Header />
      <RouterConfig />
      <Loading />
    </ThemeProviderCustom>
  );
}

export default App;
