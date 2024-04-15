import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() totalRepos: number = 0;
  @Input() perPage: number = 10;
  @Input() currentPage: number = 1;

  @Output() pageChanged = new EventEmitter<number>();
  @Output() perPageChanged = new EventEmitter<number>();

  onPageChange(page: number) {
    this.pageChanged.emit(page);
  }

  pagination = [10, 25, 50, 100];

  onPerPageChanged() {
    this.perPageChanged.emit(this.perPage);
    this.currentPage = 1;
    this.pageChanged.emit(this.currentPage);
    console.log('perPage: ', this.perPage);
  }
}
