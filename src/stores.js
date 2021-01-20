import { writable } from 'svelte/store'

export const state = writable(0)
export const farmer = writable({})
export const apmc = writable({})
export const corporate = writable({})
export const market = writable({})