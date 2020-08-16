import axios from 'axios';

const state = {
	todos: [
		{ id: 1, title: 'one' },
		{ id: 2, title: 'two' },
	],
};

const getters = {
	getAllTodos: (state) => state.todos,
};

const actions = {};

const mutations = {};

export default {
	state,
	getters,
	actions,
	mutations,
};
