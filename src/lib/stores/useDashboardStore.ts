import { useState } from 'react'
import { Lease } from '../models'

const initialState = [] as Array<Lease>

export const useDashboardStore = () => {
    const [dashboardState, setDashboardState] = useState<typeof initialState>()

    return {
        dashboardActions: {
            setDashboardState
        },
        dashboardState
    }
}
