import { writable } from 'svelte/store';
import { API_URL } from '../config.js'

import filter from './filter.js'

const headers = new Headers({
	'Content-Type': 'application/json'
})

async function getTools(query='') {
	const res = await fetch(`${API_URL}/tools${query}`, { headers })
	let tools = []
	if(res.ok) {
		tools = await res.json();		
		tools = tools.reverse();
		return { tools, status: 'fetched'}
	}
	return { tools, status: 'error'} 	
}

async function start(set) {
	let tools = [];
	let status = 'fetching';
	set({ tools, status });	
	set(await getTools());
	return () => false;		
}

const remove = (update) => async (id) => {
	update(state => ({ ...state, status: 'fetching' }))
	const res = await fetch(`${API_URL}/tools/${id}`, {headers, method:'DELETE'})
	if(res.ok) {
		update(state => ({tools:state.tools.filter(t => t.id !== id), status:'fetched'}))
	} else {
		update(state => ({ ...state, status: 'error' }))
	}
}

const submit = (update) => async (tool) => {
	update(state => ({ ...state, status: 'fetching' }))
	const res = await fetch(`${API_URL}/tools`, { headers, method: 'POST', body:JSON.stringify(tool)})
	if (res.ok) {
		tool = await res.json();
		update(state => ({ tools: [tool, ...state.tools], status:'fetched'}))
	} else {
		update(state => ({ ...state, status: 'error' }))
	}
}

const get = (update) =>  async (query = '') => {
	update(state => ({...state, status:'fetching'}))	
	const state = await getTools(query)	
	return update(() => state)	
}

function createStore() {	
	const initialState = {tools:[], status:'started'};
	const {subscribe, set, update } = writable(initialState, start);

	return {
		get:get(update),
		remove:remove(update),
		submit:submit(update),
		subscribe,	
		set,
		update,
		reset: () => set(initialState)
	};
}

const tools = createStore();

filter.subscribe(({value, isTagOnly}) => {
	let query = '';
	if(value) {
		query = `?${isTagOnly ? 'tags_like' : 'q'}=${value}`
	}
	tools.get(query)
})

export {tools}