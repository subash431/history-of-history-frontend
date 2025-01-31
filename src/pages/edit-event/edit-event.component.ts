import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService, Event } from '../../services/event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
  imports: [FormsModule, CommonModule, NavBarComponent],
})
export class EditEventComponent implements OnInit {
  selectedEvent: Event | null = null;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id'); // Get event ID from route
    if (eventId) {
      this.getEventById(eventId);
    }
  }

  getEventById(id: string): void {
    this.eventService.getEventById(id).subscribe(
      (event) => {
        this.selectedEvent = event;
      },
      (error) => {
        console.error('Error fetching event:', error);
      }
    );
  }

  saveEvent(): void {
    if (this.selectedEvent && this.selectedEvent._id) {
      this.eventService
        .updateEvent(this.selectedEvent._id, this.selectedEvent)
        .subscribe(
          (updatedEvent) => {
            this.router.navigate(['/all-event']); // Navigate back to the all events page
          },
          (error) => {
            console.error('Error updating event:', error);
          }
        );
    }
  }

  cancelEdit(): void {
    this.router.navigate(['/']); // Navigate back to the all events page
  }
}
