// book-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  bookId: string = '';
  book: any; // Adjust the type based on your Book model

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    this.route.params.subscribe((params) => {
      this.bookId = params['id'] || '';
    });
  }

  ngOnInit(): void {
    this.getBookDetails();
  }

  // book-details.component.ts

getBookDetails(): void {
  console.log('Book ID:', this.bookId); // Add this line
  this.bookService.getBookById(this.bookId).subscribe(
    (data) => {
      this.book = data;
    },
    (error) => {
      console.error('Error fetching book details:', error);
    }
  );
}

}
