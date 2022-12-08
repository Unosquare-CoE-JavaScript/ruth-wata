import { Route, Switch } from 'react-router-dom'
import QuoteList from './components/quotes/QuoteList'

function App() {
  return (


      <Switch>

        <Route path='/quotes' exact>
          <QuoteList/>
        </Route>

        <Route path='/addquote' exact>

        </Route>
      </Switch>

  );
}

export default App;
