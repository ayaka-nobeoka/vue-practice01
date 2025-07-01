<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const user = ref({
  firstName: "",
  lastName: "",
});
// ユーザーの性と名前を管理するためのプロパティを定義👆

function showModal() {
  isOpen.value = true;
}

function showModalClose() {
  isOpen.value = false;
}

function SubmitEvent() {
  console.log("フルネーム:", user.value.firstName + user.value.lastName);
}
</script>

<template>
  <button @click="showModal()" class="open-button">モーダルを開く</button>

  <div class="modal" :class="{ 'modal--open': isOpen }">
    <div class="modal__inner">
      <div class="model__header">
        <h1>フォーム</h1>
        <button @click="showModalClose()" class="model__close-button">
          閉じる
        </button>
      </div>

      <form @submit.prevent="SubmitEvent" class="form">
        <div class="form__field">
          <label>姓</label>
          <input v-model="user.firstName" type="text" />
          <span>入力した姓の値:{{ user.firstName }} </span>
        </div>
        <!-- v-modelを使って同期するログにとった値が出なくてなんでかなと思ったら同期が必要だった！ -->
        <div class="form__field">
          <label>名</label>
          <input v-model="user.lastName" type="text" />
          <span>入力した名の値: {{ user.lastName }} </span>
        </div>

        <button type="submit" @click="SubmitEvent()" class="form__submit">
          送信する
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
button {
  display: block;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;

  padding: 8px 16px;
  background-color: #3895ff;
  color: #fff;
  border-radius: 4px;
}

input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal--open {
  display: block;
}

.modal__inner {
  position: relative;
  width: 480px;
  margin: 100px auto;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
}

.model__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.model__close-button {
  margin-left: auto;
  background-color: #fff;
  border: 1px solid #3895ff;
  color: #3895ff;
  transition: 0.3s;
}

.model__close-button:hover {
  background-color: #3895ff;
  color: #fff;
}

.form {
  display: grid;
  gap: 24px;
}

.form__field {
  display: grid;
  gap: 8px;
}
</style>

<!-- 「プロパティとして持つデータを定義」とは？ -->
<!-- Vueコンポーネントの中で、ある名前（プロパティ）をつけて、データ（値）を管理できるようにすること。 -->
<!-- Vueコンポーネントの中で、ある名前（プロパティ）をつけて、データ（値）を管理できるようにすること。 -->
