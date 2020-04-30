import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public prenom:any;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.infos().subscribe(
      res=>{console.log(res);
      this.prenom=res;},
      error=>{
        console.log(error);
      }
    )

  }

}
