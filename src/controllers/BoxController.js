const Box = require('../models/Box');

class BoxController{
    async store(req, res){
        
        const box = await Box.create({ title: req.body.title});
        
        return res.json(box);
    }

    async show(req, res){

        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1} }
        });

        return res.json(box);
    }

    async showPastas(req, res) {

        const pastas = await Box.find({},'title');

        return res.json(pastas);
    }

}

module.exports = new BoxController();