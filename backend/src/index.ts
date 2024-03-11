import * as dotenv from 'dotenv'
dotenv.config()
import app from './server'
import config from './config'


app.listen(config.port, () => {
    // console.log(config.port,"this is test file")
    console.log(`App is running on: http://localhost:${config.port}`)
})