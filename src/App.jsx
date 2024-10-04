import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import SocialMedia from "./pages/SocialMedia";
import About from "./pages/About";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="work" element={<Work />}>
                    <Route index element={<CaseStudy />} />
                    <Route path="case-study" element={<CaseStudy />} />
                    <Route path="social-media" element={<SocialMedia />} />
                </Route>
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default App;
