import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
/**
	 * Used to navigate.
	 * If the new path and state are the same, it replaces the history instead of pushing it.
	 * Preventing long browser back pile of the same content.
	 * @param {string} path - The new path.
	 * @param {object} state - The new history state.
	 */
history.nav = (path, state = {}) => {
	if (history.location.pathname === path && state === history.location.state) {
		return history.replace(path, state)
	}
	return history.push(path, state)
}

export default history;