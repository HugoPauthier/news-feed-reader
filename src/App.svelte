<script lang="ts">
  import Topic from "./components/Topic.svelte";
  import Header from "./components/Header.svelte";
  import { onMount } from "svelte";

  let newsFeed = [];
  $: console.log(newsFeed);

  onMount(async () => {
    const response = await fetch(`http://localhost:9999/.netlify/functions/readRssFeed`);
    newsFeed = await response.json();
  });

  function formatDate(pubDate:string) {
    const date = new Date(pubDate);
    const day = date.getDay().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hh = date.getHours().toString().padStart(2, '0');
    const mm = date.getMinutes().toString().padStart(2, '0');
    const displayDate = `${day}/${month}/${year} ${hh}:${mm}`
    return displayDate;
  }

</script>

<Header></Header>

<main class="">
  <div class="feed-container">
      {#each newsFeed as topic, i}
      <Topic title={topic.title} content={topic.content} link={topic.link} pubDate={formatDate(topic.pubDate)}/>
      {/each}
  </div>
</main>

<style>
</style>
