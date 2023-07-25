import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureGuard } from '../guards/feature.guard';
import { AuthForm } from './sign-up/auth-form.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: AuthForm,
    data: {
      isSignUp: true,
      feature: 'enableLocalSignUp',
    },
    canActivate: [FeatureGuard],
  },
  {
    path: 'login',
    component: AuthForm,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}