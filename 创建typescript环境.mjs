await $`npm init -y`
//防止命名bug
import { mk_file } from './tool.mjs';
var file_str =
`
{
    "name": "test",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "ts-node index.ts",
      "serve":"ts-node-dev  --respawn index.ts"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "devDependencies": {
      "@types/node": "^16.7.1",
      "ts-node": "^10.2.1",
      "typescript": "^4.3.5"
    }
}
  
`;
await mk_file('./package.json', file_str);


var file_str =
`
{
  "compilerOptions": {
  	"esModuleInterop": true
  }
}
`;
await mk_file('./tsconfig.json', file_str);




await $`npm install typescript ts-node @types/node ts-node-dev -D`