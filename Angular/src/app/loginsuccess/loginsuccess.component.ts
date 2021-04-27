import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  result: String = '';
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  gotoregistration(){
    this._router.navigate(['/registration'])
  }

  save(event:any): void{
    var selectFile = event.target.files;
    for(var i=0; i< selectFile.length; i++){
    this.result += '--------<br>'
    this.result += 'File Name: ' +selectFile[i].name;
    // this.result += '<br>File Name: ' +selectFile[i].User;
    this.result += '<br> File Size(byte): ' +selectFile[i].size;
    this.result += '<br> File Type: ' +selectFile[i].type;
    this.result += '<br>--------'
    }
  }

}
