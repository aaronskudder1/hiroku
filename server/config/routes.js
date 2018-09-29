var asCtrl = require('../controllers/asCtrl');

module.exports = function (app) {

    app.get('/api/as', asCtrl.get);
    app.get('/api/as/:id', asCtrl.getById);
    app.post('/api/as', asCtrl.add);

//    app.get('/partials/*', function (req, res) {
//        res.render('../../public/app/' + req.params[0]);
//     //   res.render('../../public/app/');
//    });

    app.all('/api/*', function (req, res) {
        res.send(404);
    });
    app.get('*', function (req, res) {
        res.render('index');
    });
};
