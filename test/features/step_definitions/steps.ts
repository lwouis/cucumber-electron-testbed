import {Given, Then, When} from 'cucumber';
import {TestBed} from '@angular/core/testing';
import {AppComponent} from '../../../src/app/app.component';

Then('component X is instanciated', () => {
  TestBed.configureTestingModule({
    declarations: [
      AppComponent,
    ],
  }).compileComponents();
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
});
