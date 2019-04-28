import CodeMaker from '../../../models/codeMaker';

export default function postEvaluateCode(req, res) {
    const { code } = req.body;
    const codeMaker = new CodeMaker();
    res.json(codeMaker.evaluateCode(code));
}