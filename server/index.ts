import express from 'express'   
import cors from 'cors'
import morgan from 'morgan'
import { RoutesGET } from './Routes/Inspecciones.routes'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(RoutesGET)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

app.get('/', (req, res) => {
  res.send('Hello, World!')
})