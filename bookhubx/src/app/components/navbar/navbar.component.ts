// navbar.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchQuery: string = '';
  suggestedBooks: string[] = [];
  genres: string[] = ['Action', 'Adventure', /* Add more genres as needed */];
  searchTerm: string = '';

  onSearchChange(term: string) {
    this.searchTerm = term;
    // Handle the search logic here (e.g., filter data based on title and author)
  }
  constructor(private router: Router, private bookService: BookService) {}

  goToHome() {
    // Navigate to the home page
    this.router.navigate(['/']);
  }
  onSearchInputChange(): void {
    // You can perform actions as the user types, if needed
    // For example, show search suggestions
    this.bookService.getSuggestions(this.searchQuery).subscribe(
      (suggestions: string[]) => {
        this.suggestedBooks = suggestions;
      },
      (error) => {
        console.error('Error fetching search suggestions:', error);
      }
    );
  }

  search() {
    const searchResults = this.bookService.searchBooks(this.searchQuery);
    console.log('Search Results:', searchResults);

    // Implement further actions based on search results if needed
  }
}
