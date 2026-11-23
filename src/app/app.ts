import { Component, signal } from '@angular/core';
import { PostHeader } from './post-header/post-header';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [PostHeader,RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('node-mongodb');
}
