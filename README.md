# 尹梓源 · Ziyuan Yin 个人网站

本仓库为尹梓源 (Ziyuan Yin) 的简单个人网站，基于简历 (CV) 与 Statement of Purpose (SOP) 搭建。

## 本地预览

用浏览器直接打开项目根目录下的 `index.html`，或使用本地服务器：

```bash
# Python 3
python3 -m http.server 8000

# 或 npx
npx serve .
```

然后访问 http://localhost:8000

## 部署到网上（便于分享链接与 Google 搜索）

### 推荐：GitHub Pages（免费、可被 Google 收录）

1. 将本仓库推送到你的 GitHub 账号下（若尚未推送）。
2. 在 GitHub 仓库中：**Settings → Pages**。
3. **Source** 选择 **Deploy from a branch**。
4. **Branch** 选 `main`，文件夹选 **/ (root)**，保存。
5. 几分钟后，网站地址为：`https://<你的用户名>.github.io/Ziyuan-Yin-website/`

### 部署后需要改的一处

在 `index.html` 里找到这一行：

```html
<link rel="canonical" href="https://your-username.github.io/Ziyuan-Yin-website/">
```

把 `your-username` 换成你的 GitHub 用户名，这样有利于搜索引擎正确收录你的正式网址。

## 被 Google 搜索到

- 部署到 GitHub Pages 后，把**最终网站链接**发给别人、写在邮件签名或简历里，被引用越多越容易被收录。
- 可到 [Google Search Console](https://search.google.com/search-console) 添加你的网站并提交 sitemap（若后续增加多页，可再考虑 sitemap）。
- 当前页面已包含基础 SEO：`title`、`description`、`keywords`、`og:` 等，有利于链接分享和搜索展示。

## 页面上线 + 之后持续修改

### 第一次上线（GitHub Pages）

1. **把当前修改推送到 GitHub**（见下方「把修改推到 repo」）。
2. 打开仓库：<https://github.com/Zackary3yin/Ziyuan-Yin-website>
3. 点 **Settings** → 左侧 **Pages**
4. **Source** 选 **Deploy from a branch**
5. **Branch** 选 `main`，**Folder** 选 **/ (root)**，点 **Save**
6. 等一两分钟，网站地址为：**https://zackary3yin.github.io/Ziyuan-Yin-website/**

### 之后每次修改

1. 在本地改 `index.html`、`styles.css` 或其它文件
2. 在项目目录执行：
   ```bash
   git add .
   git commit -m "简短说明你改了什么"
   git push
   ```
3. 推送后 GitHub Pages 会自动重新部署，几分钟后刷新你的网站链接即可看到更新。

### 建议改一处 SEO

上线后把 `index.html` 里的 canonical 改成你的真实网址（把 `your-username` 换成 `zackary3yin`）：

```html
<link rel="canonical" href="https://zackary3yin.github.io/Ziyuan-Yin-website/">
```

## 把修改推到 repo（当前未提交的修改）

在项目根目录执行：

```bash
cd /Users/yinziyuan/Desktop/Ziyuan-Yin-website

# 添加所有要提交的文件
git add index.html styles.css README.md "Ziyuan Yin resume  2025.pdf" "PS-ziyuan Columbia.pdf" WechatIMG144891.jpg

# 提交（说明可自己改）
git commit -m "Personal site: About, Research, News, avatar, social links, lab link"

# 推到 GitHub
git push
```

若使用 `git add .` 会包含当前目录下所有未忽略文件；若不想提交 PDF/图片，就不要 add 它们，或先把它们加入 `.gitignore`。

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 网站主页面，可在此编辑文案与结构 |
| `styles.css` | 样式表 |
| `Ziyuan Yin resume  2025.pdf` | 简历 |
| `PS-ziyuan Columbia.pdf` | Columbia SOP |

修改 `index.html` 和 `styles.css` 后，提交并推送到 GitHub，Pages 会自动更新。
