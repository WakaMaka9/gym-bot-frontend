import Edit from './assets/edit.svg'
import ArrowDown from './assets/chevron_down.svg'
import Copy from './assets/copy.svg'

const icons = {
    edit: Edit,
    arrowDown: ArrowDown,
    copy: Copy,
}

export type IconName = keyof typeof icons

export type IconProps = {
    icon: IconName
} & React.SVGAttributes<object>

export function Icon({ icon, ...svgProps }: IconProps) {
    const IconComp = icons[icon]
    return <IconComp {...svgProps} />
}
