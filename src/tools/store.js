import { writable } from 'svelte/store';
import { API_URL } from '../config.js'

const headers = new Headers({
	'Content-Type': 'application/json'
})

async function getTools(filter) {
	const res = await fetch(`${API_URL}/tools`, { headers })
	let tools = []
	if(res.ok) {
		tools = await res.json();
		return { tools, status:'fetched'}
	}
	return { tools, status:'error' } 	
}

async function start(set) {
	let tools = [];
	let status = 'fetching';
	set({ tools, status });	
	set(await getTools());
	return () => false;		
}

async function filter(filter, isTagOnly) {
	console.log(filter, isTagOnly)
}
async function submit(tool) {
	console.log(tool)
}

function createStore() {
	
	const initialState = {tools:[], status:'started'};
	const {subscribe, set, update } = writable(initialState, start);

	return {
		subscribe,	
		filter,
		submit,
		reset: () => set([])
	};
}

export const tools = createStore();