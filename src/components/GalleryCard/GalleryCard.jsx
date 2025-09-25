import './GalleryCard.scss'
import clsx from 'clsx'
import {Image} from 'minista'

export default (props) => {
  const {
    imgSrcFirst,
    imgSrcSecond,
    /**
     * '' (default) | 20-10 | 15-15 | 10-20
     */
    mode,
    name,
    address,
  } = props

  return (
    <div
      className='gallery-card'
    >
      <div className={clsx(
        'gallery-card__images',
          mode && `gallery-card__images--${mode}`
        )}>
        <Image className='gallery-card__image' src={imgSrcFirst}/>
        <Image className='gallery-card__image' src={imgSrcSecond}/>
      </div>
      <div className="gallery-card__body">
        <span className='gallery-card__title'>{name}</span>
        <span className='gallery-card__subtitle'> / {address}</span>
      </div>
    </div>
  )
}