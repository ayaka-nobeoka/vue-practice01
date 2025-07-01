<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";

type FormData = {
  firstName: string;
  lastName: string;
};

const formData = ref<FormData>({
  lastName: "",
  firstName: "",
});
const isDisabled = computed(() => {
  return formData.value.lastName === "" || formData.value.firstName === "";
});

function changeFormData(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    formData.value = {
      ...formData.value,
      [event.target.name]: event.target.value,
    };
    //フォームの入力値（姓や名など）を formData に追加・上書きする処理
    //「空の箱に名前つけて値を追加していく」イメージ
  }
}

function submitForm() {
  console.log(
    `フルネーム: ${formData.value.lastName} ${formData.value.firstName}`
  );
}
</script>

<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form__field">
      <label for="lastName">姓</label>
      <input
        id="lastName"
        name="lastName"
        type="lastName"
        @input="changeFormData"
      />
    </div>
    <div class="form__field">
      <label for="firstName">名</label>
      <input
        id="firstName"
        name="firstName"
        type="firstName"
        @input="changeFormData"
      />
    </div>

    <button :disabled="isDisabled" class="form__submit">送信する</button>
  </form>
</template>

<style scoped>
input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.form {
  display: grid;
  gap: 24px;
  max-width: 480px;
  margin: 0 auto;
}

.form__field {
  display: grid;
  gap: 8px;
}

.form__submit {
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

.form__submit:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

<!-- ✅ event.target instanceof HTMLInputElement-->
<!-- まず安全確認：「このイベントは <input> に対して起きたのか？」-->
<!-- input以外だったら .value も .name も使えないので、ここでチェック。-->

<!-- event.target.name-->
<!-- <input name="firstName" /> という name 属性の値を取得します。-->
<!-- この名前を「キー（プロパティ名）」として使います。-->

<!-- ✅ ...formData.value -->
<!-- すでにある値を展開（コピー）します。-->
<!-- たとえば formData.value = { firstName: "山田" } だったら、それをまるごと残したまま…-->
<!-- ✅ [event.target.name]: event.target.value -->
<!-- name をキーにして、その値を更新 or 新しく追加します。-->
