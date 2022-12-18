import React from 'react';
import "./MainWindow.css";

class MainWindow extends React.Component {

    render() {
      return(
  
          <div class="container-fluid">
            <div class="row logo-row">
                <div class="col">
                    <div className='logo'>
                        <button className="logo" onClick={(event) => window.open("http://pgk.ru", "_blank") }></button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col justify-content-center">
                    <div className='loader d-flex'>
                        <label id="loader_image" class="loader"></label>
                        <div id="loader_status" className='status'>загрузите аудио</div>
                    </div>
                </div>
            </div>
          </div>
      );
    }
}

export default MainWindow;