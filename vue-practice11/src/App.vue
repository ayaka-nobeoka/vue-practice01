<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import ChildComponent from "./components/ChildComponent.vue";
const btn = ref<boolean>(true);
const showChild = ref<boolean>(true);

function handleClick() {
  btn.value = !btn.value;
  showChild.value = !showChild.value;
  console.log("ボタンが押されました！");
}

onMounted(async () => {
  console.log("Hello Vue!");
});
watch(btn, (newVavl, oldVal) => {
  console.log("値が変更されました", oldVal, "→", newVavl);
});
//watch() は「監視する関数」で、あるリアクティブな値（ここでは btn）が変化するたびに呼ばれます。
//btn.value = !btn.value で値が切り替わると、その変化が watch にキャッチされ、console.log() が出る。
</script>

<template>
  <p>親コンポーネントです。</p>

  <!-- 子コンポーネントを条件付きで表示 -->
  <ChildComponent v-if="showChild" />

  <button @click="handleClick">ボタン</button>
  <p v-if="btn">表示されました。</p>
  <p v-else>非表示になりました。</p>
</template>
