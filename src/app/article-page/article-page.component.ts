import { Component, Input, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../model/article.class';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  article?: Article;

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
  articleId!: number;
  ngOnInit() {
    // Abonnement aux changements de paramètres dans l'URL
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Extraction de l'ID depuis les paramètres
      this.articleId = Number(params.get('id'));

      // Recherche de l'article correspondant
      this.article = this.articles.find(
        (article) => article.id === this.articleId
      );
    });
  }
}
