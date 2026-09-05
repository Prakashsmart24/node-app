import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Post } from '../post-list/post-model';
import { PostlistService } from '../post-list/postlist-service';

@Component({
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule],
  selector: 'app-post-input',
  styleUrl: './post-input.scss',
  templateUrl: './post-input.html',
})
export class PostInput {
  readonly panelOpenState = signal(false);
  postlistservice = inject(PostlistService);


  onAddPost(postForm : NgForm){
    if(postForm.invalid){
      return
    }
    const postData:Post = {
        title : postForm.value.title,
        content: postForm.value.content
    }
    console.log(postData);
   this.postlistservice.addPostInput(postForm.value.title,postForm.value.content);
   postForm.reset();
  }
}
