import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewPosterPage } from './preview-poster.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewPosterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewPosterPageRoutingModule {}
