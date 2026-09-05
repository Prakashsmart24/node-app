import { Service, signal } from '@angular/core';
import { Post } from './post-model';

@Service()
export class PostlistService {

    postList = signal<Post[]>([]);

    getPost(){
        return this.postList;
    }

    addPostInput(title:string, content:string){
        const postInput:Post = {
            title: title,
            content: content
        }
        this.postList.update((postsData) =>{
            return [...postsData,postInput]
        }
        );
    }
}
