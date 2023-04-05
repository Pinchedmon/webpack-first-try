import Post from '@models/Post'
import '@/styles/styles.css'
import '@/styles/less.less'
import '@/styles/sass.sass'
import React from 'react'
import { render } from 'react-dom'
const post = new Post('Title')
console.log('Post to String: ', post.toString())

const App = () => {
    let x;
    return (
        <div className="container">
            <h1>template</h1>
            <hr />
            <div className="log"></div>
            <hr />
            <div className="box">
                <h2>Less</h2>
            </div>
            <div className="fix">
                <h2>Sass</h2>
            </div>
        </div>
    )
}
render(<App />, document.getElementById('app'))