import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PanelService} from "../panel.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedIn: boolean = false;
  constructor(private router: Router,
              private panelService: PanelService) {
    this.panelService.loggedIn
      .subscribe(
        (change) => this.loggedIn = change
      )
  }

}
