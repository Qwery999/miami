import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'

export default (props) => {
  const { url } = props

  const menuItems = [
    {
      label: 'HOME',
      href: 'https://qwery999.github.io/miami/',
    },
    {
      label: 'ABOUT US',
      href: 'https://qwery999.github.io/miami/#about',
    },
    {
      label: 'GALLERY',
      href: 'https://qwery999.github.io/miami/#gallery',
    },
    {
      label: 'TESTIMONIALS',
      href: 'https://qwery999.github.io/miami/#testimonials',
    },
    {
      label: 'CONTACTS',
      href: 'https://qwery999.github.io/miami/#contacts',
    },
  ]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <BurgerButton
        className="header__burger-button"
        extraAttrs={{
          'data-js-overlay-menu-burger-button': '',
        }}
      />
        <Logo className="header__logo" loading="eager" />
        <div className="header__actions">
          <Button
            className="header__button"
            label='+1 234 555-55-55'
            mode='icon'
            href='tel:+12345555555'
            iconName='phone'
            hasFillIcon
          />
        </div>
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <div className="header__overlay-menu-dialog__inner container">
            <nav className="header__menu">
              <ul className="header__menu-list">
                {menuItems.map(({ label, href }, index) => (
                  <li className="header__menu-item" key={index}>
                    <a
                      className={clsx(
                        'header__menu-link',
                        href === url && 'is-active'
                      )}
                      data-js-menu-link=""
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="header__menu-number">
                <p className="header__menu-number-text">+1 234 555-55-55</p>
                <a className="header__menu-number-link" href="tel:+12345555555">CALL TO ORDER</a>
              </div>
            </nav>
          </div>
        </dialog>

      </div>
    </header>
  )
}
