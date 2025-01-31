import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EventService, Event } from '../../services/event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.scss'],
  imports: [FormsModule, CommonModule, NavBarComponent, RouterLink],
})
export class AllEventComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  editEvent(event: Event): void {
    this.router.navigate([`/edit-event/${event._id}`]); // Navigate to the edit page with event ID
  }

  deleteEvent(id: string): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(id).subscribe(
        () => {
          this.getEvents();
        },
        (error) => {
          console.error('Error deleting event:', error);
        }
      );
    }
  }
}
