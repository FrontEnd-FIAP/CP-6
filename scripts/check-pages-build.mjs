import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';

const base = '/CP-6/';
const html = await readFile('dist/index.html', 'utf8');
assert(!html.includes('/src/main.jsx'), 'O Pages precisa receber a versão compilada, não JSX.');
const assets = [...html.matchAll(/(?:src|href)="(\/CP-6\/assets\/[^\"]+)"/g)].map(
  (match) => match[1],
);
assert(assets.length >= 2, 'JavaScript e CSS devem usar a base /CP-6/.');
for (const asset of assets) await access(resolve('dist', asset.slice(base.length)));
for (const image of ['porsche', 'bmw', 'mercedes', 'audi', 'range-rover', 'mini'])
  await access(resolve('dist/images', `${image}.webp`));
console.log('GitHub Pages: HTML compilado, base /CP-6/, JavaScript, CSS e 6 imagens verificados.');
