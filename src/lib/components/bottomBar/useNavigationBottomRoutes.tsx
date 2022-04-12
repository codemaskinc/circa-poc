import { useMemo } from 'react'
import { TabNavigationState } from '@react-navigation/routers'
import { Icons } from 'assets'
import { KeyValuePair } from 'lib/types'

export const useNavigationBottomRoutes = (state: TabNavigationState<KeyValuePair>) => {
    const routes = useMemo(() => {
        const [
            homeTab,
            plansTab,
            walletTab,
            paymentsTab,
            settingsTab
        ] = state.routes

        return [
            {
                name: homeTab.name,
                key: homeTab.key,
                icon: Icons.Home
            },
            {
                name: plansTab.name,
                key: plansTab.key,
                icon: Icons.Circles
            },
            {
                name: walletTab.name,
                key: walletTab.key,
                icon: Icons.Wallet
            },
            {
                name: paymentsTab.name,
                key: paymentsTab.key,
                icon: Icons.Invoice
            },
            {
                name: settingsTab.name,
                key: settingsTab.key,
                icon: Icons.Settings
            }
        ]
    }, [state.routes])

    return routes
}
