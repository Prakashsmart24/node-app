import { Component, inject, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from './post-model';
import { PostlistService } from './postlist-service';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatExpansionModule,CommonModule,MatButtonModule],
  selector: 'app-post-list',
  styleUrl: './post-list.scss',
  templateUrl: './post-list.html',
})
export class PostList {
  readonly panelOpenState = signal(false);

  // postListData:Post[] = [];

  private postListService= inject(PostlistService);

  readonly postListData = this.postListService.getPost();
}
