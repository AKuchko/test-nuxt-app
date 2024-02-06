const { loadNuxt, build } = require('nuxt');
const { JSDOM } = require('jsdom');
const fs = require('fs');


async function generateStaticHTML() {
  const nuxt = await loadNuxt({
    for: 'start',
    target: 'static',
    rootDir: __dirname
  });

  await build(nuxt);

  const { html } = await nuxt.renderRoute('/icons'); // Замените '/hello-world' на путь к вашему компоненту Vue
  const dom = new JSDOM(html);

  fs.writeFileSync('component.html', dom.serialize());
}

generateStaticHTML();
