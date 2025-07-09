<script setup lang="ts">
import { ref, watch } from "vue";
import axios from "axios";

const productName = ref(""); // 入力された商品名
const products = ref<Product[]>([]); //APIで取得した商品一覧を入れる
const isLoading = ref(false); // データ取得中かどうか
const noData = ref(false); // データなしフラグ
const errorMessage = ref(""); // エラーメッセージ

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
};

// 商品名が変更されるたび、また初期表示時にAPIを実行

watch(productName, async (newValue) => {
  if (newValue.trim() !== "") {
    errorMessage.value = "";
    noData.value = false;
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=1&limit=20&title=${newValue}`
      );
      products.value = response.data;

      if (response.data.length === 0) {
        noData.value = true;
      }
    } catch (error) {
      errorMessage.value = "データの取得に失敗しました。";
      products.value = [];
    } finally {
      isLoading.value = false;
    }
  } else {
    products.value = [];
    noData.value = false;
    errorMessage.value = "";
  }
});
</script>

<template>
  <input
    type="text"
    class="input"
    v-model="productName"
    placeholder="商品名を入力してください。"
  />

  <p v-if="isLoading">データ取得中...</p>
  <p v-if="errorMessage">{{ errorMessage }}</p>
  <p v-else-if="noData">データがありませんでした。</p>
  <ul class="products">
    <li v-for="item in products" :key="item.id">
      <div>
        <img :src="item.images[0]" alt="商品画像" width="100" />
      </div>
      <h2 class="product-title">{{ item.title }}</h2>
      <span>${{ item.price }}</span>
    </li>
  </ul>
</template>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}

.input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  list-style: none;
}

.product-title {
  font-size: 18px;
  margin-bottom: 12px;
}
</style>
