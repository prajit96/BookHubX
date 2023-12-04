import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  books = [
    { title: 'Book 1', imageUrl: 'https://covers.openlibrary.org/b/id/12009823-M.jpg', read: false },
    { title: 'Book 2', imageUrl: 'https://covers.openlibrary.org/b/id/8354226-M.jpg', read: true },
    { title: 'Book 3', imageUrl: 'https://covers.openlibrary.org/b/id/9269962-M.jpg', read: false },
    { title: 'Book 4', imageUrl: 'https://covers.openlibrary.org/b/id/12648167-M.jpg', read: true },
    { title: 'Book 5', imageUrl: 'https://covers.openlibrary.org/b/id/10872657-M.jpg', read: false },
    { title: 'Book 6', imageUrl: 'https://covers.openlibrary.org/b/id/9171544-M.jpg', read: true },
    { title: 'Book 7', imageUrl: 'https://covers.openlibrary.org/b/id/10521270-M.jpg', read: false },
    { title: 'Book 8', imageUrl: 'https://covers.openlibrary.org/b/id/10389354-M.jpg', read: true },
    { title: 'Book 9', imageUrl: 'https://covers.openlibrary.org/b/id/12706346-M.jpg', read: false },
    { title: 'Book 10', imageUrl: 'https://covers.openlibrary.org/b/id/48240-M.jpg', read: true },
    { title: 'Book 11', imageUrl: 'https://covers.openlibrary.org/b/id/13108904-M.jpg', read: false },
    { title: 'Book 12', imageUrl: 'https://covers.openlibrary.org/b/id/12940491-M.jpg', read: true },
    { title: 'Book 13', imageUrl: 'https://covers.openlibrary.org/b/id/10107803-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27', read: false },
    { title: 'Book 14', imageUrl: 'https://covers.openlibrary.org/b/id/14339089-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27', read: true },
    // Add more books as needed
  ];

  visibleBooks = this.books.slice(0, 6); // Display the first 6 books initially
  currentIndex = 0;

  toggleReadStatus(index: number): void {
    this.books[index].read = !this.books[index].read;
  }

  next(): void {
    if (this.currentIndex + 6 < this.books.length) {
      this.currentIndex += 6;
      this.visibleBooks = this.books.slice(this.currentIndex, this.currentIndex + 6);
    }
  }

  prev(): void {
    if (this.currentIndex - 6 >= 0) {
      this.currentIndex -= 6;
      this.visibleBooks = this.books.slice(this.currentIndex, this.currentIndex + 6);
    }
  }
}
