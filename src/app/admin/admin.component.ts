import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  
  AdminService = inject(AdminService);
  private toastr = inject(ToastrService);
  users: any[] = []; 

  ngOnInit(): void {
     this.getUsers();
  }

  getUsers() {
    console.log("get users 18");
    this.AdminService.GetAllUsersForAdmin().subscribe({
      next: users => {
        console.log(users);
        this.users = users
      },
      error: (error) => {
        const errorTitle = error?.error?.title;
        this.toastr.error(errorTitle || 'An error occurred while fetching users');
      }
    });
  }
}
