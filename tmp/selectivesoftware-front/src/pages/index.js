import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';
import Flipper from '../components/Flipper';
import Latest from '../components/Latest';
import Contact from "../components/Contact";

class Homepage extends React.Component {
    render() {
        const siteTitle = "Selective Software - IT Consultancy";

        //<LatestProject> </LatestProject>
        //<ContactUs> </ContactUs>
        return (
          <Layout>
                <Helmet title={siteTitle} />
                <Flipper> </Flipper>
                <Latest></Latest>
                <Contact></Contact>

          </Layout>
        );
    }
}

export default Homepage;
