<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">City Dashboard</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
nav {
  padding: 10px;
  background: #f4f4f4;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}
</style>
