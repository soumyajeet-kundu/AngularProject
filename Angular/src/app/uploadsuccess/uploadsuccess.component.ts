import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from "ngx-csv-parser";


@Component({
  selector: 'app-uploadsuccess',
  templateUrl: './uploadsuccess.component.html',
  styleUrls: ['./uploadsuccess.component.css']
})


export class UploadsuccessComponent {

  constructor(private httpClient: HttpClient, private ngxCsvParser: NgxCsvParser) { }
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
    

    file = '';



  csvRecords: any[] =[];
  header = true;
 
  // constructor(private ngxCsvParser: NgxCsvParser){
  // }

  @ViewChild('fileImportInput', {static: false}) fileImportInput: any;
  
  fileChangeListener($event: any): void{
    const files = $event.srcElement.files;

    this.ngxCsvParser.parse(files[0], {header:this.header, delimiter: ','}).pipe().subscribe((result:Array<any>)=>{
      console.log('result of file', result);
      this.csvRecords= result;
    },

    (error: NgxCSVParserError)=>{
      console.log('error', error);
    });
  }

}
