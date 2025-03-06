import fs from 'fs-extra';
import { resolve, join, dirname } from 'path';

const uiProDir = resolve('node_modules', '@nuxt', 'ui-pro');

const licenseSourceFilePath = resolve('nuxt-ui-pro-crack', 'modules', 'pro', 'license.ts');

async function rewriteFiles() {
    try {
        if (fs.existsSync(uiProDir)) {
            console.log(licenseSourceFilePath);
            console.log(`Found ui-pro in node_modules. Rewriting files...`);

            const filePath = join(uiProDir, 'modules', 'pro', 'license.ts');
            console.log(filePath);
            const licenseContent = await fs.readFile(licenseSourceFilePath, 'utf-8');

            // Записываем содержимое в целевой файл
            await fs.outputFile(filePath, licenseContent);

            console.log('Файл успешно перезаписан!');
        } else {
            console.log('ui-pro не найден в node_modules: ' + uiProDir);
        }
    } catch (err) {
        console.error('Ошибка при перезаписи файлов:', err);
    }
}

rewriteFiles().then(r => {});
