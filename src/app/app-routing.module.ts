import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeedListComponent } from './modules/feed/components/feed-list/feed-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full',
  },
  {
    path: 'feed',
    component: FeedListComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
