<script setup lang="ts">
import { ref } from 'vue'
import type { Personne } from '@/types/personne'

const props = defineProps<{
  onAjouterPersonne: (personne: Omit<Personne, 'id'>) => void
}>()

const afficherFormulaire = ref(false)

const nouvellePersonne = ref<Omit<Personne, 'id'>>({
  nom: '',
  courriel: '',
  avatar: 'https://i.pravatar.cc/150',
  profession: '',
  localisation: '',
  dateInscription: new Date().toISOString().split('T')[0]
})

const reinitialiserFormulaire = () => {
  nouvellePersonne.value = {
    nom: '',
    courriel: '',
    avatar: 'https://i.pravatar.cc/150',
    profession: '',
    localisation: '',
    dateInscription: new Date().toISOString().split('T')[0]
  }
}

const soumettreFormulaire = () => {
  props.onAjouterPersonne(nouvellePersonne.value)
  reinitialiserFormulaire()
  afficherFormulaire.value = false
}
</script>

<template>
  <div class="mb-4">
    <button 
      class="btn btn-success mb-3"
      @click="afficherFormulaire = !afficherFormulaire"
    >
      {{ afficherFormulaire ? 'Fermer' : 'Ajouter une Personne' }}
    </button>

    <div v-if="afficherFormulaire" class="card">
      <div class="card-body">
        <h3 class="card-title mb-4">Nouvelle Personne</h3>
        <form @submit.prevent="soumettreFormulaire">
          <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input
              type="text"
              class="form-control"
              id="nom"
              v-model="nouvellePersonne.nom"
              required
            >
          </div>

          <div class="mb-3">
            <label for="courriel" class="form-label">Courriel</label>
            <input
              type="email"
              class="form-control"
              id="courriel"
              v-model="nouvellePersonne.courriel"
              required
            >
          </div>

          <div class="mb-3">
            <label for="profession" class="form-label">Profession</label>
            <input
              type="text"
              class="form-control"
              id="profession"
              v-model="nouvellePersonne.profession"
              required
            >
          </div>

          <div class="mb-3">
            <label for="localisation" class="form-label">Localisation</label>
            <input
              type="text"
              class="form-control"
              id="localisation"
              v-model="nouvellePersonne.localisation"
              required
            >
          </div>

          <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
      </div>
    </div>
  </div>
</template>