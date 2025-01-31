import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  imports: [CommonModule, NavBarComponent],
})
export class DateComponent implements OnInit {
  dates: string[] = []; // Dates fetched from the backend
  selectedEvent: Event | null = null; // Selected event details
  events: Event[] = []; // Events for a specific date

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadDates();
  }

  // Load unique dates from the backend
  loadDates(): void {
    this.eventService.getEventDates().subscribe({
      next: (data: string[]) => {
        this.dates = data;
      },
      error: (error) => {
        console.error('Error fetching dates:', error);
      },
    });
  }

  // Fetch events for a specific date
  fetchEventDetails(date: string): void {
    this.eventService.getEventsByDate(date).subscribe({
      next: (data: Event[]) => {
        this.events = data;
        this.selectedEvent = data.length ? data[0] : null; // Select the first event by default
      },
      error: (error) => {
        console.error('Error fetching event details:', error);
      },
    });
  }
}
