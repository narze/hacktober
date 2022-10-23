<script lang="ts">
  export let value = "";

  const onChangeValue = (e: Event) => {
    value = (e.target as HTMLInputElement).value;
  };
</script>

<input
  type="text"
  class="input w-full"
  placeholder="Search by founder, topic, project"
  {value}
  on:input={onChangeValue}
/>
