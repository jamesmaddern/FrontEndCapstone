import './App.css';
import Nav from './Nav.js'
import Main from './Main.js'
import Footer from './Footer.js'

function App() {
  return (

    <>
      <div style={{ position: "fixed" }}>
        <Nav></Nav></div>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
