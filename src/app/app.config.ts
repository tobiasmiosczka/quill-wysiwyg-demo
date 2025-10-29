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
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['blockquote', 'code-block'],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['link', 'image', 'video', 'button'],
            ['clean']
        ]
    },
    customOptions: [{
      import: 'formats/font',
      whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
    }]
  })]
};
