import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imagetable, UploadDocService } from '../upload-doc.service';

@Component({
  selector: 'app-show-upload-doc',
  templateUrl: './show-upload-doc.component.html',
  styleUrls: ['./show-upload-doc.component.css']
})
export class ShowUploadDocComponent implements OnInit {
  image:Imagetable[]=[];
  constructor( private httpClientService:UploadDocService,
    router:Router) { }

  ngOnInit(): void {
    this.httpClientService.getImageData().subscribe(
      response =>{this.image = response;}
 
      
     );
  }

}
