import { Component, Input, OnInit } from '@angular/core';
import { EventService, Event } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule, RouterModule],
})
export class CardComponent implements OnInit {
  @Input() event!: Event;
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
