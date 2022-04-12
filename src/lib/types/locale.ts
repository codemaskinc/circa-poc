export type Dictionary<T = string> = {
    common: {
        day: T,
        days: T,
        dueIn: T,
        seeAll: T
    },
    screens: {
        home: {
            propertySection: {
                title: T
            },
            communitySection: {
                title: T,
                creditCard: {
                    title: T,
                    subtitle: T
                },
                backupCard: {
                    title: T,
                    subtitle: T
                }
            }
        }
    },
    components: {
        welcomeBanner: {
            title: T,
            subtitle: T,
            cta: T
        },
        homeHeader: {
            cta: T,
            dropdown: {
                defaultOption: T
            }
        },
        propertyManagerCard: {
            cta: {
                call: T,
                email: T
            }
        }
    }
}
