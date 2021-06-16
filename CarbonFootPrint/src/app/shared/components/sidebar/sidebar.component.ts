import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user: User = new User();
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.GetUserData.subscribe(user => this.user = user);
  }

  callfun(obj) {
    var noimg = "assets/usericon.jpg";
    obj.src = noimg;
  }

}
