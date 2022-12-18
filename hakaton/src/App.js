import './App.css';
import React from 'react';
import SideWindow from './side_window/SideWindow';
import MainWindow from './main_window/MainWindow';

function App() {
  return (

    <div class="container-fluid">
      <div class="row">
        <div class="col col-8">
          <div className="main">
            <MainWindow/>
          </div>
        </div>
        <div class="col col-4">
          <div className="side">
            <SideWindow/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;