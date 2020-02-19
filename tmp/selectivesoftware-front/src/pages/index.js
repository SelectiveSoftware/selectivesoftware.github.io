import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';
import Flipper from '../components/Flipper';
import Latest from '../components/Latest';
import ContactEmbedded from "../components/ContactEmbedded";

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
                <ContactEmbedded></ContactEmbedded>

          </Layout>
        );
    }
}

export default Homepage;
