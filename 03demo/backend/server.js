import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     res.send('Server id ready!')
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'joke 1',
            content: 'This is the first joke'
        }
        ,
        {
            id: 2,
            title: 'joke 2',
            content: 'This is the second joke'
        },
        {
            id: 3,
            title: 'joke 3',
            content: 'This is the third joke'
        },
        {
            id: 4,
            title: 'joke 4',
            content: 'This is the fourth joke'
        },
        {
            id: 5,
            title: 'joke 5',
            content: 'This is the fifth joke'
        }
    ]

    res.send(jokes)
})

app.listen(PORT, () => {
    console.log(`Server at http://localhost:${PORT}/api/jokes`)
})