import { Component, OnInit } from '@angular/core';
import { AuthService } from '../book/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  getRole() {
    return this.authService.getRole();
  }
  getUser() {
    return this.authService.retrieveUserDetails();
  }
}
