import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="min-h-screen text-white bg-[#0c141d] flex flex-col">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;