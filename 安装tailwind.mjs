import {mk_file} from './tool.mjs';
await $`npm install -D tailwindcss@latest autoprefixer@latest`
await $`npm install`
await $`npx tailwindcss init -p`

var file_str =
`module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
        
            'md': '768px',
            // => @media (min-width: 768px) { ... }
        
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
        
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {},
    },
    variants: {
    extend: {},
    },
    plugins: [],
}
`;
await mk_file('./tailwind.config.js', file_str);


var file_str =
`
@tailwind base;
@tailwind components;
@tailwind utilities;
`;
await mk_file('./src/style/index.css', file_str);