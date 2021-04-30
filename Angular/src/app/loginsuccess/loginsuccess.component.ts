import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router, RouterEvent } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})

// export class LoginsuccessComponent implements OnInit {

//   result: String = '';
//   constructor(private _service : RegistrationService, private _router : Router) { }

//   ngOnInit(): void {
//   }

//   gotoregistration(){
//     this._router.navigate(['/registration'])
//   }

//   save(event:any): void{
//     var selectFile = event.target.files;
//     for(var i=0; i< selectFile.length; i++){
//     this.result += '--------<br>'
//     this.result += 'File Name: ' +selectFile[i].name;
//     // this.result += '<br>File Name: ' +selectFile[i].User;
//     this.result += '<br> File Size(byte): ' +selectFile[i].size;
//     this.result += '<br> File Type: ' +selectFile[i].type;
//     this.result += '<br>--------'
//     }
//   }

// }





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
      this.httpClient.post('http://localhost:7001/image/upload', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
        );
    }

      //Gets called when the user clicks on retieve image button to get the image from back end

      getImage() {

      //Make a call to Sprinf Boot to get the Image Bytes.
      this.httpClient.get('http://localhost:7001/image/get/' + this.imageName)
        .subscribe(
          res => {
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        );

    }
  }

