import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  imports: [MatToolbarModule, MatButtonModule],
  selector: 'app-post-header',
  styleUrl: './post-header.scss',
  templateUrl: './post-header.html',
})
export class PostHeader {}
