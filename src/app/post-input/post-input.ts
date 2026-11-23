import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Post } from '../post-list/post-model';
import { PostlistService } from '../post-list/postlist-service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  selector: 'app-post-input',
  styleUrl: './post-input.scss',
  templateUrl: './post-input.html',
})
export class PostInput implements OnInit {
  isSaving = false;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  title: string = '';
  content: string = '';
  private mode = 'create';
  postId: string = '';
  postlistservice = inject(PostlistService);
  readonly panelOpenState = signal(false);
  public post: Post | undefined;

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('postId') ?? '';
    if (this.postId) {
      this.mode = 'edit';
      this.post = this.postlistservice.getSinglePost(this.postId);
    } else {
      this.mode = 'create';
      this.postId = '';
    }
  }

  onSavePost(postForm: NgForm): void {
    if (postForm.invalid) return;

    const { title, content } = postForm.value;

    const saveRequest =
      this.mode === 'edit'
        ? this.postlistservice.editPost(this.postId, title, content)
        : this.postlistservice.fetchPost(title, content);

    this.isSaving = true;

   saveRequest.subscribe({
  next: () => {
    setTimeout(() => {
      this.isSaving = false;
      this.router.navigate(['/posts']);
    }, 1000);
  },
  error: (error) => {
    this.isSaving = false;
    console.error('Could not save post', error);
  },
});
  }

  onUpdatePost(id: string, title: string, content: string) {
    if (this.mode === 'edit') {
    }
  }
}
