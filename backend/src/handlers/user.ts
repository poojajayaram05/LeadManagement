import prisma from '../db'
import { comparePasswords, createJWT, hashPassword, verifyJWT } from '../modules/auth'

export const createNewUser = async (req, res,next ) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email:req.body.email,
                password: await hashPassword(req.body.password)
            }
        })
        const token = createJWT(user)
        delete user.password
        res.json({ token,user })
    
    } catch (e) {
        e.type = 'input'
        next(e)
    }

}

export const getUserData = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const token = authHeader.split(' ')[1];
        
        
        const decodedToken = verifyJWT(token);
    
        const userId = decodedToken.id;

        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        } 
        delete user.password;

        return res.status(200).json(user);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const signin = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
           email: req.body.email
       }
    })

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    } 

    const isValid = await comparePasswords(req.body.password, user.password)
        
    if (!isValid) {
        res.status(401)
        res.json({ message: 'nope' })
        return
    }


    const token = createJWT(user)
    delete user.password
    res.json({ token,user })
     
}