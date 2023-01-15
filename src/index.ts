import express from 'express'
import locationRouter from './routes/locationRoutes'

const app = express()

const PORT = 3000

app.use(express.json())

app.use('/', locationRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT} :)`)
})