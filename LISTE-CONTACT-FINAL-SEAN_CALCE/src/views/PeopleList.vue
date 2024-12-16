<script setup lang="ts">
import { usePeopleStore } from '@/stores/people'
import PersonCard from '@/components/PersonCard.vue'

const peopleStore = usePeopleStore()
</script>

<template>
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>People Directory</h1>
      <button 
        class="btn btn-primary"
        @click="peopleStore.toggleSortOrder"
      >
        Sort {{ peopleStore.sortOrder === 'asc' ? '↓' : '↑' }}
      </button>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div 
        v-for="person in peopleStore.sortedPeople" 
        :key="person.id"
        class="col"
      >
        <PersonCard :person="person" />
      </div>
    </div>
  </div>
</template>