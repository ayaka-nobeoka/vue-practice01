<script setup lang="ts">
import TodoItem from "./TodoItem.vue";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const props = defineProps<{
  todos: Todo[];
}>();
//親コンポーネントから受け取る値（props）を定義
//今ここでは、todos（Todo型の配列）を受け取って,TodoItem.vue などを v-for で使うために必要!

const emit = defineEmits<{
  (e: "delete", id: number): void;
  (e: "complete", id: number): void;
}>();
//子コンポーネントから親にイベント（命令）を伝えるための関数 を定義
//emit("delete", id) → 親に「このidのTodoを削除して！」と伝える
//emit("complete", id) → 親に「このidのTodoを完了に切り替えて！」と伝える

//🎮 defineProps：
// 「親が子にゲームのルール（Todoリスト）を渡してくるよ！」

// 📢 defineEmits：
// 「子が親に “このTodo消して〜！” って叫ぶと、親が消してくれるよ！」
</script>

<template>
  <ul class="todo-list">
    <TodoItem
      v-for="todo in props.todos"
      :key="todo.id"
      :todo="todo"
      @delete="(id) => emit('delete', id)"
      @complete="(id) => emit('complete', id)"
    />
  </ul>
  <!-- こうすることで、中の TodoItem で削除や完了ボタンを押したときに、親（App.vue）まで通知が届く仕組みになります！ -->
</template>
