# 使用するベースイメージを指定
FROM node:20.9
ENV TZ Asia/Tokyo

WORKDIR /node

# プロジェクトの依存関係をインストール
COPY nuxt_pj/package*.json ./
RUN npm install

# プロジェクトファイルをコピー
COPY nuxt_pj/. .

# ポート番号を公開
#EXPOSE 3000
ENV HOST 0.0.0.0

# 開発モードでアプリケーションを起動
CMD ["npm", "run", "dev"]

