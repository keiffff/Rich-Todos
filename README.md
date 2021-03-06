# Rich-Todos

## 使い方

| タスク一覧画面                                                                                                                                 | タスク新規追加画面                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![スクリーンショット 2020-01-04 5 06 04](https://user-images.githubusercontent.com/46975885/71746584-a1174500-2eb0-11ea-83bb-db3773512fb3.png) | ![スクリーンショット 2020-01-04 5 06 30](https://user-images.githubusercontent.com/46975885/71746613-b12f2480-2eb0-11ea-8e26-dc0bc8940ceb.png) |

| タスク詳細画面                                                                                                                                 | タスク一括削除画面                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![スクリーンショット 2020-01-04 5 06 54](https://user-images.githubusercontent.com/46975885/71746702-f81d1a00-2eb0-11ea-9e7f-4d3eb8a8106a.png) | ![スクリーンショット 2020-01-04 5 06 40](https://user-images.githubusercontent.com/46975885/71746689-eb002b00-2eb0-11ea-86b5-6215afaabead.png) |

ドラッグ & ドロップによるタスクのステータス更新機能

![64177595-8d89-8d28-16f6-cb1e161e1f44](https://user-images.githubusercontent.com/46975885/71746814-4f22ef00-2eb1-11ea-912c-8801ae913f81.gif)

- タスク一覧画面からステータスごとにタスクの進捗を管理できます。
  - タスクをドラッグ & ドロップして別のレーンに移動させると、タスクのステータスを更新できます。
- タスク新規作成画面から新規のタスクを追加できます。
  - 追加されたタスクは、タスク一覧画面の、指定されたステータスのレーンに追加されます。
  - タスクには、「ラベル」を付与することで、タスクをグルーピングできます。
- タスク一括削除画面からタスクを削除できます。
  - 指定したタスクの一括削除、あるステータスに含まれるタスクの一括削除に対応しています。

## 使用技術

- TypeScript (v 3.6.4)
- React
- Material-UI (デザイン用フレームワーク)
- Emotion (CSS in JS)
- Storybook (コンポーネント用スタイルガイド)
- Jest (ビジュアルリグレッションテスト)
- Cloud Firestore (NoSQL データベース)
- Firebase Hosting (ホスティング)

## URL

以下からアクセスできます。 (\* PC 推奨)

https://rich-todos-2d9da.firebaseapp.com/
