import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NavBarComponent],
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventService) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      relatedFigures: [''],
      image: [''],
      multimedia: [''],
    });
  }

  ngOnInit(): void {}

  // Submit form data to the backend
  onSubmit(): void {
    if (this.eventForm.valid) {
      this.eventService.addEvent(this.eventForm.value).subscribe(
        (response) => {
          console.log('Event added successfully:', response);
          alert('event added successfully');
        },
        (error) => {
          console.error('Error adding event:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
