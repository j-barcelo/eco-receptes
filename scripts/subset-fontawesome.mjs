import subsetFont from 'subset-font';
import fs from 'fs/promises';
import path from 'path';

const ICONS = {
    solid: [
        '\uf021', // arrows-rotate
        '\uf178', // arrow-right-long
        '\uf08e', // arrow-up-right-from-square
        '\uf4d7', // route
        '\uf017', // clock
        '\uf005', // star
        '\uf2e7', // utensils
        '\ue473', // chart-simple
        '\uf053', // chevron-left
        '\uf054', // chevron-right
        '\uf00d', // xmark
        '\uf00e', // magnifying-glass-plus
    ],
    brands: [
        '\uf167', // youtube
        '\ue61b', // x-twitter
        '\uf16d', // instagram
    ]
};

const FONTS = [
    {
        input: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2',
        output: 'src/fonts/fontawesome/fa-solid-900.woff2',
        chars: ICONS.solid
    },
    {
        input: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2',
        output: 'src/fonts/fontawesome/fa-brands-400.woff2',
        chars: ICONS.brands
    }
];

for (const font of FONTS) {
    const input = await fs.readFile(font.input);
    const subset = await subsetFont(input, font.chars.join(''), { targetFormat: 'woff2' });
    await fs.mkdir(path.dirname(font.output), { recursive: true });
    await fs.writeFile(font.output, subset);
    console.log(`✔ Subset: ${font.output}`);
}