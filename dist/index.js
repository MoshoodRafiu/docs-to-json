"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const enums_1 = require("./enums");
const utils_1 = require("./utils");
const init = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    const lang = utils_1.frameworks.find(({ name }) => name === prompt.framework);
    if (!lang)
        throw Error(`${prompt.framework} not supported`);
    const version = lang.versions.find(({ name }) => name === prompt.version);
    if (!version)
        throw Error(`Version ${prompt.version} of ${prompt.framework} not yet supported`);
    const browser = yield puppeteer_1.default.launch({ headless: false });
    const page = yield browser.newPage();
    yield page.goto(version.url);
    yield page.setViewport({ width: 1080, height: 1024 });
    // await browser.close();
});
const prompt = {
    framework: enums_1.SupportedFrameworks.Laravel,
    version: "10"
};
init(prompt);
