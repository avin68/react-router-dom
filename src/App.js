import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Blog from "./components/Blog"
import NotFound from "./components/notFound/NotFound"
function App(){
    return(
        
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<h1>avin esmaeili</h1>} />
                <Route path="/about" element={<h2>salar esp</h2>} />
                <Route path="/contact" element={<p>contact page</p>} />
                <Route path="/blog" element={<p>blog page</p>} /> */}

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={< NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App