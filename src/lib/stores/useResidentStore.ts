import { useState } from 'react'

export const useResidentStore = () => {
    const [residentId, setResidentId] = useState<string>()

    return {
        residentActions: {
            setResidentId
        },
        residentState: {
            residentId
        },
    }
}
