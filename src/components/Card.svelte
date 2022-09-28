<script>
  import Atropos from "atropos/svelte"
</script>

<div id="app">
  <Atropos innerClass="rounded-2xl">
    <div class="card image-full w-96 rounded-2xl bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/watasalim.png"
          alt="Watasalim"
          width={500}
          fit="cover"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Watasalim</h2>
        <p>รวบรวมวาทกรรมสลิ่มสุดเจ๋ง</p>
        <div class="card-actions justify-end">
          <a
            class="btn btn-outline btn-sm normal-case"
            href="https://watasalim.vercel.app"
            target="_blank"
            rel="noopener noreferrer">Website</a
          >
          <a
            class="btn btn-outline btn-sm normal-case"
            href="https://github.com/narze/awesome-salim-quotes"
            target="_blank"
            rel="noopener noreferrer">Code</a
          >
        </div>
      </div>
    </div>
  </Atropos>
</div>
