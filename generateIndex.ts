import * as fs from 'fs';
import * as path from 'path';

const geojsonFilesDir = path.resolve(__dirname, './src/data'); // 存放 GeoJSON 文件的目录
const indexFilePath = path.resolve(__dirname, './src/index.ts'); // index.ts 文件路径

const geojsonFiles = fs.readdirSync(geojsonFilesDir).filter(file => file.endsWith('.json'));

let exportStatements = geojsonFiles.map(file => {
	const variableName = `geo_${path.basename(file, '.json')}`; // 添加前缀 `geo_`
	return `export const ${variableName} = require('./data/${file}');`;
}).join('\n');

fs.writeFileSync(indexFilePath, exportStatements);

console.log(`Generated index.ts with exports for ${geojsonFiles.length} GeoJSON files.`);
