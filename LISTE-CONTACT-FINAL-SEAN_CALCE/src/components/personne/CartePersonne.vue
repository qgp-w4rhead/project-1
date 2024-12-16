<script setup lang="ts">
import type { Personne } from '@/types/personne'
import { formatDate } from '@/utils/date'

defineProps<{
  personne: Personne
}>()
</script>

<template>
  <div class="card h-100 carte-personne">
    <img :src="personne.avatar" class="card-img-top" :alt="personne.nom">
    <div class="card-body">
      <h5 class="card-title text-truncate">{{ personne.nom }}</h5>
      <h6 class="card-subtitle mb-2 text-muted text-truncate">{{ personne.profession }}</h6>
      <div class="info-container">
        <p class="card-text mb-1">
          <i class="bi bi-geo-alt-fill"></i>
          <span class="text-truncate">{{ personne.localisation }}</span>
        </p>
        <p class="card-text mb-1">
          <i class="bi bi-envelope-fill"></i>
          <span class="text-truncate">{{ personne.courriel }}</span>
        </p>
        <p class="card-text">
          <small class="text-muted">
            Inscrit le {{ formatDate(personne.dateInscription) }}
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carte-personne {
  transition: transform 0.2s;
  max-width: 100%;
}

.carte-personne:hover {
  transform: translateY(-5px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.info-container {
  font-size: 0.9rem;
}

.info-container i {
  width: 20px;
  margin-right: 8px;
}

@media (max-width: 768px) {
  .card-img-top {
    height: 150px;
  }
  
  .card-title {
    font-size: 1.1rem;
  }
  
  .card-subtitle {
    font-size: 0.9rem;
  }
  
  .info-container {
    font-size: 0.8rem;
  }
}
</style>