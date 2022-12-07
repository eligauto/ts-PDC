import { Request, Response } from "express";



export const getUsers = async (req: Request, res: Response) => {

    res.json({ message: 'getUsers' });

}

export const getUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({ message: 'getUser', id });

}

export const register = async (req: Request, res: Response) => {
    
    const { body } = req;
    
    res.json({ message: 'postUser', body });
    
}

export const putUser = async (req: Request, res: Response) => {
        
    const { id } = req.params;
    const { body } = req;
        
    res.json({ message: 'putUser', id, body });
        
}

export const deleteUser = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    
    res.json({ message: 'deleteUser', id });
    
}
