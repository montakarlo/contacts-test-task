import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router';
import { Root } from 'components';
import { history } from 'routes/history';
import { store } from 'store';
import ReduxToastr from 'react-redux-toastr'


const root = document.getElementById('root');
const render = (Component, root, done = () => {}) => {
	ReactDOM.render(
		<ReduxProvider store={store}>
			<ConnectedRouterProvider history={history}>
				<Component />
        <ReduxToastr
          timeOut={3000}
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
			</ConnectedRouterProvider>
		</ReduxProvider>,
		root,
		done,
	);
};

render(Root, root);
