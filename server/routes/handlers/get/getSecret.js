import CodeMaker from '../../../models/codeMaker';

export default function getSecret(req, res) {
    const codeMaker = new CodeMaker();
    res.json(codeMaker.createSecret());
}