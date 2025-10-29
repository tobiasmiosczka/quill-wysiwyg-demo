import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router';
import { provideQuillConfig } from 'ngx-quill'

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(BrowserAnimationsModule), provideQuillConfig({
    customModules: [],
    modules: {
        toolbar: [
            // Zeile 1: Überschriften, Listen, Code-Block
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['blockquote', 'code-block'],

            // Zeile 2: Fett, Kursiv, etc.
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],

            // Zeile 3: Ausrichtung
            [{ 'align': [] }],

            // Zeile 4: Links, Bilder, Videos und IHR BENUTZERDEFINIERTER BUTTON
            ['link', 'image', 'video', 'button'], // <-- HIER IST IHR BUTTON EINGEFÜGT

            // Zeile 5: Clear
            ['clean']
        ]
    },
    customOptions: [{
      import: 'formats/font',
      whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
    }]
  })]
};
