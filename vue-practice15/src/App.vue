<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import TodoAddForm from "./components/TodoAddForm.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
// ✅ APIから取得する関数
const fetchTodos = async () => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    todos.value = res.data;
  } catch (error) {
    console.error("データの取得に失敗しました", error);
  }
};

// ✅ マウント時に取得
onMounted(() => {
  fetchTodos();
});

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
async function addTodo() {
  if (!newTodo.value.trim()) return;

  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: newTodo.value,
      completed: false,
    });

    // APIのレスポンスを追加（※モックAPIなのでidは固定 or 仮のもの）
    todos.value.push({
      id: res.data.id || Date.now(), // idがAPIから返らない場合に備える
      title: res.data.title,
      completed: res.data.completed,
    });

    newTodo.value = "";
  } catch (error) {
    console.error("追加に失敗しました", error);
  }
}

async function deleteTodo(id: number) {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    todos.value = todos.value.filter((todo) => todo.id !== id);
  } catch (error) {
    console.error("削除に失敗しました", error);
  }
}

async function completeTodo(id: number) {
  try {
    // ✅ サーバーに「完了にするよ」と伝える PATCHリクエスト
    await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true,
    });

    // ✅ ローカルの表示も完了状態に更新（サーバーの返事が成功したら）
    const target = todos.value.find((todo) => todo.id === id);
    if (target) target.completed = true;
  } catch (error) {
    console.error("完了処理に失敗しました", error);
  }
}
</script>
<template>
  <div class="app">
    <h1 class="title">今日やること</h1>
    <!-- ここが変更点！ -->
    <TodoAddForm
      :modelValue="newTodo"
      @update:modelValue="newTodo = $event"
      @add="addTodo"
    />
    <TodoList :todos="todos" @delete="deleteTodo" @complete="completeTodo" />
  </div>
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

.completed {
  text-decoration: line-through; /* 打ち消し線をつける */
}
</style>
