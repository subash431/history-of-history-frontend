import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService, Event } from '../../services/event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  imports: [FormsModule, CommonModule, NavBarComponent],
})
export class EventDetailsComponent implements OnInit {
  event: Event | null = null; // Initialize with null until data is fetched
  comments: string[] = []; // List of comments
  newComment: string = ''; // New comment to be added
  likeCount: number = 0;
  isLiked: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');

    if (eventId) {
      this.eventService.getEventById(eventId).subscribe(
        (data) => {
          this.event = data;
          this.likeCount = data.likes;
          // Map the comments to extract the text and date properties
          this.comments = data.comments.map((comment) => comment.text);
        },
        (error) => {
          console.error('Error fetching event data:', error);
        }
      );
    }
  }
  addComment(): void {
    if (this.newComment && this.event) {
      // Call the service method to add the comment to the database
      this.eventService.addComment(this.event._id, this.newComment).subscribe(
        (response) => {
          // After the comment is added, update the local comments list
          this.comments.push(this.newComment);
          this.newComment = ''; // Reset the comment input field
        },
        (error) => {
          console.error('Error adding comment:', error);
        }
      );
    }
  }

  // Handle the like button click
  toggleLike(): void {
    if (this.event) {
      if (this.isLiked) {
        this.isLiked = false;
        this.likeCount--;
        // Call the service to update the like count in the backend
        this.eventService.removeLike(this.event._id).subscribe(
          (response) => {
            console.log('Like removed');
          },
          (error) => {
            console.error('Error removing like:', error);
          }
        );
      } else {
        this.isLiked = true;
        this.likeCount++;
        // Call the service to add a like to the backend
        this.eventService.addLike(this.event._id).subscribe(
          (response) => {
            console.log('Like added');
          },
          (error) => {
            console.error('Error adding like:', error);
          }
        );
      }
    }
  }
}
