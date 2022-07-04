import express from 'express'

const app = express()

const PORT = process.env.PORT || 5001

app.listen(PORT, function(){
	console.log(`App is running on the port ${PORT}`)
})
