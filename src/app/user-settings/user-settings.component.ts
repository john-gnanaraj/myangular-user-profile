import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  
  styleUrls: ['./user-settings.component.css']
})

export class UserSettingsComponent implements OnInit {  

  constructor (private _userService: UserService) {}
  items = [];
  
  ngOnInit() {
      this._userService.getUser().subscribe(data => this.items = data);
  }

}