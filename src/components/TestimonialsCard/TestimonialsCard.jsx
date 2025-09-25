import './TestimonialsCard.scss'
import {Image} from 'minista'

export default (props) => {
  const {
    imgSrc,
    name,
    jobTitle,
    review,
  } = props

  return (
    <div
      className='testimonials-card'
    >
      <Image
        className='testimonials-card__image'
        src={imgSrc}
        width={150}
        height={150}
      />
      <div className="testimonials-card__body">
        <h3 className="testimonials-card__name">
          {name}
        </h3>
        <p className="testimonials-card__job-title">
          {jobTitle}
        </p>
        <p className="testimonials-card__review">
          {review}
        </p>
      </div>
    </div>
  )
}