import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import SocialMedia from "./pages/SocialMedia";
import About from "./pages/About";
import Terragon from "./pages/Terragon";
import MTN from "./pages/MTN";
// import Vitse from "./pages/Vitse";
import Cloud from "./pages/Cloud";

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
                <Route path="work/terragon" element={<Terragon />} />
                <Route path="work/mtn" element={<MTN />} />
                {/* <Route path="work/vitse" element={<Vitse />} /> */}
                <Route path="work/cloud-marketing" element={<Cloud />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default App;
