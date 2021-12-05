import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../shared/helpers/authorization.guard';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { CategoriesComponent } from './categories.component';
import { DeleteCategoryComponent } from './pages/delete-category/delete-category.component';
import { UpdateCategoryComponent } from './pages/update-category/update-category.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';

const routes: Routes = [
  {
    path: 'admin/categories',
    redirectTo: 'admin/categories/list',
    pathMatch: 'full',
  },
  {
    path: 'admin/categories',
    component: CategoriesComponent,
    // canActivate: [AuthorizationGuard],
    children: [
      { path: 'list', component: CategoryListComponent },
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
