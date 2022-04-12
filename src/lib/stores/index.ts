import { useStore } from 'outstated'
import { useResidentStore as residentStore } from './useResidentStore'
import { useDashboardStore as dashboardStore } from './useDashboardStore'

export const stores = [
    residentStore,
    dashboardStore
]

export const useResidentStore = () => useStore(residentStore)
export const useDashboardStore = () => useStore(dashboardStore)
