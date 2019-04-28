import { expect, assert } from 'chai';
import CodeMaker from '../models/codeMaker';

describe('codeMarker', () => {
    describe('Generar nuevo secreto', () => {
        it('El secreto ha de ser una array de tamaño 4', async () => {
            const codeMaker = new CodeMaker();
            const secret = codeMaker.createSecret();
            assert.equal(4, secret.length);
        });
        it('El secreto tiene un listado de 8 colores', async () => {
            const codeMaker = new CodeMaker();
            const colors = codeMaker.getColors();
            assert.equal(8, colors.length);
        });
    });
});
