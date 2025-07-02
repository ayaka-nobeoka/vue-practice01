<script setup lang="ts">
import { ref } from "vue";

const timeOfDay = ref<string | null>(null);
// const message = ref('朝':"おはようございます",'昼':"こんにちは",'夜':"こんばんは",);
//これは ref にしなくてOK（中身が変化しないから）
const messages = {
  朝: "おはようございます",
  昼: "こんにちは",
  夜: "こんばんは",
};
</script>

<template>
  <div>
    <button @click="timeOfDay = '朝'">朝</button>
    <!-- <p v-if="timeOfDay === '朝'">{{ messages[timeOfDay] }}</p> -->
    <!-- 表示するメッセージは timeOfDay を使って取得する messages['朝']みたいな -->
    <button @click="timeOfDay = '昼'">昼</button>
    <button @click="timeOfDay = '夜'">夜</button>
    <!-- timeOfDayが選ばれた時だけメッセージ表示 (一つひとつ条件を設定しないでもいけた)-->
    <div v-if="!timeOfDay">これから挨拶します</div>
    <p v-if="timeOfDay">{{ messages[timeOfDay] }}</p>
  </div>
</template>
