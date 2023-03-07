import { Component,Input } from '@angular/core';

interface Article {
  image: string;
  timestamp: Date;
  title: string;
  body: string;
}

@Component({
  selector: 'elewa-group-elewa-group-article-list',
  templateUrl: './elewa-group-article-list.component.html',
  styleUrls: ['./elewa-group-article-list.component.scss'],
})
export class ElewaGroupArticleListComponent {
  @Input() articles: Article[];

  calculateReadTime(words: number): number {
    // Assuming average reading speed of 200 words per minute
    return Math.ceil(words / 200);
  }
}
