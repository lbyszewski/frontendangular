import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceService} from '../user-service.service';
import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = new User();


  constructor(private route: ActivatedRoute, private router: Router,
              private service: UserServiceService) {
  }

  ngOnInit() {
    const shopClientId = parseInt(this.route.snapshot.paramMap.get('shopClientId'));
    this.service.findById(shopClientId).subscribe(data => {
        this.user = data;
      }, error => console.log(error));
  }

  usersList(){
    this.router.navigate(['users']);
  }
}
