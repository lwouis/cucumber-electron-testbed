import {After, Before, Then} from 'cucumber';
import {getTestBed, TestBed} from '@angular/core/testing';
import {AppComponent} from '../../../src/app/app.component';

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
// var jasmine = 'jasmine';
// import 'zone.js/dist/zone-testing';

Before(() => {
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
  );
});

After(() => {
  TestBed.resetTestingModule();
});

Before(async () => {
  await TestBed.configureTestingModule({
    declarations: [
      AppComponent,
    ],
  }).compileComponents();
});

Then('component X is instanciated', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
});
