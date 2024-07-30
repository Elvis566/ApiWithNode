import {ComentarioModal} from '../models/comentario.js';

export const createComentario = async (req, res)=> {
    try{
        const {comentario,title, user_id}= req.body;
        if(!comentario){
            res.status(400).json({ message: "all input is required" });
        }

        const comen = await ComentarioModal.create({
            comentario,
            title,
            user_id
        });

        res.status(201).json({comen : comen})
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}