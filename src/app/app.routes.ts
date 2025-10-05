import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { Dashboard } from './dashboard/dashboard';
import { Fertilizers } from './fertilizers/fertilizers';
import { Contact } from './contact/contact';
import { Pesticides } from './pesticides/pesticides';
import { Blogs } from './blogs/blogs';
import { BlogsDetails } from './blogs-details/blogs-details';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { Cart } from './cart/cart';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'dashboard', component: Dashboard },
  {path: 'about', component: About},
  {path: 'Fertilizers', component: Fertilizers},
  {path: 'contact',component:Contact},
  {path: 'Pesticides', component: Pesticides},
  {path: 'blog', component: Blogs},
   { path: 'blog-detail/:id', component: BlogsDetails },
   {path: 'Profile', component: Profile},
  //  {path: 'Cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }
  {path: 'cart', component: Cart}
//   { path: '', redirectTo: 'blogs', pathMatch: 'full' },
];
