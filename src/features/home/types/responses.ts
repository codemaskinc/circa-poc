import { Lease } from 'lib/models'

export type GetDashboardDataResponse = {
    dashboard: {
        currentLeases: Array<Lease>
    }
}
