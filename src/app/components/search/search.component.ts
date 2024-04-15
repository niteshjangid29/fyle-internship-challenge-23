import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  username: string = '';

  @Output() searchUser = new EventEmitter<string>();

  onSearch() {
    if (this.username.trim() !== '') {
      this.searchUser.emit(this.username);
    }
    console.log(this.username);
  }
}
