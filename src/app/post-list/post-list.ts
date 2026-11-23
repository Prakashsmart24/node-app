import { Component, inject, OnInit, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from './post-model';
import { PostlistService } from './postlist-service';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatExpansionModule,CommonModule,MatButtonModule,RouterLink],
  selector: 'app-post-list',
  styleUrl: './post-list.scss',
  templateUrl: './post-list.html',
})
export class PostList implements OnInit {

  private http = inject(HttpClient)

  ngOnInit() {
   this.postListService.fetchget();
  }
  readonly panelOpenState = signal(false);

  private postListService= inject(PostlistService);

   postListData = this.postListService.getPost();

   onDeletePost(postlist: any){
     this.postListService.deletePost(postlist.id);
     setTimeout(() => this.postListService.fetchget(), 0);
   }
}
