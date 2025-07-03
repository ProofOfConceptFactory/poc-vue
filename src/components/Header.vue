<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo alt="Flowbite logo" :image-url=logo link="/">
        poc-vue
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link :is-active="$route.name === 'home'" link="/">
          Home
        </fwb-navbar-link>
        <fwb-navbar-link :is-active="$route.name === 'another-page'" link="/another-page">
          Another page
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup lang="ts">
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue'
import logo from '../assets/vue.svg'
</script>
