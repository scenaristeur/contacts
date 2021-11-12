<template>
  <div>
    OFFline
    <p v-if="isOnline">online</p>
    <p v-if="isOffline"><b>OFFLINE</b></p>


    <header>
      <h1>IndexedDB notes demo</h1>
    </header>

    <main>
      <section class="note-display">
        <h2>Notes</h2>
        <ul>

        </ul>
      </section>
      <section class="new-note">
        <h2>Enter a new note</h2>
        <form>
          <div>
            <label for="title">Note title</label>
            <input id="title" type="text" required>
          </div>
          <div>
            <label for="body">Note text</label>
            <input id="body" type="text" required>
          </div>
          <div>
            <button>Create new note</button>
          </div>
        </form>
      </section>
    </main>




  </div>
</template>

<script>
export default {
  name: "OfflineNotes"
}
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  max-width: 800px;
}

header, footer {
  background-color: green;
  color: white;
  line-height: 100px;
  padding: 0 20px;
}

.new-note, .note-display {
  padding: 20px;
}

.new-note {
  background: #ddd;
}

h1 {
  margin: 0;
}

ul {
  list-style-type: none;
}

div {
  margin-bottom: 10px;
}

</style>
