import server from 'express'
import { tutorRouter, tutoradoRouter, tutoriaRouter } from './routes' 

const app = server()

app.use(server.json())

app.use('/tutor', tutorRouter)
app.use('/tutorado', tutoradoRouter)
app.use('/tutoria', tutoriaRouter)


app.listen(3000, () => {
    console.log('Server on port 3000')
})