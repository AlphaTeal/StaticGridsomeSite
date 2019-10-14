<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      <hr>
      <a href="https://twitter.com/joeygoredev/">My Twitter</a>
      <a href="https://github.com/AlphaTeal/">My GitHub</a>
      <a href="https://dev.to/joeygoredev/">My DEV.to</a>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #fff8e7;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.footer a {
  margin-right: 1rem;
}

.nav__link {
  margin-left: 20px;
}
</style>
