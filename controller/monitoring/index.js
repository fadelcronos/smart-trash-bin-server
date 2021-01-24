const admin = require('../../services/fire');


exports.monitor = (req, res) => {
    const { fill_level, odor } = req.query;

    let database = admin.database();

    let payload = {
        Fill_level: fill_level <= 100 && fill_level > 0 ? Math.ceil(fill_level) : fill_level <= 0 ? 0 : 100,
        Odor: odor <= 100 && odor > 0 ? Math.ceil(odor) : odor <= 0 ? 0 : 100,
        Date: Date.now()
    };

    database.ref('/Trash1').set(payload, (error) => {
        if (error) console.log(error);
        console.log('[ update realtime database success ]');
    });

    database.ref('/TimeStamp').push(payload, (error) => {
        if (error) console.log(error);
        console.log('[ push realtime database success ]');
    });

    res.status(200).send({
        data: payload
    });

};