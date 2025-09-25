import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { Dashboard } from './dashboard/dashboard';
import { Fertilizers } from './fertilizers/fertilizers';
import { Contact } from './contact/contact';
import { Pesticides } from './pesticides/pesticides';
import { Blogs } from './blogs/blogs';
import { BlogsDetails } from './blogs-details/blogs-details';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'dashboard', component: Dashboard },
  {path: 'Fertilizers', component: Fertilizers},
  {path: 'contact',component:Contact},
  {path: 'Pesticides', component: Pesticides},
  {path: 'blog', component: Blogs},
   { path: 'blog-detail', component: BlogsDetails },
//   { path: '', redirectTo: 'blogs', pathMatch: 'full' },
];
