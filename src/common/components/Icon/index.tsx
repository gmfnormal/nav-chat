import { HomeOutlined } from '@ant-design/icons'
import { ReactElement } from 'react'
export const ICON_MAP: Record<string, ReactElement> = {
    HomeOutlined: <HomeOutlined />
}


type IconProps = {
    name?: string
    [key: string]: any
}

/**
 * antd icon按需引入，所以新增icon使用这里先import后再使用，用于按需加载
 */
export default (props: IconProps) => {
    const { name, ...rest } = props
    if (!name) {
        return null
    }
    return <span {...rest}>
        {ICON_MAP[name]}
    </span>
}