import { useState } from 'react'

import { Icon } from '@/components/ui/icon/icon'

import s from '@/components/ui/table/table.module.scss'

type StarRatingProps = {
  gap?: number
  onChange?: (value: number) => void
  stars: number
}
export const StarRating = ({ gap = 0, onChange, stars: starsQty }: StarRatingProps) => {
  const [rated, setRated] = useState(-1)
  const [hover, setHover] = useState(-1)

  const handleClick = (idx: number) => {
    if (idx !== rated) {
      setRated(idx)
      onChange?.(idx)
    }
  }

  const stars = Array(starsQty)
    .fill(null)
    .map((_, idx) => (
      <Icon
        className={s.iconRating}
        height={15}
        key={idx}
        name={idx <= rated ? 'star-filled' : idx <= hover ? 'star-filled' : 'star-outlined'}
        onClick={() => handleClick(idx)}
        onMouseEnter={() => setHover(idx)}
        onMouseLeave={() => setHover(-1)}
        style={{ paddingRight: gap }}
        width={25 + gap}
      />
    ))

  return <div>{stars}</div>
}
