
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
// document.body.style = 'background-image: red;';
function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet />
    </div>
  );
}

export default App;
