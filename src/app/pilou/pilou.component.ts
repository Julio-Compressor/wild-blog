import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-pilou',
  standalone: true,
  imports: [FloatLabelModule, FormsModule, ButtonModule, ChipsModule, AccordionModule],
  templateUrl: './pilou.component.html',
  styleUrl: './pilou.component.scss'
})
export class PilouComponent {

  value = 0;
  values: string[] = [];
}
