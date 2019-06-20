import MasterPage from '../components/Master'
import fetch from 'isomorphic-unfetch'
import Price from '../components/Price'
import News from '../components/News'
import Events from '../components/Events'

const Index = (props) => (
  <MasterPage>
    <div className="row">
      <div className="col-12">
        <h2>Bitcoin Price</h2>
        <Price
          price={props.bitcoinPrice}
        />
      </div>
      <div className="col-md-8">
        <h2>Bitcoin News</h2>
        <News
          news={props.bitcoinNews}
        />
      </div>
      <div className="col-md-4">
        <h2>Next Events</h2>
        <Events
          events={props.bitcoinEvents}
        />
      </div>
    </div>
  </MasterPage>
);

Index.getInitialProps = async () => {
  const price = await fetch('https://api.coinmarketcap.com/v2/ticker/1/')
  const news = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-20&sortBy=publishedAt&apiKey=45ef7c3f82d342ab81ab4897f26da213&language=en')
  const events = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&sort_by=date&location.address=UnitedStates&token=EJCRMXI5WZ7GE2BBLFE3')

  const result = await price.json();
  const response = await news.json();
  const resultEvents = await events.json();

  return {
    bitcoinPrice: result.data.quotes.USD,
    bitcoinNews: response.articles,
    bitcoinEvents: resultEvents.events
  }
}

export default Index;
