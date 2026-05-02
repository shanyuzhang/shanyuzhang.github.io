---
layout: about
title: About
permalink: /
nav: true
nav_order: 0
subtitle: Financial Mathematics undergraduate at Xi'an Jiaotong-Liverpool University

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Xi'an Jiaotong-Liverpool University</p>
    <p>Suzhou, China</p>
    <p><a href="mailto:Shanyu.Zhang24@student.xjtlu.edu.cn">Shanyu.Zhang24@student.xjtlu.edu.cn</a></p>

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

我是西安交通利物浦大学金融数学专业的大二本科生，预计 2028 年在利物浦大学完成理学学士学位。

我的研究兴趣集中在机器学习与 AI 方法在金融、经济学中的应用，同时也关注 AI 工具本身，尤其是 AI agent 与编程助手的能力边界。作为本科生，我仍在主动探索自己最想深入的方向，因此兴趣覆盖从理论到应用的不同层面。我也在频繁使用 Claude Code、Codex 等 AI 编程工具进行研究原型开发和小型应用构建，这本身也是我感兴趣的一个方向。具体进展可以参考下方的 Working Papers。

如果你对我的工作感兴趣，或者愿意就上述任何话题交流，欢迎随时联系我。

{% capture cv_exists %}{% file_exists assets/pdf/CV.pdf %}{% endcapture %}
{% if cv_exists == "true" %}
  <p class="mt-3">
    <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/CV.pdf' | relative_url }}">Download CV</a>
  </p>
{% endif %}

<h2 id="news">News</h2>

{% assign news_items = site.news | sort: "date" | reverse %}
{% if news_items.size > 0 %}
  <ul>
    {% for item in news_items limit: 5 %}
      <li>
        <strong>{{ item.date | date: "%b %-d, %Y" }}</strong>:
        {% if item.inline %}
          {{ item.content | strip_html | strip }}
        {% else %}
          <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>News updates will be added here.</p>
{% endif %}

<h2 id="publications">Publications</h2>

<p>No peer-reviewed publications yet. Updates will be added here.</p>

<div class="publications">
{% bibliography %}
</div>

<h2 id="working-papers">Working Papers</h2>

<ul>
  <li><strong>AI Programming Assistants for Research Prototyping.</strong> Early-stage notes on using tools such as Claude Code and Codex for small research prototypes and academic software workflows.</li>
  <li><strong>Machine Learning Methods in Finance and Economics.</strong> Exploratory reading and prototype work on applied machine learning for financial and economic problems.</li>
</ul>

<h2 id="projects">Projects</h2>

{% assign sorted_projects = site.projects | sort: "importance" %}
{% if sorted_projects.size > 0 %}
  <div class="projects">
    <div class="row row-cols-1 row-cols-md-2">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  </div>
{% else %}
  <p>Projects will be added here.</p>
{% endif %}

<h2 id="education">Education</h2>

<ul>
  <li><strong>Xi'an Jiaotong-Liverpool University</strong>, BSc Financial Mathematics, September 2024 - June 2026.</li>
  <li><strong>University of Liverpool</strong>, BSc Mathematics with Finance, September 2026 - June 2028 (expected).</li>
</ul>

<h2 id="awards">Honors & Awards</h2>

<p>Honors, awards, and internships will be added here.</p>

<h2 id="interests">Interests</h2>

<p>Outside coursework and research exploration, I enjoy building small applications with AI coding tools and discussing new ideas with people from different backgrounds.</p>
