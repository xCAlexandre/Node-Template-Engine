const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ["item a", "item b", "item c"]

    res.render('dashboard', { items })
})

app.get("/post", (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js...',
        comments: 4
    }

    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Teste',
            comments: 4
        },
        {
            title: 'Aprender HTML',
            category: 'html',
            body: 'Teste',
            comments: 2
        },
        {
            title: 'Aprender CSS',
            category: 'CSS',
            body: 'Teste',
            comments: 1
        }
    ]

    res.render('blog', {posts})
})

app.get('/', (req, res) => {
    const user = {
        name: "Alexandre",
        surname: "Perez",
        age: "30"
    }
    const dado = "Outro dado"

    const auth = true

    const approved = true

    res.render('home', { user: user, dado, auth, approved })
})

app.listen(3000, () => {
    console.log('App funcionando na porta 3000')
})