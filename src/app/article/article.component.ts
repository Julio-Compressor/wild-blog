import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})



export class ArticleComponent {

  article: Article = {
    title: 'Titre de l\'article',
    author: 'John Doe',
    content: 'Voici le contenu de l\'article.',
    image: 'https://via.placeholder.com/350x150',
    isPublished: true,
    comments: ''
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
type Article = {
  title: string
  author: string
  content: string
  image: string
  isPublished: boolean
  comments: string
}