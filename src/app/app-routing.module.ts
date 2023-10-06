import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
