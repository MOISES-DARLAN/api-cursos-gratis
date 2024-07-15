const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const database = require('../db/database');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/cadastrarcursos', async (req, res)=> {
    
    try{
        const data_curso = req.body
        console.log(data_curso)

        if (!data_curso || !data_curso.titulo || !data_curso.img || !data_curso.link) {
            res.status(400).send('Preencha todos os dados corretamente.');
            return;
        }
        else{
            console.log('cheguei')
        const { data, error } = await database
        .from('CURSOS')
        .insert([
        { titulo: data_curso.titulo, img: data_curso.img, link: data_curso.link },
        ])
        .select()

        if (error) {
            res.send(error)
            return
        }
        else{
            res.status(200).json({mensage: "Cadastrado com sucesso"})
            return
        }
    }


  
    
} catch (error) {
    
    return res.send(error)
}
})

router.get('/cursos', async (req, res) => {
try{
    const { data, error } = await database
    .from('CURSOS')
    .select('*')

    res.status(200).json(data)
} catch (error) {
    return res.status(400).send(error)
}
})


module.exports = router