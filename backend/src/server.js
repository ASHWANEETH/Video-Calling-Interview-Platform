import express from 'express'
import {ENV} from "./lib/env.js"

const app = express()

app.get('/health', (req,res)=>{
  res.status(200).json({msg:'Hey there! its working fine'})
})

app.listen(ENV.PORT,()=>{console.log(`Server started sucessfully at port ${ENV.PORT}`)})