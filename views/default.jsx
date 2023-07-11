const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
            </body>
            <footer className="footer">
                <a href=""> Resume </a>
                <a href="https://github.com/deanhmsra"> Portfolio </a>
                <a href="https://www.linkedin.com/in/hayley-dean-b349a31a4/"> LinkedIn </a>
            </footer>
        </html>
    )
}

module.exports = Def