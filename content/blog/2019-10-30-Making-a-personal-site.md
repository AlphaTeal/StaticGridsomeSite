---
title: Making a personal site
description: "Outlining how I made this website and my plans moving forward"
date: 2019-10-30
---

As a young web developer/software engineer/student/generalist developer, I figured it might be beneficial to have some sort of personal website. This site could serve several purposes: a technical portfolio to showcase my work to other developers and potential employers, a sandbox for me to play around with cool new web technologies and have fun, and as a way for just about anybody in the world to get to know me just a little bit better.

The previous two sentences give the impression that this website and myself are a *little bit* aimless. Which I suppose is true. But I'm hoping that I will narrow down my aim with time. I'm still in graduate school for computer science, hence why I'm initially reluctant to give myself just one title. In my relatively limited work experience, I've come to enjoy web development, yet I'm afraid of committing too hard to that one particular field before I've even graduated from school. And, just like my area of expertise, I'm hoping that the aim of this website will become more clear with time. I'm sure I'll spend more time developing it towards one goal or another as time goes on.

Anyways, that was a bit rambly so let's just get into it!

## Gridsome

This site went through many iterations and restarts before I even settled on the technology stack to use for it. At first I tried writing raw HTML, CSS, and JS and just hosting those files on a spare PC that I set up as a Linux server in my basement. While this gave me maximum control over my technology stack and my content, it didn't necessarily give me the fastest or best looking site, or give me the best developer experience. 🤢

