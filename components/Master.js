import Head from 'next/head'
import Navigation from '../components/Navigation'

const MasterPage = (props) => (
  <div>
    <head>
      <title>Bitcoin App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
    </head>
    <Navigation/>
    <div className="container mt-3">
      {props.children}
    </div>
  </div>
);

export default MasterPage;
