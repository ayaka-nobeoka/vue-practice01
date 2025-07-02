<script setup lang="ts">
import { ref } from "vue";
type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
};
const books = ref<Book[]>([
  {
    id: 1,
    title: "こころ",
    author: "太宰治",
    description: "自殺を考える先生のこころの葛藤を描いた小説",
  },
  {
    id: 2,
    title: "人間失格",
    author: "太宰治",
    description: "人間の本質を問う小説",
  },
  {
    id: 3,
    title: "吾輩は猫である",
    author: "太宰治",
    description: "猫の視点から人間社会を描いた小説",
  },
]);
// 選択された本のIDを記録
const selectedBookId = ref<number | null>(null);

// クリック時に実行される関数（consoleにも出力）
function showDescription(id: number, description: string) {
  selectedBookId.value = id;
  console.log(description);
}
</script>

<template>
  <ul>
    <li v-for="book in books" :key="book.id">
      {{ book.title }}. {{ book.author }}
      <button @click="showDescription(book.id, book.description)">
        詳細を見る
      </button>
      <span v-if="selectedBookId === book.id"> {{ book.description }}</span>
    </li>
  </ul>
</template>

<!-- 
 名前を分ける
selectedBookId → 表示中の本のID（状態）
showDescription() → ボタンを押した時に実行される処理 

目的の再確認
ボタンをクリックしたときに：

該当する本の「説明」を console.log に出したい

そして、その本の説明だけ画面に表示したい（他は非表示）

👇 だから必要なのが book.id
book.id を渡すことで：

どの本がクリックされたかを判別できます。

表示状態を管理するために selectedBookId に保存する必要がある

💡 なぜ description だけじゃダメ？
たとえば showDescription(book.description) だけにしてしまうと…

画面に表示する説明の条件（v-if）に使える ID 情報が失われてしまう
→ selectedBookId === book.id という判定ができない！



-->
