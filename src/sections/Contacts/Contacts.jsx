import './Contacts.scss'
import Section from '@/layouts/Section'
import Field from '@/components/Field'
import Button from '@/components/Button'

export default () => {
  return (
    <Section
      className='contacts'
      title='Contact us'
      titleId='contacts'
      id='contacts'
    >
      <div className="contacts__inner">
        <address className="contacts__information">
          <div className="contacts__information-phone">
            <p className="contacts__information-title">
              Phone
            </p>
            <a className="contacts__information-phone-link" href="tel:+123455555555">
              +1 234 5555-55-55
            </a>
          </div>
          <div className="contacts__information-email">
            <p className="contacts__information-title">
              Email
            </p>
            <a className="contacts__information-email-link" href="mailto:hello@miami.com">
              hello@miami.com
            </a>
          </div>
          <div className="contacts__information-address">
            <p className="contacts__information-title">
              Address
            </p>
            <p>400 First Ave N <br/>
              Suite 700 <br/>
              Minneapolis, MN 55401</p>
          </div>
        </address>
        <form className="contacts__form">
          <div className="contacts__form-fields">
            <Field
              label='NameUser'
              labelHidden
              placeholder='Name'
              isRequired
            />
            <Field
              label='Email'
              labelHidden
              placeholder='Email'
              type='email'
              isRequired
            />
            <Field
              label='Message'
              labelHidden
              placeholder='Message'
              type='textarea'
              isRequired
            />
          </div>
          <Button
            type='submit'
            mode = 'second'
            label='Consultation'
          />
        </form>
      </div>
    </Section>
  )
}