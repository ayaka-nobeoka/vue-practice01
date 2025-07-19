<!-- src/components/TodoItem.vue -->
<script setup lang="ts">
import { DefineProps, defineEmits } from "vue";
//DefinePropsの役割：親コンポーネントから渡された props を使えるようにする。いつ使う？：子コンポーネントで「値を受け取る」とき
//defineEmitsの役割：親にイベントを伝える emit 関数を定義する.いつ使う？：子コンポーネントから「何かを親に伝えたい」とき（クリック通知など）
const props = defineProps<{
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
}>();
//props の型（受け取る値の形）を明示
//defineProps という Vueの専用関数 を「呼び出して」使っている[defineProps は関数です（Vue が用意してる）]
//<{ ... }> は ジェネリクス（Generics） と呼ばれる 型の指定で「こういう形の props を受け取りますよ」と型を教えてあげてる
//最後の()で 「関数の実行（呼び出し）」

//簡単な場合、型を別で宣言してこう書くこともあります：

// type Todo = {
//   id: number;
//   title: string;
//   completed: boolean;
// };

// const props = defineProps<{ todo: Todo }>();

const emit = defineEmits<{
  (e: "delete", id: number): void;
}>();
function handleDelete() {
  emit("delete", props.todo.id); // ← 親に「削除してね」と伝える
}
</script>

<template>
  <div>
    <span>{{ props.todo.title }}</span>
    <button @click="handleDelete">削除</button>
  </div>
</template>
