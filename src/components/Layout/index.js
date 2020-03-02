// import { useStaticQuery, graphql } from 'gatsby';
// import PropTypes from 'prop-types';
// import React from 'react';

// import Header from '../Header';
// import { Container } from './styles';

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `);

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <Container>
//         <main>{children}</main>
//         <footer>
//           ©
//           {' '}
//           {new Date().getFullYear()}
//           , Built with
//           {' '}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </Container>
//     </>
//   );
// };

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Layout;

import React from 'react';

import PropTypes from 'prop-types';

import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
