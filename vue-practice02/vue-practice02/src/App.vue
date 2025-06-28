<script setup lang="ts">
import { reactive } from "vue";
//リアクティブな値を使うためにreactiveをインポートする必要がある🐈
type Person = {
  name: string;
  age: number;
};
//型を定義する👆

const person = reactive<Person>({
  name: "延岡",
  age: 30,
});
//リアクティブな値を宣言する→Vueにこの変数を“見張ってて”ね！」と伝えること！！！
//ここだとnameとageの値が変わったら自動的に更新してくれる
</script>
<template>
  <p>名前: {{ person.name }}</p>
  <!-- 「person オブジェクトの中にある name プロパティをここに表示してね」 -->
  <p>年齢: {{ person.age }}</p>
</template>
