// book.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: any[] = [];
  private apiUrl = 'https://odd-red-armadillo-ring.cyclic.app/api/books';

  constructor(private http: HttpClient) {}

  searchBooks(query: string): any[] {
    if (!query) {
      return this.books; // Return all books if the query is empty
    }

    query = query.toLowerCase();
    return this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
    );
  }
  getBooks(): Observable<Book[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Book[]>(url);
  }

  getBookById(id: string): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Book>(url);
  }
  getSuggestions(query: string): Observable<string[]> {
    const url = `${this.apiUrl}/books/search?title=${query}`; // Adjust the API endpoint based on your server
    return this.http.get<any[]>(url).pipe(
      map((books) => books.map((book) => book.title)), // Extract titles from the response
      catchError((error) => {
        console.error('Error fetching search suggestions:', error);
        // Return an empty array or handle the error as needed
        return of([]);
      })
    );
  }
  getBooksByGenre(genre: string): Observable<any[]> {
    // Adjust the API endpoint based on your backend setup
    return this.http.get<any[]>(`/api/books?genre=${genre}`);
  }

  getActionBooks(): Observable<any[]> {
    // Adjust the API endpoint based on your backend setup
    return this.http.get<any[]>('/api/action-books');
  }

  getAdventureBooks(): Observable<any[]> {
    // Adjust the API endpoint based on your backend setup
    return this.http.get<any[]>('/api/adventure-books');
  }
}
