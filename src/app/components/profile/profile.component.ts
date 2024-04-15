import { Component, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() userProfile: any;
  @Input() loadingUser: boolean = false;
  @Input() errorMessage: string | null = null;

  constructor(private clipboardService: ClipboardService) {}

  copyToClipboard() {
    this.clipboardService.copyFromContent(this.userProfile.html_url);
  }
}
