import Header from "./header/Header";
import Footer from "./Footer/Footer";
import "./App.css"
function App() {
  return (
   <>
   <div className="parent flex flex-col">
    <div><Header/></div>
    <main className="flex-1 "></main> 
    <Footer/>
   </div>
   </>
  );
}

export default App;