import React, { useState } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import { Card, Grid, Typography } from 'lib/components'
import { useStyles, useTranslations } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { BarStyle } from 'lib/types'
import { Icons } from 'assets'
import { CommunityCard, HomeHeader, PropertyManagerCard, WelcomeBanner } from './components'

export const HomeScreen: React.FunctionComponent = () => {
    const T = useTranslations()
    const { styles } = useStyles(stylesheet)
    const [selectedAddressKey, setSelectedAddressKey] = useState<string>()
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
                    selectedAddressKey={selectedAddressKey}
                    setSelectedAddressKey={setSelectedAddressKey}
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
                                    name: 'John Smith',
                                    userUUID: '1'
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
