import { Dictionary } from '../types'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const en_US: Dictionary = {
    common: {
        day: 'day',
        days: 'days',
        dueIn: 'due in',
        seeAll: 'See all'
    },
    screens: {
        home: {
            propertySection: {
                title: 'Your property'
            },
            communitySection: {
                title: 'Community Board',
                creditCard: {
                    title: 'Get the credit you deserve',
                    subtitle: 'Learn how paying rent with Circa helps build your credit score'
                },
                backupCard: {
                    title: 'What\'s your backup plan?',
                    subtitle: 'Start saving so you can always pay rent, event when life gest messy'
                }
            }
        }
    },
    components: {
        welcomeBanner: {
            title: 'Welcome to the new Circa!',
            subtitle: 'Your experience means everything to\nus, and we’re thrilled to launch\nimprovements to our service and look.',
            cta: 'Learn more'
        },
        homeHeader: {
            cta: 'Modify',
            dropdown: {
                defaultOption: 'Select address'
            }
        },
        propertyManagerCard: {
            cta: {
                call: 'Call',
                email: 'Email'
            }
        }
    }
}
