import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 5)
}

export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id,
        username: user.username
    },
        process.env.JWT_SECRET
    )
    return token
}



export const verifyJWT = (token) => {
    try {
        // Verify the JWT token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Return the decoded token data
        return decodedToken;
    } catch (error) {
        // If verification fails, throw an error or handle it accordingly
        console.error('Error verifying JWT:', error);
        return null;
    }
}


export const protect = (req, res, next) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        res.status(401)
        res.json({ message: 'not authorised' })
        return
    }

    const [, token] = bearer.split(' ');

    if (!token) {
        res.status(401)
        res.json({ message: 'not valid token' })
        return
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    } catch (e) {
        console.error(e)
        res.status(401)
        res.json({ message: 'not valid token' })
        return
  }
}