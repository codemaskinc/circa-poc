import React, { useState } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import { Card, Grid, Typography } from 'lib/components'
import { useStyles, useTranslations } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { BarStyle } from 'lib/types'
import { Icons } from 'assets'
import { useDashboardStore } from 'lib/stores'
import { Lease } from 'lib/models'
import { CommunityCard, HomeHeader, PropertyManagerCard, WelcomeBanner } from './components'

export const HomeScreen: React.FunctionComponent = () => {
    const T = useTranslations()
    const { styles } = useStyles(stylesheet)
    const { dashboardState: currentLeases } = useDashboardStore()
    const [firstLease] = currentLeases
    const [selectedLease, setSelectedLease] = useState<Lease>(firstLease)
    const [isWelcomeBannerVisible, setWelcomeBannerVisibility] = useState<boolean>(true)

    return (
        <Grid.Background style={styles.container}>
            <StatusBar barStyle={BarStyle.Light} />
            <Grid.Gap>
                <WelcomeBanner
                    isVisible={isWelcomeBannerVisible}
                    onClose={() => setWelcomeBannerVisibility(false)}
                />
            </Grid.Gap>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <HomeHeader
                    currentLeases={currentLeases}
                    selectedLease={selectedLease}
                    setSelectedLease={leaseId => {
                        const targetLease = currentLeases.find(lease => lease.leaseId === leaseId)

                        if (targetLease) {
                            setSelectedLease(targetLease)
                        }
                    }}
                />
                <Grid.Background style={styles.detailsContainer}>
                    <Typography.Heading style={styles.sectionName}>
                        {T.screens.home.propertySection.title}
                    </Typography.Heading>
                    <Grid.Gap
                        gapTop={2}
                        gapBottom={3}
                    >
                        <Card>
                            <PropertyManagerCard
                                propertyManager={{
                                    // todo user is hardoced
                                    name: 'John Smith',
                                    userUUID: '1',
                                    avatarUrl: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg'
                                }}
                            />
                        </Card>
                    </Grid.Gap>
                    <Typography.Heading style={styles.sectionName}>
                        {T.screens.home.communitySection.title}
                    </Typography.Heading>
                    <Grid.Gap
                        gapTop={2}
                        gapBottom={2}
                    >
                        <Card>
                            <CommunityCard
                                title={T.screens.home.communitySection.creditCard.title}
                                subtitle={T.screens.home.communitySection.creditCard.subtitle}
                                renderIcon={() => (
                                    <Icons.Bars size={70} />
                                )}
                            />
                        </Card>
                    </Grid.Gap>
                    <Card>
                        <CommunityCard
                            title={T.screens.home.communitySection.backupCard.title}
                            subtitle={T.screens.home.communitySection.backupCard.subtitle}
                            renderIcon={() => (
                                <Icons.PigWithTitle size={70} />
                            )}
                        />
                    </Card>
                </Grid.Background>
                <View style={styles.bottomSpacer} />
            </ScrollView>
        </Grid.Background>
    )
}

const stylesheet = createStyles(template => ({
    container: {
        backgroundColor: template.ui.primary
    },
    detailsContainer: {
        flex: 1,
        height: 600,
        paddingTop: template.gap(8),
        paddingHorizontal: template.gap(2)
    },
    sectionName: {
        fontSize: 18,
        lineHeight: 18,
        color: template.ui.primary
    },
    bottomSpacer: {
        height: template.gap(5)
    }
}))
