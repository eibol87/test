import config from '../../../config/config.json';

export default function getColors(req, res) {
    res.json(config.colors);
}