Then I tried static site generation using [Nuxt.js](https://nuxtjs.org/), which was a step in the right direction but I believe Nuxt to be a little bit too powerful for just what I needed.

Finally I settled on [Gridsome](https://gridsome.org/), which so far has been the "Mama Bear" of the tech stacks I've tried. It's given me much more power than just raw files, while still not being too powerful or complex.

Oh yeah, and I moved my deployment to [Netlify](https://www.netlify.com/) as well. It seems like the hip thing to do nowadays. But I do appreciate the ease and simplicity they provide. They're likely doing a better job than I am at server security and CDN delivery.

### What is Gridsome, anyways?

![Gridsome logo](https://gridsome.org/logos/logo-normal.svg)

Gridsome is a *static site generator*. You may be familiar with the terms *static* vs *dynamic*. The content delivered to the user visiting my website will be the same, regardless of who that user is. That's *static*. Which means that my website can be nothing more than HTML, CSS, and JS files that don't change after build time, and I don't need any fancy schmancy web server to handle routing, so I can host it using GitHub Pages or Netlify or similar. 

There are **hundreds** of options for static site generators are out there, and there are so many different reasons for choosing one or the other that it would take *dozens* of blog posts just to cover them all. What makes Gridsome unique in particular is that it uses [Vue.js](https://vuejs.org/) for the frontend and [GraphQL](https://graphql.org/) for the data layer. More information can be found on the [Gridsome website](https://gridsome.org/docs/)

### Why Gridsome?

Why did I choose Gridsome? Earlier I mentioned that I tried using Nuxt.js to build this site. Nuxt.js and Gridsome have at least one thing in common: they use Vue.js for the frontend. My main concern recently has been trying to learn Vue.js. It is recommended or necessary for several of the job postings I've been browsing, and I like the growing and supportive community around the project. I prefer Vue over React because React is owned and maintained by Facebook, and Facebook is going to have very different problems than I am going to have. Plus, the Vue.js version codenames are pretty much all anime titles, and I'm a big weeb. 🗾💢

<table class="wikitable"><tbody><tr>
<th>Version</th>
<th>Release date</th>
<th>Title
</th></tr>
<tr>
<td>2.6</td>
<td>2019 Feb 4</td>
<td>Macross
</td></tr>
<tr>
<td>2.5</td>
<td>2017 Oct 13</td>
<td>Level E
</td></tr>
<tr>
<td>2.4</td>
<td>2017 Jul 13</td>
<td>Kill la Kill
</td></tr>
<tr>
<td>2.3</td>
<td>2017 Apr 27</td>
<td>JoJo's Bizarre Adventure
</td></tr>
<tr>
<td>2.2</td>
<td>2017 Feb 26</td>
<td>Initial D
</td></tr>
<tr>
<td>2.1</td>
<td>2016 Nov 22</td>
<td>Hunter X Hunter
</td></tr>
<tr>
<td>2.0</td>
<td>2016 Sep 30</td>
<td>Ghost in the Shell
</td></tr>
<tr>
<td>1.0</td>
<td>2015 Oct 27</td>
<td>Evangelion
</td></tr>
<tr>
<td>0.12</td>
<td>2015 Jun 12</td>
<td>Dragon Ball
</td></tr>
<tr>
<td>0.11</td>
<td>2014 Nov 7</td>
<td>Cowboy Bebop
</td></tr>
<tr>
<td>0.10</td>
<td>2014 Mar 23</td>
<td>Blade Runner
</td></tr>
<tr>
<td>0.9</td>
<td>2014 Feb 25</td>
<td>Animatrix
</td></tr>
<tr>
<td>0.8</td>
<td>2014 Jan 27</td>
<td>-
</td></tr>
<tr>
<td>0.7</td>
<td>2013 Dec 24</td>
<td>-
</td></tr>
<tr>
<td>0.6</td>
<td>2013 Dec 8</td>
<td>VueJS
</td></tr></tbody></table>

### Making the site 💻

First of all, the source code for this website is available in its entirety [here on my GitHub](https://github.com/AlphaTeal/StaticGridsomeSite), so that would be the best place to investigate the innards of the most recent version of this site. I haven't gotten around to adding a LICENSE file so I'm not sure if it technically counts as Open Source, but I'll get around to that. 

Secondly, I utilized [this blog post](https://www.telerik.com/blogs/building-a-blog-with-vue-and-markdown-using-gridsome) to help me get this site up and running quickly. It's a nice resource that's certainly more concise than this blog post is, so go check it out!

Getting a boilerplate Gridsome project up and running is ridiculously easy. It took me four simple commands:

```bash
$ yarn global add @gridsome/cli
$ gridsome create StaticGridsomeSite
$ cd StaticGridsomeSite
$ gridsome develop
```

and Bob's your uncle! Open a browser and navigate to `localhost:8080` and you'll be greeted with the following boilerplate landing page: 

![Gridsome landing page](/img/gridsome-boilerplate-screenshot.png)

Now, at this point I'm sure you'll notice that I haven't modified the boilerplate project too much for my website. That's because it's pretty new, and I do plan on using what little time I have between working full time and taking master's classes to improve this site.

### Making it my own ✏

The `yarn create ...` command generates a complete project with all the directories and files necessary for you to create a fully-fledged static site. Each directory even has a `README.md` file with more information on what it's for. I won't go into detail about each one, as that's not necessarily the scope of this blog post. Rather, I'd direct you to the other blog post I referenced earlier or the [Gridsome docs](https://gridsome.org/docs/). 

What was very useful for me was:

1. The `/src/layouts/` directory. Here is defined a `Default.vue` file containing the layout definition for every page on your site. Here is where I created the header and footer of the site.
2. The `/src/layouts/pages` directory. Here are `.vue` files that define every page on the site. Main, Contact, Blog, and About in my case.
3. The `/src/templates` directory contains the template file for every blog post here.

![Project directory structure](/img/project-directory.png)

It would be long-winded and again outside the scope of this post to go through every file and the changes I made, so I again invite you dear reader to investigate my [GitHub repo](https://github.com/AlphaTeal/StaticGridsomeSite) to see this site's behind-the-scenes for yourself.

### Cosmic Latte 🌌

This is small and insignificant and dumb but I'm unnecessarily excited about it so I made an entire section dedicated to it.

One of the only style changes I've made to this site so far is I've made the background color [Cosmic Latte](https://en.wikipedia.org/wiki/Cosmic_latte).

> **Cosmic latte** is a name assigned to the average color of the [universe](https://en.wikipedia.org/wiki/Universe), found by a team of [astronomers](https://en.wikipedia.org/wiki/Astronomers) from [Johns Hopkins University](https://en.wikipedia.org/wiki/Johns_Hopkins_University).

It's very close to white, but off just enough that you can tell if you scroll back up to that website boilerplate screenshot and look closely. You might need to look at your monitor at an angle, even.

### What's next? 🕑

I have many plans for the future of this website, including but not limited to:

- [ ] Improve Markdown rendering
- [ ] Add a better 404 page
- [ ] Figure out how to cross-post blog posts on [Dev](https://dev.to)
- [ ] Improve design with better stylesheets
- [ ] Write more blog posts
- [ ] Make a dark mode/light mode switch
- [ ] Add a "Resume" page listing notable work experience and projects