import React from 'react';
import Copyright from './Copyright';
import ReactComponent from './ReactComponent';

class ReactApp extends React.Component {
  render() {
    return (
      <div className="app-container">
        <ReactComponent />
        <Copyright />
      </div>
    );
  }
}

export default ReactApp;