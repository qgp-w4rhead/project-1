<script setup lang="ts">
import type { Personne } from '@/types/personne'

defineProps<{
  personne: Personne
}>()
</script>

<template>
  <div class="card h-100">
    <img :src="personne.avatar" class="card-img-top" :alt="personne.nom">
    <div class="card-body">
      <h5 class="card-title">{{ personne.nom }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ personne.profession }}</h6>
      <p class="card-text">
        <small>
          <i class="bi bi-geo-alt-fill"></i> {{ personne.localisation }}
        </small>
      </p>
      <p class="card-text">
        <small>
          <i class="bi bi-envelope-fill"></i> {{ personne.courriel }}
        </small>
      </p>
      <p class="card-text">
        <small class="text-muted">
          Inscrit le {{ new Date(personne.dateInscription).toLocaleDateString() }}
        </small>
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>