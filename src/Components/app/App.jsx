import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "../Posts/Posts";
import PostsDetails from "../Posts/PostDetails";
import { AboutPage, MainPage } from "../../Pages";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <button onClick={() => setVisible((prev) => !prev)}>Press</button>
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={   <AboutPage />} />
        <Route path="/main" element={ <MainPage />} />
        <Route path="/posts" element={ !visible && <Posts />} />
        <Route path="/posts/:id" element={  <PostsDetails />} /> 
        
       
        <Route path="*" element={<div>Not found 404</div>} />
      </Routes>
    </Router>
     
     </>
  );
};

export default App;