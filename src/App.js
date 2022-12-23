import { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AboutPage from './AboutPage';
import ContactsPage from './ContactsPage';
import WorkPage from './WorkPage';
import './styles.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <div >
              <ul>
                <li >
                  <Link to="/about">
                    О себе
                  </Link>
                </li>
                <li >
                  <Link to="/works">
                    Примеры работ
                  </Link>
                </li>
                <li>
                  <Link to="/contacts">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/works">
              <WorkPage />
            </Route>
            <Route path="/contacts">
              <ContactsPage />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}