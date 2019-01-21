import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  count = 0;
  sum = 0;
  @Input() quote: Quote;
  @Output() isDelete = new EventEmitter<boolean>();
  quoteDelete(complete: boolean) {
    this.isDelete.emit(complete);
    console.log(this.quoteDelete);
  }
  like() {
   this.count = this.count + 1;
  }
  unlike() {
    this.sum = this.sum + 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
