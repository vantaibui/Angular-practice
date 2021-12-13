import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { User } from 'src/models/User';
import { UserManagementService } from '../../services/user-management.service';

import { DeleteUserComponent } from '..';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy, AfterViewInit {
  public userList: User[] = [];

  private _subscription!: Subscription;

  displayedColumns: string[] = [
    'id',
    'username',
    'password',
    'firstName',
    'lastName',
    'email',
    'phone',
    'gender',
    'role',
    'status',
    'action',
  ];

  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _userService: UserManagementService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._subscription = this._userService.actionFetchAllUser().subscribe(
      (result: User[]) => {
        this.userList = result;
        // Pagination table
        this.dataSource = new MatTableDataSource<User>(result);
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  updateDataAfterActionCompleted(user: any, action: string): void {
    for (let i = 0; i < this.userList.length; i++) {
      if (action.indexOf('add') !== -1) {
        if (this.userList[i].id === user.id) {
          break;
        } else {
          this.userList.push(user);
          this.dataSource.paginator = this.paginator;
          break;
        }
      } else {
        if (this.userList[i].id === user) {
          this.userList[i] = user;
          this.dataSource.paginator = this.paginator;
          break;
        }
      }
    }
  }

  openDialogEdit(user: User): void {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data: { user },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.updateDataAfterActionCompleted(result, 'edit');
    });
  }

  openDialogDelete(user: User): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: { user },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.updateDataAfterActionCompleted(result, 'delete');
    });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
