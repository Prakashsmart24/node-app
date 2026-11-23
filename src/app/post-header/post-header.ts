import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [MatToolbarModule, MatButtonModule,RouterLink,RouterLinkActive],
  selector: 'app-post-header',
  styleUrl: './post-header.scss',
  templateUrl: './post-header.html',
})
export class PostHeader {}
