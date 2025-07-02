### vue-practice07 - Todo リスト課題

- このプロジェクトは Vue 3 + TypeScript + Vite を使ったシンプルな Todo リストアプリです。以下の機能を段階的に実装していきます。

## 🚀 Project Setup

npm install

## 🔧 開発用サーバーの起動

npm run dev

## 📦 本番ビルド

npm run build

## 🛠 機能要件

- ✅ 初期表示
- 以下のデータをもとに、Todo リストを画面に表示する：
  [
  { id: 1, title: 'Todo のタイトル 1', completed: true },
  { id: 2, title: 'Todo のタイトル 2', completed: false },
  { id: 3, title: 'Todo のタイトル 3', completed: false }
  ]

## ➕ Todo 追加機能

- 入力欄と「追加」ボタンを表示
- 入力があるときのみ、Todo リストに追加できる
- 空の入力では追加できない

## ✅ 完了ボタン機能

- 各 Todo に「完了」ボタンを設置
- 押すと、タイトルに打ち消し線をつける
- すでに完了済みの場合は無効化する

## ❌ 削除機能

- 各 Todo に「削除」ボタンを設置
- 押すとリストから該当の Todo を削除

## 🎨 スタイル設定

- src/assets/main.css を以下に置き換えてください：
  _,
  _::before,
  \*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

#app {
margin: 64px;
}

## 💡 推奨 IDE 設定

- VSCode + Volar
- ※Vetur は無効化してください。

## 📚 参考リンク

- Vite Configuration Reference
- Vue.js Documentation
