import React, { Component } from 'react';
import './App.css';
import firebase from './Firebase'; 
import FileUploader from "react-firebase-file-uploader";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      files: null
    }
  } 

  handleUploadError = (val) => {
    this.setState({
      status: `File ${val} gagal di upload`
    })
  }

  handleUploadSuccess = (val) => {
    firebase.storage().ref("/")
    .child(val).getDownloadURL()
    .then(url => {
      this.setState({ 
        files: url,
        status: url,
      });
    });
  }
  
  render() {
    const { status, files } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {files && (
            <img src={files} alt="PRofile" />
          )}
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("/")}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
          />
          <br/>
          <small>{status}</small>
        </header>
      </div>
    );
  }
}