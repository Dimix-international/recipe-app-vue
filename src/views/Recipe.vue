<template>
  <div>recepi</div>
</template>

<script>
export default {
  name: "RecipePage"
}
</script>

<style>
.recipe {
  padding: 1rem;
  max-width: 768px;
  margin: 0 auto;
}
.desc {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
hr {
  margin-bottom: 1rem;
}
h3 {
  margin-bottom: 1rem;
}
.ingredients {
  padding: 1rem;
  background-color: #081c33;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}
.ingredients ul li {
  list-style-position: inside;
  line-height: 1.4;
  margin-bottom: 1rem;
}
.method ol li {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  list-style-position: inside;
  border-bottom: 1px solid #EEE;
}
</style>