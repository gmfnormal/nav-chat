import { PropsWithChildren } from 'react'
import { Tooltip } from 'antd'
import { SideMenuItemProps } from './type'
import styles from './index.less';
export default (props: PropsWithChildren<SideMenuItemProps>) => {
    const { children, title, active = false, onClick } = props

    const handleClick = () => {
        onClick?.()
    }

    return <Tooltip title={title}>
        <div className={`${styles['side-menu-container']} ellipsis ${active ? `${styles['side-menu-container_active']}` : ''}`} onClick={handleClick}>
            {children}
        </div>
    </Tooltip>
}