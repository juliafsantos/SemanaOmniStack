const generateUniqueID = require('../utils/generanteUniqueID');
const conn = require('../database/conn');

module.exports = {

    async index(request, response){

    const ongs = await conn('ong').select('*');
    
    return response.json(ongs);
    
    },

    async create(request, response){

    const { name, email, whatsapp, city, uf} = request.body;
    
    const id = generateUniqueID();

    await conn('ong').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({id});
    }
}