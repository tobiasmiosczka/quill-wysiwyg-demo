import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QuillEditorComponent, QuillViewHTMLComponent } from 'ngx-quill'

@Component({
  imports: [QuillEditorComponent, QuillViewHTMLComponent, FormsModule],
  selector: 'app-editor',
  standalone: true,
  templateUrl: './editor.component.html'
})
export class EditorComponent {

  content = '<p>test</p>'

}
