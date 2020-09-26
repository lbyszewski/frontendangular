import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserComponent} from './user/user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {DeleteUserComponent} from './delete-user/delete-user.component';




const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'userId', component: UserComponent},
  { path: 'userId/:shopClientId', component: UserComponent},
  { path: 'editId', component: EditUserComponent},
  { path: 'editId/:shopClientId', component: EditUserComponent},
  { path: 'deleteId', component: DeleteUserComponent},
  { path: 'deleteId/:shopClientId', component: DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
