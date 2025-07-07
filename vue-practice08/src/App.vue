<script setup lang="ts">
import { ref, computed  } from "vue";
const name = ref<string>("");
const number = ref<string>("");
const mail = ref<string>("");
const picked = ref<string>("");
const textareaText = ref<string>("");
const isChecked = ref<boolean>(false);

const nameError = ref(""); // エラーメッセージ（最初は空）
const numberError = ref(""); // エラーメッセージ（最初は空）
const mailError = ref("");
const pickedError = ref("");
const textareaError = ref("");
const checkedError = ref("");


// バリデーションチェック

// ✅ フォームがすべて有効なとき true を返す
//  左から順に見て、全部がtrueならtrue
//  全てが入力されていて、同意にもチェックされていれば true（＝ボタンを活性化）
const isFormValid = computed(() => {
  return (
    name.value.trim() !== "" && // 名前が空でない
    number.value.trim() !== "" && // 電話番号が空でない
    mail.value.includes("@") && // メールに「@」が含まれている
    picked.value.trim() !== "" && // ラジオボタンが選ばれている
    textareaText.value.trim() !== "" && // お問い合わせ内容が空でない
    isChecked.value === true // チェックボックスがチェックされている
  );
});

function validateForm() {
  let isValid = true;

  if (name.value.trim() === "") {
    nameError.value = "お名前を入力してください";
    isValid = false;
  } else {
    nameError.value = "";
  }
  // 電話番号チェック
  if (number.value.trim() === "") {
    numberError.value = "電話番号を入力してください";
    isValid = false;
  } else {
    numberError.value = "";
  }

  // メールチェック
  if (!mail.value.includes("@")) {
    mailError.value = "正しいメールアドレスを入力してください";
    isValid = false;
  } else {
    mailError.value = "";
  }

  // お問い合わせ内容チェック
  if (textareaText.value.trim() === "") {
    textareaError.value = "お問い合わせ内容を入力してください";
    isValid = false;
  } else {
    textareaError.value = "";
  }

  // ラジオボタン選択チェック
  if (picked.value.trim() === "") {
    pickedError.value = "ご希望の連絡方法を選択してください";
    isValid = false;
  } else {
    pickedError.value = "";
  }

  // チェックボックスチェック
  if (!isChecked.value) {
    checkedError.value = "同意が必要です";
    isValid = false;
  } else {
    checkedError.value = "";
  }

  // 他のバリデーションがあればここに追加

  return isValid;
}


function handleSubmit() {
  if (validateForm()) {
    console.log("送信処理実行");
    // 実際のAPI送信などの処理をここに
  }
}

</script>
<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="from-item">
        <label for="name">お名前 </label>
        <div class="input-wrapper">
        <input class="input-area" type="text" id="name" @blur="validateForm" v-model="name" :class="{ 'error-input': nameError }"/>
          <p v-if="nameError" class="error-text">{{ nameError }}</p>
          </div>
      </div>

      <div class="from-item">
        <label for="number">電話番号 </label>
        <div class="input-wrapper">
        <input class="input-area" type="text" id="number" v-model="number" :class="{ 'error-input': numberError }"/>
      <p v-if="numberError" class="error-text">{{ numberError }}</p>
      </div>
      </div>

      <div class="from-item">
        <label for="mail">メールアドレス</label>
        <div class="input-wrapper">
        <input  class="input-area" type="text" id="mail" v-model="mail" :class="{ 'error-input': mailError }"/>
        <p v-if="mailError" class="error-text">{{ mailError }}</p>
        </div>
      </div>

        <div class="from-item">
          <label for="raio">ご希望の連絡方法</label>
          <div class="radio-item" :class="{  pickedError }">
          <input type="radio" v-model="picked"  id="phone" value="電話" />電話</input>
          <input type="radio" v-model="picked" value="メール">メール</input>
          <div v-if="pickedError" class="error-text">{{ pickedError }}</div>
        </div>
      </div>

      <div class="from-item">
        <label for="textareaText">お問い合わせ内容</label>
        <div class="input-wrapper">
        <textarea  class="input-area" v-model="textareaText" placeholder="お問い合わせ内容を入力" :class="{ 'error-input': textareaError }">お問い合わせ内容</textarea>
        <p v-if="pickedError" class="error-text">{{ textareaError }}</p>
        </div>
      </div>

      <div class="from-item">
        <div class="checkbox-item">
          <input type="checkbox" v-model="isChecked" :class="{ 'error-input': checkedError }">同意する</input>
          <p v-if="pickedError" class="error-text">{{ checkedError }}</p>
        </div>
      </div>

      <div class="button">
        <button class="btn" :disabled="!isFormValid" >送信</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container{
  display: block;
  width: 600px;
  padding: 20px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #0000001A;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  opacity: 1;
  font: normal normal normal 16px/24px Hiragino Kaku Gothic ProN;
}
.from-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
   align-items: flex-start; 
}
.radio-item{
    display: flex;
    width: 50%;
    margin: 0 auto;
}
.input-area{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #CCCCCC;
  width: 358px;
  padding: 5px;
  border-radius: 4px;
  opacity: 1;
}
.checkbox-item{
  display: flex;
  margin: 0 auto;
}
.button {
  display: flex;
  justify-content: center;
  box-shadow: none;
}
.btn {
  background-color: #3895FF;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 2px 35px;
  cursor: pointer;
}
/* 活性時のホバー */
.btn:hover:enabled {
  background-color: #0056b3; /* 少し濃い青に */
}

/* 非活性（disabled）時 */
.btn:disabled {
  background-color: #cccccc;
  color: #888888;
  cursor: not-allowed;
}

.error-input {
  border: 1px solid red;
}

.error-text {
  color: red;
  font-size: 14px;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
