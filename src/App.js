import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="app">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
