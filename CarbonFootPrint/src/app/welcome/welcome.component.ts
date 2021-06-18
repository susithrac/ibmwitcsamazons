import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AppID from 'ibmcloud-appid-js';
import { User } from '../models/user.model';
import { CommonService } from '../Services/common.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  style = 'show';
  buttonDisplay = 'show';
  errorStyle = 'hide';
  errorMessage = '';
  appid = new AppID();
  @Output() changeState = new EventEmitter();
  userData:User=new User();
  constructor(private commonService:CommonService,private router: Router)
  {

  }
  async ngOnInit() {
    try {
      await this.appid.init({
        clientId: '38a66370-ceb3-4878-89ab-57cf3a3a7984',
        "discoveryEndpoint": "https://eu-gb.appid.cloud.ibm.com/oauth/v4/cbd1c84c-fa8e-494e-92fc-898d621f6be8/.well-known/openid-configuration"
      });
    } catch (e) {
      this.errorMessage = e.message;
      this.errorStyle = 'show';
    }
  }
  async onLoginClick() {
    try {
      this.buttonDisplay = 'hide';
      const tokens = await this.appid.signin();
      const decodeIDTokens = tokens.idTokenPayload;
      //console.log(decodeIDTokens.email);
      //const userName = 'Hi ' + decodeIDTokens.name + ', Congratulations!';
      this.style = 'hide';
      this.changeState.emit({userName: decodeIDTokens.name , email: decodeIDTokens.email, picture: decodeIDTokens.picture });
      this.userData.Name=decodeIDTokens.name;
      this.userData.email=decodeIDTokens.email;
      this.userData.pic=decodeIDTokens.picture;
      this.commonService.SetUser(this.userData); 
      this.router.navigate(['/home']);
    } catch (e) {
      this.errorMessage = e.message;
      this.errorStyle = 'show';
      this.buttonDisplay = 'show';
    }
  }
}
