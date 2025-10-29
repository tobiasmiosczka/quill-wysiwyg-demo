import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ButtonBlot} from "./app/blots/button-blot";
import Quill from "quill";

Quill.register({
    'formats/button': ButtonBlot
}, true);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
