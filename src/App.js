import { Fragment } from "react";
import Navbar from "./Components/Navbar.js";
import HomePoster from "./Components/HomePoster.js";
import Project from "./Components/Project.js";
import NewLetter from "./Components/NewLetter.js";
import Footer from "./Components/Footer.js";
import Wellcome from "./Components/Wellcome.js"
import BottomBar from "./Components/BottomBar.js";
import "./App.css";



function App() {

return (
 <Fragment>
  <div className="bg-black">
 <Navbar/>
 <HomePoster/>
 <hr className="border border-zinc-700" />

<Wellcome/>
<hr className="border border-zinc-700" />
 <Project/>
 <NewLetter/>
 <hr className="border  border-gray-700" />
 <Footer/>
 </div>
 <BottomBar/>

</Fragment>
  );
}

export default App;
