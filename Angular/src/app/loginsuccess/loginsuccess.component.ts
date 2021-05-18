import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router, RouterEvent } from '@angular/router';
import { RegistrationService } from '../registration.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})



export class LoginsuccessComponent{
    constructor(private httpClient: HttpClient) { }
    selectedFile: File;
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: string;
    imageName: any;
    //Gets called when the user selects an image
    public onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    }
    //Gets called when the user clicks on submit to upload the image

    onUpload() {
      console.log(this.selectedFile);
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      //Make a call to the Spring Boot Application to save the image
      this.httpClient.post('http://localhost:7002/upload', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
        );
    }



    toLru(){
      document.getElementById("lru").scrollIntoView({behavior:"smooth"});    
    }
   
  }

