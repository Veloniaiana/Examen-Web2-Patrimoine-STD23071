import {readFile} from "../../patrimoine-economique/data/index.js";
import path from 'node:path';

const absolutePath = path.resolve('/data.json');

const result = await readFile(absolutePath);
console.log(result);
