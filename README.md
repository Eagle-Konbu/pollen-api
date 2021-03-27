# 概要
花粉情報を取得するAPI。Serverless frameworkを用いて、AWS Lambdaにデプロイして使用する。

# 環境構築
APIキーを用いてアクセス制御を行うため、serverless-add-api-keyを追加する。

```bash
$ yarn global add serverless
$ yarn add serverless-add-api-key
```

# デプロイ
```bash
$ sls deploy -v
```