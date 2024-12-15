import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.css']
})
export class DocumentEditorComponent {
  editorTitle = $localize`:@@editor_title:Document Editor`;
}