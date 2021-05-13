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
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }



    fileContent: string = '';

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      (self.fileContent) = <string>fileReader.result;
    }
    fileReader.readAsText(file);
  }
  





  onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
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
