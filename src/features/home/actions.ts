import { HttpMethod, VoidFunction } from 'lib/types'
import { useDashboardStore, useResidentStore } from 'lib/stores'
import { useFetch } from 'lib/hooks'
import { GetDashboardDataResponse } from './types'

export const useGetDashboardData = (
    onSuccess: VoidFunction,
    onError: VoidFunction
) => {
    const { residentState: { residentId } } = useResidentStore()
    const { dashboardActions: { setDashboardState } } = useDashboardStore()

    const { fetch, fetchState } = useFetch<GetDashboardDataResponse>({
        url: `/residents/${residentId}/dashboard`,
        method: HttpMethod.GET
    }, {
        onSuccess: async ({ dashboard }) => {
            setDashboardState(dashboard.currentLeases)
            onSuccess()
        },
        onError
    })

    return {
        fetch: () => fetch(),
        fetchState
    }
}
