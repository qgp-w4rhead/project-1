import { ref, computed } from 'vue'
import type { Personne } from '@/types/personne'
import { personnes as personnesInitiales } from '@/data/personnes'

export function usePersonnes() {
  const personnes = ref<Personne[]>(personnesInitiales)
  const ordreTri = ref<'asc' | 'desc'>('asc')

  const personnesTriees = computed(() => {
    return [...personnes.value].sort((a, b) => {
      const comparaison = a.nom.localeCompare(b.nom)
      return ordreTri.value === 'asc' ? comparaison : -comparaison
    })
  })

  const basculerOrdreTri = () => {
    ordreTri.value = ordreTri.value === 'asc' ? 'desc' : 'asc'
  }

  const ajouterPersonne = (nouvellePersonne: Omit<Personne, 'id'>) => {
    const nouvelId = Math.max(...personnes.value.map(p => p.id)) + 1
    personnes.value.push({
      id: nouvelId,
      ...nouvellePersonne
    })
  }

  return {
    personnes,
    personnesTriees,
    ordreTri,
    basculerOrdreTri,
    ajouterPersonne
  }
}