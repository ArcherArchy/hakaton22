import React from 'react';
import "./SideWindow.css";
import server from "../api/server"

<input type="file" onChange={ (event) => this.handleChange(event.target.files) } />

class SideWindow extends React.Component {

  UploadFileToApi(config, formData){
    try{
      const response = server.post("", formData, config)  
      //alert("Uploaded successfully!")
      document.getElementById("loader_image").style.animationPlayState = "running";
      document.getElementById("loader_status").textContent = "выполняется";
      document.getElementById("download-button").disabled = true;
      setTimeout(() => {
        document.getElementById("loader_image").style.animationPlayState = "stopped";
        document.getElementById("loader_status").textContent = "готово!";
        document.getElementById("download-button").disabled = false;

      }, 10000);
    }
    catch{
      alert("Downloaded unsuccessfully!")
    }
  }

  DownloadFileFromApi(){
    const response = server.get("http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]")
    .then((response) => response.blob())
    .then((blob) => {
      // Create blob link to download
      const url = window.URL.createObjectURL(
        new Blob([blob]),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        `FileName.png`,
      );
  
      // Append to html link element page
      document.body.appendChild(link);
  
      // Start download
      link.click();
  
      // Clean up and remove the link
      link.parentNode.removeChild(link);
    });
  }

  OnSelectImageHandler(selected_file)
  {
    const file = selected_file[0]
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
          "Contetnt-Type":"multipart/form-data" 
      }
    };
  this.UploadFileToApi(config, formData)
  }
  
  render() {
    return(

        <div class="container-fluid">
          <div class="row justify-content-center ">
            <div class="col col-12">
              <div className='button-col slogan d-flex'>
                <SloganButton/>
              </div>
            </div> 
          </div>
          <div class="row justify-content-center ">
            <div class="col col-12">
              <div className='button-col upload-button d-flex'>
                <label class="btn btn-primary btn-lg main-button">
                  загрузить аудио <input type="file" onChange={ (event) => this.OnSelectImageHandler(event.target.files) } hidden/>
                </label>
              </div>
            </div>
          </div>
          <div class="row justify-content-center ">
            <div class="col col-12">
              <div className='button-col download-button d-flex'>
                <LoadButton/>
              </div>
            </div>
          </div>
        </div>

    );
  }
}
  
  class LoadButton extends React.Component {
    onClick(){
      try{
        const response = server.get("http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]")
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(
            new Blob([blob]),
          );
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute(
            'download',
            `FileName.png`,
          );
      
          document.body.appendChild(link);
      
          link.click();
      
          link.parentNode.removeChild(link);
        });
      }
      catch{
      }
      
    }

    render() {
      return (
        <button class="btn btn-primary btn-lg main-button" disabled="true" id="download-button">
          скачать таблицу 
        </button>

      );
    }
  }

  class SloganButton extends React.Component {
    render() {
      return (
        <label class="slogan-button">
        </label>

      );
    }
  }
  
  export default SideWindow;