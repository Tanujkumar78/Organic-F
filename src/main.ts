// // main.ts
// import 'zone.js';  // 👈 must be first

// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient, withFetch } from '@angular/common/http';
// import { App } from './app/app';

// bootstrapApplication(App, {
//   providers: [
//      provideHttpClient(withFetch())   // 👈 Fix NG02801 warning
//   ]
// });
// src/main.ts
import 'zone.js'; // must be first

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
});