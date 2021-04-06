import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import News from "./Components/News/News";
import Header from "./Components/Header/Header";
import TopHeadline from "./Components/TopHeadline/TopHeadline";

function App() {
  return (
    <div>
      <Header></Header>
      <TopHeadline></TopHeadline>
      {/* <News></News> */}
    </div>
  );
}

export default App;
