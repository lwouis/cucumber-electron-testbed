import {After, Before, Then} from 'cucumber';
import {getTestBed, TestBed, async} from '@angular/core/testing';
import {AppComponent} from '../../../src/app/app.component';
import { expect } from 'chai';

import 'core-js/es7/reflect';
import('core-js/es6/reflect');
require('core-js/es7/reflect');
require('zone.js/dist/zone.js');
require('zone.js/dist/proxy.js');
require('zone.js/dist/sync-test');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

const ambientZone = Zone.current;
const { ProxyZoneSpec } = Zone;
const testProxyZone = ambientZone.fork(new ProxyZoneSpec());

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

Before(async () =>
  await testProxyZone.run(() =>
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
    }).compileComponents()
  )
);

Then('component X is instanciated',() => {
  testProxyZone.run(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).to.exist;
  })
});
