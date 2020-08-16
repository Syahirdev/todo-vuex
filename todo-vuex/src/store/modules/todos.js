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

	async deleteTodo({ commit }, id) {
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
		commit('deleteTodo', id);
	},
};

const mutations = {
	fetchTodos: (state, todos) => (state.todos = todos),

	//same as .push(), but will insert at the beginning of array
	addTodo: (state, todo) => state.todos.unshift(todo),

	//will filter the new todos with deleted ID
	deleteTodo: (state, id) => (state.todos = state.todos.filter((todo) => todo.id !== id)),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
