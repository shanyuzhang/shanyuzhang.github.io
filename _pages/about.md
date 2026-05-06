---
layout: about
title: About
permalink: /
nav: false
nav_order: 0
subtitle:

profile:
  align: left
  image: imagezsy.png
  image_circular: true # crops the image to make it circular
  more_info: >
    <p class="profile-line">🏫 <span class="lang-en">XJTLU</span><span class="lang-cn">西交利物浦大学</span></p>
    <p class="profile-line">📍 <span class="lang-en">Suzhou, China</span><span class="lang-cn">中国苏州</span></p>
    <p class="profile-line">✉️ <a href="mailto:Shanyu.Zhang24@student.xjtlu.edu.cn"><span class="lang-en">Email</span><span class="lang-cn">邮箱</span></a></p>
    <p class="profile-line"><i class="fa-brands fa-github"></i> <a href="https://github.com/shanyuzhang" target="_blank" rel="noopener">GitHub</a></p>
    <p class="profile-line"><i class="fa-brands fa-orcid"></i> <a href="https://orcid.org/0009-0009-6502-9334" target="_blank" rel="noopener">ORCID</a></p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: false # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="lang-en" markdown="1">
I am a second-year undergraduate student at Xi'an Jiaotong-Liverpool University, majoring in Mathematics with Finance, and I am expected to complete my BSc degree at the University of Liverpool in 2028. Feel free to reach out — I'm happy to discuss with people from different backgrounds.

My research interests span machine learning and its applications in economics and quantitative finance. I am also broadly curious about AI itself — how large language models and AI coding assistants work, and what they make possible. In my spare time, I build small AI applications and use tools like Claude Code and Codex for vibe coding and rapid prototyping.
</div>

<div class="lang-cn" markdown="1">
我是西交利物浦大学金融数学专业的大二本科生，预计 2028 年在利物浦大学完成数学与金融方向的理学学士学位。欢迎来信交流——我很乐意与来自不同背景的朋友讨论。

我的研究兴趣涉及机器学习及其在经济学和量化金融中的应用。我也对 AI 本身充满好奇——大型语言模型和 AI 编程助手的工作原理，以及它们能带来什么可能性。业余时间，我会构建一些小型 AI 应用，并使用 Claude Code、Codex 等工具进行 vibe coding 和快速原型开发。
</div>

{% capture cv_exists %}{% file_exists assets/pdf/CV.pdf %}{% endcapture %}
{% if cv_exists == "true" %}
  <p class="mt-3">
    <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/CV.pdf' | relative_url }}">
      <span class="lang-en">Download CV</span><span class="lang-cn">下载简历</span>
    </a>
  </p>
{% endif %}

<section class="about-section">
  <h2 id="news">🔥 <span class="lang-en">News</span><span class="lang-cn">动态</span></h2>
  <div class="news-card">
    <ul class="news-list">
      <li>
        <strong><span class="lang-en">Apr 2026</span><span class="lang-cn">2026 年 4 月</span></strong> &nbsp;·&nbsp;
        <span class="lang-en">Our paper <em>"Example Selection for In-Context Learning via Conditional Mutual Information"</em> has been accepted for <strong>oral presentation</strong> at <strong>ICIC 2026</strong>.</span>
        <span class="lang-cn">我们的论文 <em>"Example Selection for In-Context Learning via Conditional Mutual Information"</em> 已被 <strong>ICIC 2026</strong> 接收为<strong>口头报告</strong>。</span>
        <span class="badge badge-accent"><span class="lang-en">Oral</span><span class="lang-cn">口头报告</span></span>
      </li>
      <li>
        <strong><span class="lang-en">Mar 2026</span><span class="lang-cn">2026 年 3 月</span></strong> &nbsp;·&nbsp;
        <span class="lang-en">I will present our paper <em>"Geopolitics and Corporate Alliances: Evidence from US-China Trade War"</em> at the <strong>13th CAPE Conference</strong> in Suzhou, China.</span>
        <span class="lang-cn">我将在<strong>第 13 届 CAPE 会议</strong>（中国苏州）报告我们的论文 <em>"Geopolitics and Corporate Alliances: Evidence from US-China Trade War"</em>。</span>
      </li>
    </ul>
  </div>
</section>

<section class="about-section">
  <h2 id="publications">📄 <span class="lang-en">Publications</span><span class="lang-cn">论文发表</span></h2>
  <ol class="publication-list">
    <li>
      <strong>Example Selection for In-Context Learning via Conditional Mutual Information.</strong><br>
      <span class="pub-authors"><u>Shanyu Zhang</u>, Di Zhang.</span><br>
      <span class="pub-venue">
        <span class="lang-en">International Conference on Intelligent Computing (ICIC), 2026.</span>
        <span class="lang-cn">国际智能计算大会（ICIC），2026。</span>
      </span>
      <span class="badge badge-accent"><span class="lang-en">Oral</span><span class="lang-cn">口头报告</span></span>
      <span class="badge badge-muted"><span class="lang-en">Accepted, to appear</span><span class="lang-cn">已接收，待发表</span></span>
    </li>
  </ol>
  <div class="publications">
  {% bibliography %}
  </div>
</section>

<section class="about-section">
  <h2 id="conference-presentations">🎤 <span class="lang-en">Conference Presentations</span><span class="lang-cn">会议报告</span></h2>
  <ol class="publication-list">
    <li>
      <strong>Geopolitics and Corporate Alliances: Evidence from US-China Trade War.</strong><br>
      <span class="pub-authors">Bozhen Liu, Bo Jiang, <u>Shanyu Zhang</u>, Xiaoqi Zhang.</span><br>
      <span class="pub-venue">
        <span class="lang-en">13th CAPE Conference, Suzhou, China, 2026.</span>
        <span class="lang-cn">第 13 届 CAPE 会议，中国苏州，2026。</span>
      </span>
      <span class="badge badge-accent"><span class="lang-en">Upcoming</span><span class="lang-cn">即将进行</span></span>
    </li>
  </ol>
</section>

<section class="about-section">
  <h2 id="education">📖 <span class="lang-en">Education</span><span class="lang-cn">教育经历</span></h2>
  <ul>
    <li>
      <em>2024.09 &ndash; 2026.06</em>,
      <span class="lang-en"><strong>Xi'an Jiaotong-Liverpool University</strong>, BSc Financial Mathematics.</span>
      <span class="lang-cn"><strong>西交利物浦大学</strong>，金融数学 学士。</span>
    </li>
    <li>
      <em>2026.09 &ndash; 2028.06 <span class="lang-en">(Expected)</span><span class="lang-cn">（预计）</span></em>,
      <span class="lang-en"><strong>University of Liverpool</strong>, BSc Mathematics with Finance.</span>
      <span class="lang-cn"><strong>利物浦大学</strong>，数学与金融 学士。</span>
    </li>
  </ul>
</section>

<section class="about-section">
  <h2 id="interests">🎯 <span class="lang-en">Interests</span><span class="lang-cn">兴趣</span></h2>
  <p>
    <span class="lang-en">Outside coursework and research exploration, I enjoy building small applications with AI coding tools and discussing new ideas with people from different backgrounds.</span>
    <span class="lang-cn">课业和科研之外，我喜欢用 AI 编程工具搭建小应用，也喜欢和来自不同背景的朋友交流新想法。</span>
  </p>
</section>
