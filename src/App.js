import React, { Component } from 'react'
import Intro from 'containers/Intro'
import AboutMe from 'containers/AboutMe'
import Experience from 'containers/Experience'
import Education from 'containers/Education'
import Projects from 'containers/Projects'
import Contact from 'containers/Contact'

class App extends Component {
  state = {
    windowHeight: undefined,
    windowWidth: undefined
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    })
  }
  
  render() {
    return(
      <React.Fragment>
        <Intro windowHeight={this.state.windowHeight} windowWidth={this.state.windowWidth} />
        <AboutMe windowHeight={this.state.windowHeight} windowWidth={this.state.windowWidth} />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </React.Fragment>
    )
  }
};

export default App
