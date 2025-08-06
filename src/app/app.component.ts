import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contacts } from './models/contacts.model';
import { AsyncPipe , NgIf , NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, NgIf,          // ✅ required for @if, @else
    NgFor], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contacts';

  http = inject(HttpClient);

  contact$ = this.GetContacts();

  private GetContacts(): Observable<Contacts[]> {
     return this.http.get<Contacts[]>('https://localhost:7111/api/Contact')
      
    };
  }

