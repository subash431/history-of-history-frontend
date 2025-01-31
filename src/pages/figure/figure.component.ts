import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-figure',
  imports: [NavBarComponent, CardComponent],
  templateUrl: './figure.component.html',
  styleUrl: './figure.component.scss',
})
export class FigureComponent {}
