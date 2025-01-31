import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the event model
export interface Event {
  _id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  relatedFigures: string[];
  image: string[];
  multimedia: string[];
  likes: number;
  isLiked: boolean;
  comments: { text: string; date: string }[]; // Changed comments to store an array of objects with text and date
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:5000/api/events'; // Update to match your backend API URL

  constructor(private http: HttpClient) {}

  // Get all events
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  // Get unique event dates
  getEventDates(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/dates`);
  }

  // Get events by date
  getEventsByDate(date: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}?date=${date}`);
  }

  // Get a single event by ID
  // getEventById(id: string): Observable<Event> {
  //   return this.http.get<Event>(`${this.apiUrl}/${id}`);
  // }

  getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(`http://localhost:5000/api/events/${id}`);
  }

  // Add a new event
  addEvent(eventData: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, eventData);
  }

  // Update an existing event
  // updateEvent(id: string, eventData: Event): Observable<Event> {
  //   return this.http.put<Event>(`${this.apiUrl}/${id}`, eventData);
  // }
  updateEvent(id: string, event: Event): Observable<Event> {
    return this.http.put<Event>(
      `http://localhost:5000/api/events/${id}`,
      event
    );
  }

  // Delete an event
  deleteEvent(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Like an event
  // Like an event
  addLike(eventId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${eventId}/like`, {}); // Make sure this route is set up in your backend
  }

  // Remove like from an event
  removeLike(eventId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${eventId}/like`); // Make sure this route is set up in your backend
  }

  // Add a comment to an event
  addComment(eventId: string, comment: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${eventId}/comment`, {
      text: comment,
    });
  }
  // getEventById(id: string): Observable<Event> {
  //   return this.http.get<Event>(`${this.apiUrl}/events/${id}`);
  // }

  // updateEvent(id: string, event: Event): Observable<Event> {
  //   return this.http.put<Event>(`${this.apiUrl}/events/${id}`, event);
  // }
}
