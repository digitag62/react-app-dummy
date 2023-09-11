import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.comp";
import Home from "./routes/home/home.comp";
import About from "./routes/about/about.comp";
import Contact from "./routes/contact/contact.comp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
