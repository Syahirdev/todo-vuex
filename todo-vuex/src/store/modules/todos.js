import axios from 'axios';

const state = {
	todos: [],
};

const getters = {
	getAllTodos: (state) => state.todos,
};

const actions = {
	async fetchTodos({ commit }) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
		commit('fetchTodos', response.data);
	},

	async addTodo({ commit }, title) {
		const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
		commit('addTodo', response.data);
	},
};

const mutations = {
	fetchTodos: (state, todos) => (state.todos = todos),
	addTodo: (state, todo) => state.todos.unshift(todo), //same as .push(), but will insert at the beginning of array
};

export default {
	state,
	getters,
	actions,
	mutations,
};
