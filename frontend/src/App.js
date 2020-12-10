import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostDetailPage from './pages/PostDetailPage'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/posts/:id" component={PostDetailPage} />
            </Switch>
        </Router>
    )
}

export default App
