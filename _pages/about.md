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
    <p><a href="mailto:Shanyu.Zhang24@student.xjtlu.edu.cn">Email</a></p>

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

I am a second-year undergraduate student in Financial Mathematics at Xi'an Jiaotong-Liverpool University. I expect to complete my BSc in Mathematics with Finance at the University of Liverpool in 2028.

My current interests center on machine learning and AI methods for finance and economics. I am also interested in AI tools themselves, especially the practical boundaries of AI agents and programming assistants. As an undergraduate, I am still actively exploring the questions I want to pursue most deeply, so my interests span both theoretical and applied directions.

I frequently use tools such as Claude Code and Codex to build research prototypes and small applications. This workflow is also part of what I am studying: how AI-assisted programming changes the pace, quality, and scope of early-stage research. Some early directions are listed below under Working Papers.

If you are interested in my work or would like to discuss any of these topics, please feel free to get in touch.

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
