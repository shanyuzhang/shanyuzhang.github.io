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
    <p class="profile-line">🏫 <span class="lang-en">University of Liverpool</span><span class="lang-cn">利物浦大学</span></p>
    <p class="profile-line">📍 <span class="lang-en">Liverpool, UK</span><span class="lang-cn">英国利物浦</span></p>
    <p class="profile-line">✉️ <a href="mailto:sgszha59@liverpool.ac.uk"><span class="lang-en">Email</span><span class="lang-cn">邮箱</span></a></p>
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
I build and evaluate learning systems for reasoning and decision-making. I am a third-year undergraduate at the University of Liverpool, reading Mathematics with Finance, with my BSc expected in 2028.

My interests centre on large language model agents and the systems built around them — how such systems use context and tools, and how their behaviour should be measured. I care about evaluation as much as modelling: what a benchmark actually measures, and which results survive a change of setup. I am also interested in machine learning applied to economics and quantitative finance.

Feel free to reach out — I'm happy to discuss with people from different backgrounds.
</div>

<div class="lang-cn" markdown="1">
我构建并评测面向推理与决策的学习系统。我是利物浦大学数学与金融专业的大三本科生，预计 2028 年获得理学学士学位。

我的兴趣集中在大型语言模型智能体，以及围绕它们构建的系统——这类系统如何使用上下文与工具，它们的行为又该如何被衡量。相比建模，我同样看重评测：一个基准究竟测的是什么，哪些结论换一套实验设置后仍然成立。我也关注机器学习在经济学和量化金融中的应用。

欢迎来信交流——我很乐意与来自不同背景的朋友讨论。
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
        <strong><span class="lang-en">Jul 2026</span><span class="lang-cn">2026 年 7 月</span></strong> &nbsp;·&nbsp;
        <span class="lang-en">Presented our paper <em>"Example Selection for In-Context Learning via Conditional Mutual Information"</em> at <strong>ICIC 2026</strong>.</span>
        <span class="lang-cn">在 <strong>ICIC 2026</strong> 报告了我们的论文 <em>"Example Selection for In-Context Learning via Conditional Mutual Information"</em>。</span>
        <span class="badge badge-accent"><span class="lang-en">Oral</span><span class="lang-cn">口头报告</span></span>
      </li>
      <li>
        <strong><span class="lang-en">Jun 2026</span><span class="lang-cn">2026 年 6 月</span></strong> &nbsp;·&nbsp;
        <span class="lang-en">Awarded the <strong>XJTLU Summer Undergraduate Research Fellowship (SURF)</strong> funding.</span>
        <span class="lang-cn">获得<strong>西交利物浦大学暑期本科生研究基金（SURF）</strong>资助。</span>
      </li>
      <li>
        <strong><span class="lang-en">May 2026</span><span class="lang-cn">2026 年 5 月</span></strong> &nbsp;·&nbsp;
        <span class="lang-en">Presented our paper <em>"Geopolitics and Corporate Alliances: Evidence from US-China Trade War"</em> at the <strong>13th CAPE Conference</strong> in Suzhou, China.</span>
        <span class="lang-cn">在<strong>第 13 届 CAPE 会议</strong>（中国苏州）报告了我们的论文 <em>"Geopolitics and Corporate Alliances: Evidence from US-China Trade War"</em>。</span>
      </li>
      <li>
        <strong><span class="lang-en">Jun 2025</span><span class="lang-cn">2025 年 6 月</span></strong> &nbsp;·&nbsp;
        <span class="lang-en">Awarded the <strong>XJTLU Summer Undergraduate Research Fellowship (SURF)</strong> funding.</span>
        <span class="lang-cn">获得<strong>西交利物浦大学暑期本科生研究基金（SURF）</strong>资助。</span>
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
      <span class="badge badge-muted"><span class="lang-en">Presented</span><span class="lang-cn">已报告</span></span>
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
      <span class="badge badge-accent"><span class="lang-en">Presented</span><span class="lang-cn">已报告</span></span>
    </li>
  </ol>
</section>

<section class="about-section">
  <h2 id="education">📖 <span class="lang-en">Education</span><span class="lang-cn">教育经历</span></h2>
  <ul>
    <li>
      <em>2024.09 &ndash; 2028.06 <span class="lang-en">(Expected)</span><span class="lang-cn">（预计）</span></em>,
      <span class="lang-en"><strong>University of Liverpool</strong>, BSc Mathematics with Finance. GPA: 3.83/4.0.</span>
      <span class="lang-cn"><strong>利物浦大学</strong>，数学与金融 学士。GPA：3.83/4.0。</span>
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
