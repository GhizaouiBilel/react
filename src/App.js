
import './App.css';
import Header from './components/headers/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Faorm from './components/headers/Form.js'
import { Image } from 'react-bootstrap';
<link rel="stylesheet" href="app.css"></link>
function App() {
  return (
    
    <div className="App">
   <Header/>
   <Faorm/>
   <Image src="https://wallpaperaccess.com/full/1107734.jpg" />
   <footer>
     Welcome to the Corleone Family
   </footer>
    </div>
  );
}
export default App;