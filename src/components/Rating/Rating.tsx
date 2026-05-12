import { Rating as MuiRating, RatingProps as MuiRatingProps } from '@mui/material'

export interface RatingProps extends MuiRatingProps {}

export function Rating({ size = 'medium', precision = 0.5, ...props }: RatingProps) {
  return <MuiRating size={size} precision={precision} {...props} />
}
