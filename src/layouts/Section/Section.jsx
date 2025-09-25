import './Section.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const { className, title, titleId, children } = props

  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        <Icon
          name='crown'
          hasFill
        />
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
