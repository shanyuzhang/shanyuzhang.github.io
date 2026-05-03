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
    <p class="profile-line">🏫 XJTLU</p>
    <p class="profile-line">📍 Suzhou, China</p>
    <p class="profile-line">✉️ <a href="mailto:Shanyu.Zhang24@student.xjtlu.edu.cn">Email</a></p>
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

I am a second-year undergraduate student at Xi'an Jiaotong-Liverpool University, majoring in Mathematics with Finance, and I am expected to complete my BSc degree at the University of Liverpool in 2028. Feel free to reach out — I'm happy to discuss with people from different backgrounds.

My research interests span machine learning and its applications in economics and quantitative finance. I am also broadly curious about AI itself — how large language models and AI coding assistants work, and what they make possible. In my spare time, I build small AI applications and use tools like Claude Code and Codex for vibe coding and rapid prototyping.

{% capture cv_exists %}{% file_exists assets/pdf/CV.pdf %}{% endcapture %}
{% if cv_exists == "true" %}
  <p class="mt-3">
    <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/CV.pdf' | relative_url }}">Download CV</a>
  </p>
{% endif %}

<section class="about-section">
  <h2 id="news">🔥 News</h2>
  <div class="news-card">
    <ul class="news-list">
      <li><strong>Apr 2026</strong> &nbsp;·&nbsp; Our paper <em>"Example Selection for In-Context Learning via Conditional Mutual Information"</em> has been accepted for <strong>oral presentation</strong> at <strong>ICIC 2026</strong>. <span class="badge badge-accent">Oral</span></li>
      <li><strong>Mar 2026</strong> &nbsp;·&nbsp; I will present our paper <em>"Geopolitics and Corporate Alliances: Evidence from US-China Trade War"</em> at the <strong>13th CAPE Conference</strong> in Suzhou, China.</li>
    </ul>
  </div>
</section>

<section class="about-section">
  <h2 id="publications">📄 Publications</h2>
  <ol class="publication-list">
    <li>
      <strong>Example Selection for In-Context Learning via Conditional Mutual Information.</strong><br>
      <span class="pub-authors"><u>Shanyu Zhang</u>, Di Zhang.</span><br>
      <span class="pub-venue">International Conference on Intelligent Computing (ICIC), 2026.</span>
      <span class="badge badge-accent">Oral</span>
      <span class="badge badge-muted">Accepted, to appear</span>
    </li>
  </ol>
  <div class="publications">
  {% bibliography %}
  </div>
</section>

<section class="about-section">
  <h2 id="conference-presentations">🎤 Conference Presentations</h2>
  <ol class="publication-list">
    <li>
      <strong>Geopolitics and Corporate Alliances: Evidence from US-China Trade War.</strong><br>
      <span class="pub-authors">Bozhen Liu, Bo Jiang, <u>Shanyu Zhang</u>, Xiaoqi Zhang.</span><br>
      <span class="pub-venue">13th CAPE Conference, Suzhou, China, 2026.</span>
      <span class="badge badge-accent">Upcoming</span>
    </li>
  </ol>
</section>

<section class="about-section">
  <h2 id="education">📖 Education</h2>
  <ul>
    <li><em>2024.09 &ndash; 2026.06</em>, <strong>Xi'an Jiaotong-Liverpool University</strong>, BSc Financial Mathematics.</li>
    <li><em>2026.09 &ndash; 2028.06 (Expected)</em>, <strong>University of Liverpool</strong>, BSc Mathematics with Finance.</li>
  </ul>
</section>

<section class="about-section">
  <h2 id="interests">🎯 Interests</h2>
  <p>Outside coursework and research exploration, I enjoy building small applications with AI coding tools and discussing new ideas with people from different backgrounds.</p>
</section>
