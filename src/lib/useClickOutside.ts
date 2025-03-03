import * as React from 'react'

type Callback = () => void

export function useClickOutside<RefT extends HTMLElement>(cb: Callback) {
    const ref = React.useRef<RefT>(null)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (event.target && ref.current && !ref.current.contains(event.target as HTMLLIElement)) {
                cb()
            }
        }
        document.addEventListener('click', handleClickOutside, { capture: true })
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [ref])

    return { ref }
}