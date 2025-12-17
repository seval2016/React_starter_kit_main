import { ThemeProviderCustom } from "./context/ThemeContext";
import Header from "./components/Header";
import PageContainer from "./container/PageContainer";

function App() {
  return (
    <ThemeProviderCustom>
      <Header />
      <PageContainer>
        {/* içerik */}
      </PageContainer>
    </ThemeProviderCustom>
  );
}

export default App;
