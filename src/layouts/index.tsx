import { useMemo, useState, useEffect } from 'react';
import { Outlet, history, useLocation } from 'umi';
import styles from './index.less';
import '../assets/common.css'
import SideMenuItem from '@/common/components/SideMenuItem';
import { ROUTE } from '@/common/config/route.config';
import Icon from '@/common/components/Icon';
/**
 * 基础布局
 * @returns 
 */
export default function Layout() {
  const [activePath, setActivePath] = useState<string>()
  const location = useLocation()
  const SideMenu = useMemo(() => {
    return <div className={styles['container-left-menu']}>
      {
        ROUTE.map(v => {
          if (!v.show) {
            return null
          }
          return <SideMenuItem active={activePath === v.path} key={v.path} title={v.name} onClick={() => {
            history.push(v.path)
            setActivePath(v.path)
          }}>
            <Icon name={v.icon} style={{ marginRight: '16px' }} />{v.name}
          </SideMenuItem>
        })
      }
    </div>
  }, [activePath])

  useEffect(() => {
    setActivePath(location.pathname)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles['container-left']}>
        <div className={styles['container-left-head']}>
          <div className={styles['logo']} data-text="Library Copilot">
            Library Copilot
          </div>
        </div>
        {SideMenu}
      </div>
      <div className={styles['container-right']}>
        <Outlet />
      </div>
    </div>
  );
}
