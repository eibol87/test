import config from '../config/config.json';

export default class CodeMaker {
    constructor() {
        this.secret = new Array(config.lengthSecret);
        this.colors = config.colors;
    }
    getColors() {
        return this.colors;
    }
    createSecret() {
        let colors = [...this.colors];
        for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * (colors.length));
            let random = colors.splice(randomNumber, 1)[0]; // quitamos el valor encontrado del array para que no se repita
            this.secret[i] = random;
        }
        return this.code;
    }
    evaluateCode(code) {
        console.log(code);
        return "RRGB";
    }
}