<template>
	<div>
		<h3>Todos</h3>
		<div class="legend">
			<span> [ <span class="incomplete-box"></span> ] Incomplete </span>
			<span> [ <span class="complete-box"></span> ] Complete </span>
		</div>
		<div class="todos">
			<!-- prettier-ignore-->
			<div
				class="todo"
				v-for="todo in getAllTodos"
				:key="todo.id"
				@click="updatingTodo(todo)"
				:class="{'is-complete': todo.completed }">
				{{ todo.title }}
				<i class="far fa-trash-alt" @click="deleteTodo(todo.id)"></i>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	computed: {
		...mapGetters(['getAllTodos']),
	},

	methods: {
		...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
		updatingTodo(todo) {
			const updatedTodo = {
				id: todo.id,
				title: todo.title,
				completed: !todo.completed,
			};
			this.updateTodo(updatedTodo);
		},
	},

	created() {
		this.fetchTodos();
	},
};
</script>

<style scoped>
.todos {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
}
.todo {
	border: 1px solid #ccc;
	background: #41b883;
	padding: 1rem;
	border-radius: 5px;
	text-align: center;
	position: relative;
	cursor: pointer;
}
i {
	position: absolute;
	bottom: 10px;
	right: 10px;
	color: #fff;
	cursor: pointer;
}
.legend {
	display: flex;
	justify-content: space-around;
	margin-bottom: 1rem;
}
.complete-box {
	display: inline-block;
	width: 10px;
	height: 10px;
	background: #35495e;
}
.incomplete-box {
	display: inline-block;
	width: 10px;
	height: 10px;
	background: #41b883;
}
.is-complete {
	background: #35495e;
	color: #fff;
	text-decoration: line-through;
}
@media (max-width: 700px) {
	.todos {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 500px) {
	.todos {
		grid-template-columns: 1fr;
	}
}
</style>
