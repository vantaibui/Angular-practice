import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../shared/helpers/authorization.guard';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesComponent } from './categories.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

const routes: Routes = [
  {
    path: 'admin/categories',
    redirectTo: 'admin/categories',
    pathMatch: 'full',
  },
  {
    path: 'admin/categories',
    component: CategoriesComponent,
    canActivate: [AuthorizationGuard],
    children: [
      { path: 'addCategory', component: AddCategoryComponent },
      { path: 'deleteCategory', component: DeleteCategoryComponent },
      { path: 'editCategory/:id', component: UpdateCategoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
