import React from "react";
import "../assets/scss/main.scss";

import Zombotron from "./Zombotron";
import Footer from "./Footer";

class Template extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children } = this.props;

        return (
            <div className={`body ${this.state.loading}`}>
                <Zombotron />
                {children}
                <Footer />
            </div>
        );
    }
}

export default Template;
