import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'
import { notFound } from './app/middlewares/notFound'
import router from './app/routes'
import cookieParser from 'cookie-parser'
const app: Application = express()

//parsers
app.use(express.json())
app.use(cors({ origin: ['http://localhost:5173'] }))
app.use(cookieParser())

//application routes
app.use(`/api/v1`, router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// middlewares
app.use(globalErrorHandler)
app.use(notFound)

export default app
