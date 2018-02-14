import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Landing from './components/Landing'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Landing />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker()
