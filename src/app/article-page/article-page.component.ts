import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../model/article.class';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  @Input() articleChild!: Article;
}
