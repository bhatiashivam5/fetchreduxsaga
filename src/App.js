import FetchUser from "./components/userComponent"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import UserDetails from "./components/userDetails";

function App() {
  return (
    <div className="App">
     
      <Router>
    
    <Switch>
      <Route exact path="/" component={FetchUser} />
       <Route exact path="/userDetails/:id" component={UserDetails} /> 
      </Switch>
                         
  
    </Router>
    </div>
  );
}

export default App;
