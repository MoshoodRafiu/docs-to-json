import puppeteer from 'puppeteer';
import { SupportedFrameworks } from './enums';
import { Framework, FrameworkVersion, initAppPrompt } from './interfaces';
import { frameworks } from './utils';

const init = async (prompt: initAppPrompt) => {
    const lang = frameworks.find(({ name }: Framework) => name === prompt.framework);

    if (!lang) throw Error(`${prompt.framework} not supported`);

    const version = lang.versions.find(({ name }: FrameworkVersion) => name === prompt.version);
    if (!version) throw Error(`Version ${prompt.version} of ${prompt.framework} not yet supported`);

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(version.url);

    await page.setViewport({width: 1080, height: 1024});

    await browser.close();
}

const prompt: initAppPrompt = {
    framework: SupportedFrameworks.Laravel,
    version: "10"
};

init(prompt);