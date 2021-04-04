import './App.css';
import Header from "./Header.js";
import LeftBar from "./LeftBar.js";
import RightBar from "./RightBar.js"
import Login from "./Login.js"
import {useStateValue} from "./StateProvider";
function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="app">
    {!user ? (
        <Login/>
      ):(
      <div>  
        <Header id="top"/>
        <div className="app_body">
          <LeftBar/>
          <RightBar/>
        </div>
        <div className="footer">
        <a href="#top">Go Back</a></div>
      </div>
      )
    } 
    </div>
  );
}

export default App;
