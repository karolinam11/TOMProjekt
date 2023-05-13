import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PanelService} from "../panel.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router,
              private panelService: PanelService){}

  onLogin(){
    this.panelService.loggedIn.next(true)
    this.router.navigate(["panel"])
  }

}
