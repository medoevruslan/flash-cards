import { Icon } from '@/components/ui/icon/icon'

import s from '@/components/ui/table/table.module.scss'

export const DecksActions = () => {
  return (
    <>
      <Icon
        className={s.actionIcon}
        height={15}
        name={'play-circle-icon'}
        style={{ marginRight: '10px' }}
        width={15}
      />
      <Icon
        className={s.actionIcon}
        height={15}
        name={'edit'}
        style={{ marginRight: '10px' }}
        width={15}
      />
      <Icon className={s.actionIcon} height={15} name={'delete'} width={15} />
    </>
  )
}
