import { Component, signal } from '@angular/core';
import { PostHeader } from './post-header/post-header';
import { PostInput } from './post-input/post-input';
import { PostList } from './post-list/post-list';

@Component({
  imports: [PostHeader,PostInput,PostList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('node-mongodb');
}
