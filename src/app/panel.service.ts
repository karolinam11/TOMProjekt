import {Injectable, OnInit} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn: "root"})
export class PanelService implements OnInit{
  nextPicture = 0;
  loggedIn: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.loggedIn.next(false);
  }


}
