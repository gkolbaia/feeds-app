import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeedListComponent } from './modules/feed/components/feed-list/feed-list.component';
import { PostPageComponent } from './modules/feed/components/post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full',
  },
  {
    path: 'feed',
    component: FeedListComponent
  },
  {
    path: 'post',
    component: PostPageComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
