import { defineStore } from 'pinia'

export const useLoadStatus = defineStore('loadStatus', () => {
    const isLoading = ref(true)
    const currentStatus = computed(() => isLoading)

    function endSpinner() {
        isLoading = false
    }

    return { isLoading, currentStatus, endSpinner }
})