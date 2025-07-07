<script setup lang="ts">
import { ref } from "vue";
const name = ref<string>("");
const number = ref<string>("");
const mail = ref<string>("");
const picked = ref<string>("");
const textareaText = ref<string>("");
const isChecked = ref<string>("");
function handleSubmit(){

}

</script>
<template>
  <div class="container">
    <from @submit.prevent="handleSubmit">
    <label for="name">お名前 </label>
    <input type="text" id="name" v-model="name" />
    <label for="number">電話番号 </label>
    <input type="text" id="number" v-model="number" />
    <label for="mail">メールアドレス</label>
    <input type="text" id="mail" v-model="mail" />

    <input type="radio" v-model="picked"  id="phone" value="電話"/>電話</input>
    <input type="radio" v-model="picked" value="メール">メール</input>
    <textarea v-model="textareaText" placeholder="お問い合わせ内容を入力" >お問い合わせ内容</textarea>
    <input type="checkbox" v-model="isChecked">同意する</input>
    <button @click="">送信</button>
    </from>
  </div>
</template>
<style scoped>
.container{
  
}
</style>
