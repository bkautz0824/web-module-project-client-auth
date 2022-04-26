import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';


  const Login = () => {
    return <h2>Login</h2>
  }

  const FriendList = () => {
    return <h2>FriendList</h2>
  }

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
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
        <Route path="/friends" component={FriendList} />
        <Route path="/friends/add" component={AddFriendList} />
      </Switch>
    </div>
    </Router>

  );
}

export default App;
