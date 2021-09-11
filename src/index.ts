import express, { response } from 'express'

const app = express()
app.get('/',(req,res)=>{
    return response.json({mensage: 'hello Wold'})
})
app.listen(3333,()=>{
    console.log('Servidor Rodando')
})