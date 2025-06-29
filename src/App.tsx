import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import Containers from "./pages/Containers";
import CreateContainerForm from "./components/CreateContainerForm";
import ItemsPage from "./pages/Items";
import ItemPage from "./pages/ItemPage.tsx";

function App() {
    return (
        <div>

            <Layout>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/containers" element={<Containers />} />
                    <Route path="/container-form" element={<CreateContainerForm />} />
                    <Route path="/items" element={<ItemsPage />} />
                    <Route path="/items/:id" element={<ItemPage />} />
                    {/*<Route path="/adverts" element={<Advert/>} />*/}
                </Routes>
            </Layout>
        </div>
    );
}

export default App;

