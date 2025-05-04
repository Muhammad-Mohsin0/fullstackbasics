import express  from 'express'

const app =express()
const port = process.env.PORT || 4000;

// app.get('/', (req ,res)=>{
//     res.send('server is ready')
// })

//get a list of jokes

app.get('/api/jokes',(req, res)=>{
    const jokes =[
        {
            id:1,
            title: ' A joke',
            content: 'This is a joke'
        },
        {
            id:2 ,
            title: 'Another Joke',
            content: 'This a another joke'
        },
        {
            id:3 ,
            title: 'Another third Joke',
            content: 'This a another third joke'
        },
        {
            id:4 ,
            title: 'Another fourth Joke',
            content: 'This a another fourth joke'
        },
        {
            id:5,
            title: 'Another fifth Joke',
            content: 'This a another fifth joke'
        },

    ];
    res.send(jokes)
})
app.listen(port,()=>{
    console.log(`serve st http://localhost:${port}`);
    
})