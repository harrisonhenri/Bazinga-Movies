import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { fetchUser } from './actions';
import { TransitionGroup, Transition } from 'react-transition-group';

// Style
import GlobalStyle from './global';

// Formaters
import { play } from './utils/timelines';

// Components
import Header from './components/Header';
import Logon from './pages/Logon';
import MoviesList from './pages/MoviesList';
import MoviesDetails from './pages/MovieDetails';
import Profile from './pages/Profile';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          {this.props.auth ? (
            <React.Fragment>
              <Redirect to="/profile" />
              <Header />
              <Route
                render={({ location }) => {
                  const { pathname, key } = location;

                  return (
                    <TransitionGroup component={null}>
                      <Transition
                        key={key}
                        appear={true}
                        onEnter={(node, appears) =>
                          play({ pathname }, node, appears)
                        }
                        timeout={{ enter: 750, exit: 0 }}
                      >
                        <Switch location={{ pathname }}>
                          <Route path="/profile" component={Profile} />
                          <Route path="/movies" component={MoviesList} />
                          <Route
                            path="/movie/:id"
                            component={(props) => <MoviesDetails {...props} />}
                          />
                        </Switch>
                      </Transition>
                    </TransitionGroup>
                  );
                }}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Route path="/" component={Logon} />
            </React.Fragment>
          )}
          <GlobalStyle />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(App);
