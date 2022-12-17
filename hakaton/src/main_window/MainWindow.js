import React, { Component } from 'react';
import "./MainWindow.css";
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload, Button  } from 'antd';
import server from "../api/server"


<input type="file" onChange={ (event) => this.handleChange(event.target.files) } />



class MainWindow extends React.Component {

  UploadFileToApi(config, formData){
    try{
      const response = server.post("", formData, config)  
      alert("Uploaded successfully!")
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
  
/* <input className="MainButton" type="file" onChange={ (event) => this.OnSelectImageHandler(event.target.files) } />   */
  render() {
    return(

        <div class="container-fluid">
          <div class="row row-cols-4 align-items-center ">
            <div class="col"></div>
              <div class="col ">
                <div className='super-puper-main-col'>
                <label class="btn btn-primary btn-lg">
                  Загрузить аудио <input type="file" onChange={ (event) => this.OnSelectImageHandler(event.target.files) } hidden/>
                </label>
                </div>
              </div>
                <div class="col super-puper-main-col"><LoadButton/></div>
                  <div class="col"></div>
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
        alert("Loaded successfully!")
      }
      catch{
        alert("Loaded unsuccessfully!")
      }
    }

    render() {
      return (
        <label class="btn btn-primary btn-lg" >
                    Скачать таблицу 
                  </label>

      );
    }
  }

  export default MainWindow;