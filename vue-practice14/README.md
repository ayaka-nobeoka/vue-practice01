## 📝 課題内容

以下の内容を実装してください。

### ◆ 問題

1. `router/index.ts` の内容を、`Home.vue` と `Users.vue` にそれぞれルーティングするように書き換えてください。
2. `UserList.vue` の `v-for` の中身に、ユーザー名の一覧を表示し、それぞれ `RouterLink` を使用して遷移できるように実装してください。
3. ユーザー名の `RouterLink` をクリックしたら、ユーザーの情報が表示されるように、`router/index.ts` の `/users` のルートにネストされたルーティングとして `UserDetails.vue` を設定してください。
4. `useRoute()` を使用して、`UserDetails.vue` のユーザー ID が、ユーザー毎に切り替わるようにしてください。
5. 「ユーザーリストへ戻る」ボタンが押されたら、「/users」へ遷移するようにしてください。
   s
