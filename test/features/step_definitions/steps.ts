import {Given, Then, When} from 'cucumber';
import {TestBed} from '@angular/core/testing';
import {AppComponent} from '../../../src/app/app.component';

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

Then('component X is instanciated', () => {
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );

  TestBed.configureTestingModule({
    declarations: [
      AppComponent,
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
});
