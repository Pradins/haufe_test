const express   = require('express');
const fs        = require('fs');
const _         = require('underscore');
const path      = require('path');

const router    = express.Router();
const static_dataset_route = path.join(__dirname, '..', 'data', 'countries.json')

router.get('/', (req, res) => {
  res.send('api alive');
});

router.get('/all', function (req, res) {

    fs.readFile(static_dataset_route, 'utf8', function (err, data) {
        if (err) throw err;
        var obj = JSON.parse(data);
        obj = _.map(obj, function(o) { return _.pick(o, 'name','alpha3Code', 'capital', 'population', 'nativeName', 'flag'); });
        res.json(obj);
    });
});

router.get('/country/:code', function (req, res) { //search by its alpha3Code

    var code = req.params.code;

    fs.readFile(static_dataset_route, 'utf8', function (err, data) {
        if (err) throw err;
        var obj = JSON.parse(data);
        obj = _.where(obj, {alpha3Code: code});

        if(obj.length == 0) { //country not found
            res.status(404).send('Not found');
        } else {
            res.json(obj[0]);
        }
    });
});


module.exports = router;
