import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent {
  @Input() repositories: any = null;
  @Input() loadingRepos: boolean = false;
  @Input() errorMessage: string = '';
}
