<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import TodoAddForm from "./components/TodoAddForm.vue";
import BaseInput from "./components/BaseInput.vue";
import TodoItem from "./components/TodoItem.vue";
import { ref } from "vue";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const todos = ref<Todo[]>([
  {
    id: 1,
    title: "Todoのタイトル1",
    completed: true,
  },
  {
    id: 2,
    title: "Todoのタイトル2",
    completed: false,
  },
  {
    id: 3,
    title: "Todoのタイトル3",
    completed: false,
  },
]);

const newTodo = ref<string>("");
// リアクティブな変数（newTodo）を定義
// ref<string>("") は Vueのリアクティブ機能（状態管理）を使って、「空の文字列（""）」を状態として保持する
// string は 型定義（この変数は「文字列型だよ」と明示）
function addTodo() {
  // 条件チェック
  if (!newTodo.value.trim()) return;
  // 「もし、入力された文字が空（またはスペースだけ）なら、追加処理をやめる（Todoに追加しない）」ということ！
  // todos に追加
  todos.value.push({
    id: Date.now(), // ユニークなID
    title: newTodo.value,
    completed: false,
  });
  // 入力欄をリセット
  newTodo.value = "";
}
function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}

function completeTodo(id: number) {
  const target = todos.value.find((todo) => todo.id === id);
  // todos の中で id が一致した1件のTodo
  if (target) target.completed = !target.completed;
}
</script>
<template>
  <div class="app">
    <h1 class="title">今日やること</h1>
    <BaseInput
      :modelValue="newTodo"
      @update:modelValue="newTodo = $event"
      class="input"
    />
    <BaseButton label="追加" class="btn-add" @click="addTodo" />
    <ul class="todo-list">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete="deleteTodo"
      />
    </ul>
  </div>
  <TodoList />
  <TodoAddForm />
</template>

<style scoped>
.app {
  max-width: 375px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 6px 6px #0000001a;
  border-radius: 24px;
  opacity: 1;
}
.title {
  text-align: left;
  font: normal normal normal 24px/41px Hiragino Maru Gothic ProN;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
.input {
  width: 80%;
  height: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  opacity: 1;
}
.todo-list {
  list-style: none;
}
.todo-lists {
  border-bottom: 1px solid #cdcdcd;
  opacity: 1;
  padding: 5px;
}
.btn-add {
  width: 57px;
  height: 30px;
  background: #c1c1c1 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  color: #fff;
  border: #c1c1c1;
  margin-left: 10px;
}

.btn-dele {
  width: 57px;
  height: 30px;
  background: #ff3700 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  color: #fff;
  border: #ff3700;
  margin-left: 10px;
}

.btn-comp {
  width: 57px;
  height: 30px;
  background: #008cff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  color: #fff;
  border: #008cff;
  margin-left: 10px;
}

.completed {
  text-decoration: line-through; /* 打ち消し線をつける */
}
</style>
