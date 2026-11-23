import { inject, Service, signal } from '@angular/core';
import { Post } from './post-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Service()
export class PostlistService {
    http = inject(HttpClient)

    postList = signal<Post[]>([]);

    getPost(){
        return this.postList;
    }
    
    getSinglePost(id:string){
       const post = this.postList().find(post => post.id === id);
       return post ? {...post} : undefined;
    }


    fetchget(){
          this.http.get<{message:string,posts:{_id:string,title:string,content:string}[]}>('http://localhost:3000/api/post')
          .pipe(map((postdata)=>{ return postdata.posts.map( post=>{
            return {
                title: post.title,
                content: post.content,
                id: post._id
            }
          })}))
          .subscribe((posts)=>{
          return this.postList.set(posts);
    })
    }

    fetchPost(title: string, content: string) {
  return this.http.post(
    'http://localhost:3000/api/post',
    { title, content }
  );
}

    editPost(id: string, title: string, content: string) {
  return this.http.put(
    `http://localhost:3000/api/post/${id}`,
    { title, content }
  );
}

    deletePost(id:string){
        this.http.delete(`http://localhost:3000/api/post/${id}`).subscribe(()=>{
           this.fetchget()
        })
    }
}


