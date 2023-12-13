import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MyLearningPathComponent } from './components/my-learning-path/my-learning-path.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'project', component: ProjectsComponent},
  {path: 'learn', loadChildren: () => import('./module/learn/learn.module').then(m => m.LearnModule)},
  {path: 'todo', component: MyLearningPathComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
