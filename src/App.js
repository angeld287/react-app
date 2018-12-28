// eslint-disable-next-line
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {

    constructor() {
        super();
        this.state = {
            isAuthenticated: true,
        };
       }

    render() {
        
        const isAuthenticated = this.state.isAuthenticated === true;
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Layout>
                        {isAuthenticated && (
                            <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
                                <Navigation>
                                    <Link to="/resume">Resume</Link>
                                    <Link to="/aboutme">About Me</Link>
                                    <Link to="/projects">Projects</Link>
                                    <Link to="/contact">Contact</Link>
                                    <Link to="/signup">Sign Up</Link>
                                    <Link to="/signin">Sign In</Link>
                                </Navigation>
                            </Header>
                        )}
                        {isAuthenticated && (
                            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
                                <Navigation>
                                    <Link to="/resume">Resume</Link>
                                    <Link to="/aboutme">About Me</Link>
                                    <Link to="/projects">Projects</Link>
                                    <Link to="/contact">Contact</Link>
                                    <Link to="/signup">Sign Up</Link>
                                    <Link to="/signin">Sign In</Link> 
                                </Navigation>
                            </Drawer>
                        )}
                        
                        
                        <Content>
                            <div className="page-content" />
                            <Main/>
                        </Content>
                    </Layout>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
