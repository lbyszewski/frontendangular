import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService) {
    this.user = new User();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.userService.saveUser(this.user).subscribe(result => this.gotoUserList());
  }

  // tslint:disable-next-line:typedef
  gotoUserList() {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {
  }
}
