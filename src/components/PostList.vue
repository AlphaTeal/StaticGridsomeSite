<template>
    <div class="post-list">
        <hr>
        <p class="date" v-html="post.date"></p>
        <h1 class="title" v-html="post.title"></h1>
        <p class="description" v-html="post.description"></p>
        <b> {{post.timeToRead}} minute read </b> 
        <g-link :to="post.path" class="read">Read more...</g-link>
    </div>
</template>

<script>
export default {
    props: ["post"],
};
</script>