import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-event',
  imports: [CardComponent, NavBarComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent {}
