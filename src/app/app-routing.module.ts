import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SigledistComponent } from './pages/sigledist/sigledist.component';
import { SingupComponent } from './pages/singup/singup.component';

const routes: Routes = [
{
  path:'',component:HomePageComponent
},
{
  path:'home-page',component:HomePageComponent
},
{
  path:'contactus',component:ContactusComponent
},
{
  path:'district',component:DistrictComponent
},
{
  path:'signup',component:SingupComponent
},
{
  path:'sigle',component:SigledistComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
