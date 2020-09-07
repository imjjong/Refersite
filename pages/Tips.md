---
layout: page
menu: true
date: "2019-12-30 01:01:0"
title: Tips
permalink: /Front_page/
description: Some description.
---

<head>
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
</head>

### {{ page.title }}

<ul>
  {% assign posts = site.canvas | where_exp:"post","post.is_generated != true" %} 
  {% for post in posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    <img class="img" data-aos="fade-in"  data-aos-delay="1000" href="{{ post.url }}" src="{{ post.image }}" width="30%">
  {% endfor %}
</ul>

how to use jekyll building

1. sudo gulp
2. sudo bundle exec jekyll serve 2>/dev/null

blocking Html form post
published: true
