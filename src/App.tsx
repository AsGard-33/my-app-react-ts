import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import About from "pages/About/About";
import Home from "pages/Home/Home";
import Users from "pages/Users/Users";
import Clients from "pages/Clients/Company";
import Facebook from "pages/Clients/Facebook/Facebook";
import IBM from "pages/Clients/IBM/IBM";
import Porsche from "pages/Clients/Porsche/Porsche";

//Lesson
// import Lesson20 from './lessons/lesson20/Lesson20';
// import Lesson21 from './lessons/lesson21/Lesson21';
// import Lesson22 from './lessons/lesson22/Lesson22';
// import Lesson23 from "lessons/lesson23/Lesson23";
// import Lesson24 from "lessons/lesson24/Lesson24";
// import Lesson25 from "lessons/lesson25/Lesson25";

// import Homework20 from './homeworks/homework20/Homework20';
// import Homework21 from './homeworks/homework21/Homework21';
// import Homework22 from 'homeworks/homework22/Homework22';
// import Homework23 from "homeworks/homework23/Homework23";
// import Homework24 from "homeworks/homework24/Homework24";
// import Homework25 from "homeworks/homework25/Homework25";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/ibm" element={<IBM />} />
          <Route path="/clients/porsche" element={<Porsche />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
      {/* <Lesson20/> */}
      {/* <Lesson21/> */}
      {/* <Lesson22/> */}
      {/* <Lesson23 /> */}
      {/* <Lesson24/> */}
      {/* <Lesson25/> */}
      {/* <Homework20/> */}
      {/* <Homework21/> */}
      {/* <Homework22/> */}
      {/* <Homework23/> */}
      {/* <Homework24/> */}
      {/* <Homework25/> */}
    </BrowserRouter>
  );
}

export default App;
