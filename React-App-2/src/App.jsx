import './App.css'
import UserList from "./Components/UsersList";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Counter from './Components/Counter';
function App(){
  return(
    <div>
      <Navbar />
      <div>
      <UserList/>
      </div>
      <Footer />
    </div>
  );
}
export default App