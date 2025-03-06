import fs from 'fs-extra';
import { resolve, join } from 'path';

const UI_PRO_DIR = resolve('node_modules', '@nuxt', 'ui-pro');
const LICENSE_SOURCE_PATH = resolve('nuxt-ui-pro-crack', 'modules', 'pro', 'license.ts');
const LICENSE_DEST_PATH = join(UI_PRO_DIR, 'modules', 'pro', 'license.ts');

async function rewriteLicenseFile() {
    try {
        if (!(await fs.pathExists(UI_PRO_DIR))) {
            console.log(`ui-pro не найден в node_modules: ${UI_PRO_DIR}`);
            return;
        }

        console.log(`Найден ui-pro. Перезаписываю файл лицензии...`);
        console.log(`Исходный файл: ${LICENSE_SOURCE_PATH}`);
        console.log(`Целевой файл: ${LICENSE_DEST_PATH}`);

        const licenseContent = await fs.readFile(LICENSE_SOURCE_PATH, 'utf-8');
        await fs.outputFile(LICENSE_DEST_PATH, licenseContent);

        console.log('✅ Файл лицензии успешно перезаписан!');
    } catch (error) {
        console.error('❌ Ошибка при перезаписи файла лицензии:', error);
    }
}

rewriteLicenseFile().then(r => {});
