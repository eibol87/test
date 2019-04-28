import express from 'express';
import getSecret from './handlers/get/getSecret';
import getColors from './handlers/get/getColors';
import postEvaluateCode from './handlers/post/postEvaluateCode';

let router = express.Router();

router.get('/', (req, res, next) => { res.json("welcome mastermind game");});
router.get('/codemaker/create', getSecret);
router.get('/codemaker/colors', getColors);
router.post('/codemaker/evaluate', postEvaluateCode);

export default router;