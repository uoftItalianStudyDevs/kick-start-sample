import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';



const routes: Routes = [
  {path: '', component: WelcomeComponent},
  // {path: 'templateName', component: templateNam},
  // {path: 'newTemplateName', component: NewTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
