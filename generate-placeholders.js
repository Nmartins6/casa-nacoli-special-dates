const fs = require('fs');
const path = require('path');

const generateSvg = (text) => `<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#E1B78F" opacity="0.3"/>
  <text x="50%" y="50%" font-family="sans-serif" font-size="32" font-weight="bold" fill="#703D25" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;

const products = [
  "caneca-branca", "caneca-personalizada-casal", "caneca-magica", "caneca-colorida",
  "caneca-coracao", "azulejo-15x15", "ima-mdf-5x5", "quadro-mdf-sublimado",
  "quebra-cabeca-personalizado", "vinho-rotulo-personalizado",
  "chaveiro-mdf-personalizado", "impressoes-personalizadas", "camiseta-personalizada"
];

const basketItems = [
  "vinho", "cerveja", "chocolate", "bombons", "cappuccino", "geleias",
  "balao-coracao", "cookies", "sucos", "vela", "nutella", "caneca-personalizada",
  "impressao-personalizada"
];

const run = () => {
  const assetsDir = '/home/nicolas/dev/casa-nacoli-special-dates/public/assets/valentines-2026';
  
  fs.mkdirSync(path.join(assetsDir, 'products'), { recursive: true });
  products.forEach(p => fs.writeFileSync(path.join(assetsDir, 'products', `${p}.svg`), generateSvg(p)));

  fs.mkdirSync(path.join(assetsDir, 'basket-items'), { recursive: true });
  basketItems.forEach(b => fs.writeFileSync(path.join(assetsDir, 'basket-items', `${b}.svg`), generateSvg(b)));

  fs.writeFileSync(path.join(assetsDir, 'hero.svg'), generateSvg('Hero Image'));
  fs.writeFileSync(path.join(assetsDir, 'cesta-vazia.svg'), generateSvg('Cesta Vazia (Base)'));
};

run();
