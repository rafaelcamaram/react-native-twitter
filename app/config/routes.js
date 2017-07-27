import HomePage from 'app/routes/Home/index';
import MessagesPage from 'app/routes/Messages/index';
import SearchPage from 'app/routes/Search/index';
import NotificationsPage from 'app/routes/Notifications/index';

const routes = {
	Home: { screen: HomePage },
	Search: { screen: SearchPage },
	Notifications: { screen: NotificationsPage },
	Messages: { screen: MessagesPage }
};

export default routes;