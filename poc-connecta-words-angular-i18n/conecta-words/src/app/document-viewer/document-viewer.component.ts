import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.css']
})
export class DocumentViewerComponent {
  viewerTitle = $localize `:@@viewer_title:Document Viewer`;
}