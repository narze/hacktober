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
    <div class="card image-full w-96 rounded-2xl bg-base-100 shadow-xl">
      <figure class="overflow-hidden">
        <img src={imagePath} alt={title} width={500} fit="cover" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <a
            class="btn btn-outline btn-sm normal-case"
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer">Website</a
          >
          <a
            class="btn btn-outline btn-sm normal-case"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer">Code</a
          >
        </div>
      </div>
    </div>
  </Atropos>
</div>

<style>
  .overflow-hidden {
    overflow: hidden;
  }
</style>
