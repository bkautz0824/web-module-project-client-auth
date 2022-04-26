import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';




  
  const AddFriendList = () => {
    return <h2>AddFriendList</h2>
  }


function App() {


  return (
    <Router>

    <div className="App">
    <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
    </ul>
      <h2>Client Auth Project</h2>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        <Route exact path="/friends" component={FriendsList} />
        <Route exact path="/friends/add" component={AddFriendList} />
      </Switch>
    </div>
    </Router>

  );
}

export default App;
