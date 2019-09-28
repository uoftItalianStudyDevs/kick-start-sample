import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TemplateNameComponent } from './components/template-name/template-name.component';
import { NewTempalteNameComponent } from './components/template-name/new-tempalte-name/new-tempalte-name.component';



const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'templateName', component: TemplateNameComponent},
  {path: 'newTemplateName', component: NewTempalteNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
