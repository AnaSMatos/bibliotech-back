import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRouter from './routers/authRouter.js'
import booksRouter from './routers/booksRouter.js'
import materialsRouter from './routers/materialsRouter.js'
import loanRouter from './routers/loanRouter.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use(authRouter)
app.use(booksRouter)
app.use(materialsRouter)
app.use(loanRouter)

app.listen(process.env.PORT || 5000, () => {
	console.log('Server running on port ' + process.env.PORT)
})