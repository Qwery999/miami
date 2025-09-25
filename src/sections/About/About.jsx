import './About.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
  } = props

  return (
    <section
      id='about'
      className={clsx('about', className)}
    >
      <div className="about__inner container">
        <div className="about__title">
          <h2 className="about__title-text">
            Miami best Real estate <span className='about__title-text--blue'>here</span>
          </h2>
        </div>
        <div className="about__body">
          <h3 className="about__body-title">
            Over 50 years experience in love.
          </h3>
          <div className="about__body-description">
            <p>
              Mazel and VA Tsukkerman in his "Analysis of musical works." Pointillism,
              which originated in the music of the early twentieth century, microforms,
              found a distant historical.
            </p>
            <p>
              The market leader in real estate since 2003. Awards Real Estate
              Company, 2010, 2011, 2013. More than 200 satisfied customers premium
              segment. We focus only on new buildings and high-level doskanalno
              know this area better than other specialists. Working directly with
              developers - so have more useful information about the profitable deals.
            </p>
            <p>
              <b>We will never be late! <br/>Guaranteed secure transaction - 100%</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}