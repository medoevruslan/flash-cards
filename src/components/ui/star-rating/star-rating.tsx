import { useState } from 'react'

import { Icon } from '@/components/ui/icon/icon'

import s from './star-rating.module.scss'

type StarRatingProps = {
  defaultGrade?: number
  gap?: number
  interactive?: boolean
  onChange?: (value: number) => void
  stars: number
}
export const StarRating = ({
  defaultGrade,
  gap = 0,
  interactive,
  onChange,
  stars: starsQty,
}: StarRatingProps) => {
  const [rated, setRated] = useState(defaultGrade ?? 0)
  const [hover, setHover] = useState(defaultGrade ?? 0)

  const handleClick = (idx: number) => {
    if (interactive && idx !== rated) {
      setRated(idx)
      onChange?.(idx)
    }
  }

  const stars = Array(starsQty)
    .fill(null)
    .map((_, idx) => {
      //set start index to 1 as human-readable index for stars
      const filled = idx + 1

      return (
        <Icon
          className={s.iconRating}
          height={15}
          key={idx}
          name={filled <= rated ? 'star-filled' : filled <= hover ? 'star-filled' : 'star-outlined'}
          onClick={() => handleClick(filled)}
          onMouseEnter={() => interactive && setHover(filled)}
          onMouseLeave={() => interactive && setHover(-1)}
          style={{ paddingRight: gap }}
          width={25 + gap}
        />
      )
    })

  return <div>{stars}</div>
}
