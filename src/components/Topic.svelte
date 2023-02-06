<script lang="ts">
    export let title: string;
    export let content: string;
    export let link: string;
    export let pubDate: string;
</script>

<div class="topic-card">
    <div class="topic-header">
        <p class="topic-date">{pubDate}</p>
        <a class="topic-title" href="{link}" target="_blank" rel="noreferrer">{title}</a>
    </div>
    <div class="topic-content">
        <p>{content}</p>
    </div>
</div>

<style>
</style>
