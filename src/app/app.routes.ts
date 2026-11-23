import { Routes } from '@angular/router';
import { PostInput } from './post-input/post-input';
import { PostList } from './post-list/post-list';

export const routes: Routes = [ { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'new-post', component: PostInput },
  { path: 'posts', component: PostList },
{path:'edit/:postId', component:PostInput }];
