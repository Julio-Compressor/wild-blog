import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../model/article.class';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  articles: Article[] = [
    new Article(
      1,
      'Angular 16: Les nouveautés',
      'Alice',
      'Les nouveautés d\'Angular 16 incluent...',
      'https://via.placeholder.com/350x150',
      true,
      '',
      120
    ),
    new Article(
      2,
      'Développer une API REST',
      'Bob',
      'Développer une API REST nécessite...',
      'https://via.placeholder.com/350x150',
      true,
      '',
      75
    ),
    new Article(
      3,
      'Pourquoi TypeScript est essentiel ?',
      'Charlie',
      'TypeScript apporte de la robustesse...',
      'https://via.placeholder.com/350x150',
      true,
      '',
      200
    )
  ];

  isUnpublished(): boolean {
    return this.articles.every(article => !article.isPublished)
  }
}
