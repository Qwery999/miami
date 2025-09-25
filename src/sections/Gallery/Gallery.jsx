import './Gallery.scss'
import Section from '@/layouts/Section'
import GalleryCard from '@/components/GalleryCard'
import Button from '@/components/Button'

export default () => {

  const cards = [
    {
      imgSrcFirst: '/src/assets/images/gallery/1.jpg',
      imgSrcSecond: '/src/assets/images/gallery/2.jpg',
      mode: '20-10',
      name: 'Marina Palms',
      address: 'North Miami Beach, FL 33162',
    },
    {
      imgSrcFirst: '/src/assets/images/gallery/3.jpg',
      imgSrcSecond: '/src/assets/images/gallery/4.jpg',
      mode: '15-15',
      name: 'Edition Residents ',
      address: 'Miami Beach, FL 33139',
    },
    {
      imgSrcFirst: '/src/assets/images/gallery/5.jpg',
      imgSrcSecond: '/src/assets/images/gallery/6.jpg',
      mode: '10-20',
      name: 'Faena House',
      address: 'Miami Beach, FL 33140',
    },
  ]

  return (
    <Section
      className='gallery'
      title='Gallery'
      titleId='gallery'
      id='gallery'
    >
      <div className="gallery__inner">
        <div className="gallery__cards">
          {cards.map((card, index) => (
            <GalleryCard {...card} key={index}/>
          ))}
        </div>
        <div className="gallery__button">
          <Button
            label='View all'
          />
        </div>
      </div>
    </Section>
  )
}