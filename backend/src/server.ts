import express from 'express'
import router from './router'
import morgan from 'morgan'
import exp from 'constants'
import cors from 'cors'
import { protect } from './modules/auth'
import { createNewUser, signin, getUserData} from './handlers/user'


const app = express()

const customLogger = (message) => (req, res, next) => {
    console.log(`hello from ${message}`)
    next()
}

app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//google.com? a=1,thing=otherthing'


app.get('/', (req, res, next) => {
   res.json({message:"hello"})
})

app.use('/api', protect, router)

app.post('/signup', createNewUser)
app.post('/signin', signin)
app.post('/me', getUserData)

app.use((err, req, res, next) => {
    if (err.type === 'auth') {
        res.status(401).json({message: 'unauthorized'})
    } else if (err.type === 'input') {
        res.status(400).json({ message: 'invalid input' })
    } else {
        res.status(500).json({message: ' oops that was no error'})
    }
    
})






export default app