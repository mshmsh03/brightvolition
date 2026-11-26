import test from 'node:test';
import assert from 'node:assert/strict';

import { localizePath, postPath, sectionFromPath } from './paths.mjs';

const PAGES = ['index', 'about', 'services', 'products', 'projects', 'blog', 'contact'];

test('postPath builds the article URL with its trailing slash', () => {
  assert.equal(postPath('ar', 'solar-grid-connection'), '/ar/blog/solar-grid-connection/');
});

test('localizePath keeps the visitor on the same page in another language', () => {
  assert.equal(localizePath('/en/', 'ku'), '/ku/');
  assert.equal(localizePath('/en/about/', 'ar'), '/ar/about/');
  assert.equal(localizePath('/en/blog/', 'ar'), '/ar/blog/');
  assert.equal(localizePath('/en/blog/solar-grid-connection/', 'ku'), '/ku/blog/solar-grid-connection/');
});

test('localizePath adds the trailing slash a static export needs', () => {
  assert.equal(localizePath('/en', 'ar'), '/ar/');
  assert.equal(localizePath('/en/blog/solar-grid-connection', 'ar'), '/ar/blog/solar-grid-connection/');
});

test('localizePath falls back to the home page for a path with no language', () => {
  assert.equal(localizePath('/', 'ar'), '/ar/');
  assert.equal(localizePath('', 'ku'), '/ku/');
  assert.equal(localizePath('/somewhere/else/', 'en'), '/en/');
});

test('sectionFromPath names the menu item a path belongs to', () => {
  assert.equal(sectionFromPath('/en/', PAGES), 'index');
  assert.equal(sectionFromPath('/ar/services/', PAGES), 'services');
  assert.equal(sectionFromPath('/ku/blog/', PAGES), 'blog');
  assert.equal(sectionFromPath('/ku/blog/solar-grid-connection/', PAGES), 'blog');
  assert.equal(sectionFromPath('/en/contact', PAGES), 'contact');
});

test('sectionFromPath treats an unknown path as the home page', () => {
  assert.equal(sectionFromPath('/en/nope/', PAGES), 'index');
  assert.equal(sectionFromPath('/', PAGES), 'index');
});
