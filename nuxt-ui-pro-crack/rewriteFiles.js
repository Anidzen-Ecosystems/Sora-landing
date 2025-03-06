import fs from 'fs-extra';
import { resolve, join } from 'path';

const __dirname = dirname(new URL(import.meta.url).pathname);

const uiProDir = resolve('node_modules', '@nuxt', 'ui-pro');

const licenseSourceFilePath = resolve(__dirname, 'modules', 'pro', 'license.ts');

async function rewriteFiles() {
    try {
        if (fs.existsSync(uiProDir)) {
            console.log(`Found ui-pro in node_modules. Rewriting files...`);

            const filePath = join(uiProDir, 'modules', 'pro', 'license.ts');

            await fs.outputFile(filePath, licenseSourceFilePath);
            console.log('Файл успешно перезаписан!');
        } else {
            console.log('ui-pro не найден в node_modules' + uiProDir);
        }
    } catch (err) {
        console.error('Ошибка при перезаписи файлов:', err);
    }
}

rewriteFiles().then(r => {});
