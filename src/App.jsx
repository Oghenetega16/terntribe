import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import('./pages/Home'))
const GetInvolved = lazy(() => import('./pages/GetInvolved'))
export default function App() {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/get-involved" element={<GetInvolved />}></Route>
            </Routes>
        </Router>
    )
}

