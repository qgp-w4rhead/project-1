<script setup lang="ts">
import { usePersonnes } from '@/composables/usePersonnes'
import CartePersonne from '@/components/personne/CartePersonne.vue'
import FormulaireAjoutPersonne from '@/components/personne/FormulaireAjoutPersonne.vue'
import AppHeader from '@/components/layout/AppHeader.vue'

const { personnesTriees, ordreTri, basculerOrdreTri, ajouterPersonne } = usePersonnes()
</script>

<template>
  <div class="liste-personnes">
    <AppHeader titre="Répertoire des Personnes" />
    
    <main class="container py-2 px-3">
      <div class="actions-container mb-4">
        <button 
          class="btn btn-primary btn-sm"
          @click="basculerOrdreTri"
        >
          <i class="bi" :class="ordreTri === 'asc' ? 'bi-sort-alpha-down' : 'bi-sort-alpha-up'"></i>
          Trier
        </button>
      </div>

      <FormulaireAjoutPersonne 
        :onAjouterPersonne="ajouterPersonne"
      />

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <div 
          v-for="personne in personnesTriees" 
          :key="personne.id"
          class="col"
        >
          <CartePersonne :personne="personne" />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.liste-personnes {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.actions-container {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .container {
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .row {
    margin-left: -5px;
    margin-right: -5px;
  }
  
  .col {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>