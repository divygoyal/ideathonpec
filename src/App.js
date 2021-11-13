import React, { Component } from 'react';
import './App.css';
// import NavBar from './Components/NavBar';
// import Body from './Components/Body';

import Dashboard from './components/Dashboard.jsx'
import UnsafeScriptsWarning from "./components/UnsafeScriptsWarning";


// const Application=()=> {
//   return (
//       <div>
//           <NavBar />
//           <Body />
//       </div>
//   );
// }

class App extends Component {

  state = {
    hasError: false,
    showSpinner: true
  }

  static getDerivedStateFromError(error) {
    
    console.log('some error has occured');
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    
    console.log(error, info);
  }

  hideSpinner = () => {
    this.setState({showSpinner: false});
  }

  render() {
    if (this.state.hasError) {
      return <UnsafeScriptsWarning />;
    }
    return (
      <div className="App">
        <Dashboard hideSpinner={this.hideSpinner} showSpinner={this.state.showSpinner} />
      </div>
    );
  }
}

export default App;
