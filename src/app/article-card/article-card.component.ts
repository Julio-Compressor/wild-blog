import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../model/article.class';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  @Input() articleChild!: Article;
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>()

  uplike() {
    this.articleChild.likes += 1
    this.notifyParent.emit('Cimer frere !')
  }
}
