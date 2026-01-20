# COMPOTA

![LOGO](./Stuff/LOGO.png)

## 由来

compositor(動画などの合成をするもの)の響きからcompota(コンポタ)という名前を思いつきました。
スペイン語圏ではコンポートを指すことがわかったので、ロゴには瓶詰めのコンポートを使用しました。(名前を思いついたときにはコーンポタージュにしようと思っていました。)

[英語](README-en.md)

## サービスのページ

[Compota](https://chroma-key-front-1056921343497.asia-northeast2.run.app)

## APIリポジトリ

[Compota API](https://github.com/IamSBStakumi/chroma-key-api)

## このアプリについて

このアプリでは、動画に背景となる画像を合成することができます。
このアプリを使用することで、Webサイト上で簡単に動画の合成を行うことができます。
使用方法はグリーンバックで撮影した動画と背景にしたい画像をアップロードするだけです。

ショート動画をサイトに投稿したいが、背景を合成するためのパソコンや有料の編集ソフトといった機材がないという方に使用していただくことを目的としています。
もちろん、上記に当てはまらない方にも自由に使用していただけます。

データベースを使用していないため、合成に使用する動画や画像を保存することはしていません。

現在、グリーンバックを使用した動画にのみ対応していますが、今後機能を拡張していくことを考えています。

### 動作確認済

#### 動画

- mp4ファイル
  - 約1分程度のグリーンバックにおいて撮影された動画

#### 画像

- pngファイル
- jpegファイル

## 技術スタック

### フロントエンド

![Next.js Badge](https://img.shields.io/badge/Next%2Ejs-000?logo=nextdotjs&logoColor=fff&style=plastic)

![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=plastic)

![styled-components Badge](https://img.shields.io/badge/styled--components-DB7093?logo=styledcomponents&logoColor=fff&style=plastic)

### バックエンド

![Python Badge](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=plastic)

![FastAPI Badge](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=fff&style=plastic)

![OpenCV Badge](https://img.shields.io/badge/OpenCV-5C3EE8?logo=opencv&logoColor=fff&style=plastic)

![NumPy Badge](https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=fff&style=plastic)

### テスト

![Jest Badge](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=plastic)

![Testing Library Badge](https://img.shields.io/badge/Testing%20Library-E33332?logo=testinglibrary&logoColor=fff&style=plastic)

### 環境構築

#### 共通

![Docker Badge](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=plastic)

#### バックエンドのみ

![Poetry Badge](https://img.shields.io/badge/Poetry-60A5FA?logo=poetry&logoColor=fff&style=plastic)

## インフラ

![Google Cloud Badge](https://img.shields.io/badge/Cloud%20Run-4285F4?logo=googlecloud&logoColor=fff&style=plastic)

### linter/formatter

![ESLint Badge](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=plastic)

![Prettier Badge](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=plastic)

![pre-commit Badge](https://img.shields.io/badge/pre--commit-FAB040?logo=precommit&logoColor=fff&style=plastic)

![husky](https://img.shields.io/badge/husky-222222.svg?logo=husky&style=plastic)

![lint-staged](https://img.shields.io/badge/lint--staged-222222.svg?logo=lint-staged&style=plastic)

## スクリーンショット

以下の画面から、動画の合成を行うことができます。

![動画合成ページ](/Stuff/Compositor.png)

以下の画面から、不具合や要望を投稿することができます。

![不具合報告ページ](/Stuff/ReportForm.png)
