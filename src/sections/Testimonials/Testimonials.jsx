import './Testimonials.scss'
import Section from '@/layouts/Section'
import TestimonialsCard from '@/components/TestimonialsCard'

export default () => {
  const cards = [
    {
      imgSrc:'/src/assets/images/testimonials/1.jpg',
      name:'Leslie Mckinney',
      jobTitle:'CEO',
      review:'Nice work, Certificates National Association of Realtors (USA)',
    },
    {
      imgSrc:'/src/assets/images/testimonials/2.jpg',
      name:'Scarlett Hawkins',
      jobTitle:'Senior Vice President',
      review:'My soul is illuminated by an unearthly joy, as these beautiful spring morning, which I enjoy with all my heart',
    },
    {
      imgSrc:'/src/assets/images/testimonials/3.jpg',
      name:'Max Henry',
      jobTitle:'Chief Design Officer',
      review:'When my lovely valley of steam rises and half-day sun is above an impermeable',
    },
  ]

  return (
    <Section
      className='testimonials'
      title='Testimonials'
      titleId='testimonials'
    >
      <div className="testimonials__cards">
        {cards.map((card, index) => (
          <TestimonialsCard {...card} key={index}/>
        ))}
      </div>
    </Section>
  )
}