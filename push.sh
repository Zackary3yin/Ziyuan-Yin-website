#!/bin/bash
# 一键提交并推送到 GitHub（更新网站用）
# 用法：./push.sh
# 或：  ./push.sh "你这次的修改说明"

cd "$(dirname "$0")"
MSG="${1:-Update site}"
git add .
git status
echo "---"
echo "Commit message: $MSG"
read -p "Press Enter to commit & push, or Ctrl+C to cancel..."
git commit -m "$MSG"
git push
echo "Done. 等 1～2 分钟刷新 https://zackary3yin.github.io/Ziyuan-Yin-website/ 查看更新。"
