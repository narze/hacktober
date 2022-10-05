<script>
  import Atropos from "atropos/svelte"

  export let imagePath
  export let title
  export let description
  export let webUrl
  export let githubUrl
</script>

<div id="app">
  <Atropos innerClass="rounded-2xl">
    <div class="card image-full h-64 w-96 rounded-2xl bg-base-100 shadow-xl">
      <figure class="overflow-hidden">
        {#if imagePath}
          <img class="w-full object-cover" src={imagePath} alt={title} />
        {:else}
          <span class="text-xl font-thin text-neutral-content"
            >Now printing</span
          >
        {/if}
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          {#if webUrl}
            <a
              class="btn btn-outline btn-success btn-sm normal-case"
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer">Website</a
            >
          {/if}
          {#if githubUrl}
            <a
              class="btn btn-outline btn-success btn-sm normal-case"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer">Code</a
            >
          {/if}
        </div>
      </div>
    </div>
  </Atropos>
</div>

<style>
  img {
    object-fit: contain;
  }
</style>
