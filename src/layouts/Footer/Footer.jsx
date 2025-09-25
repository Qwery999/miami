import './Footer.scss'
import Logo from '@/components/Logo'

export default () => {
  return (
    <footer className="footer">
      <Logo className="footer__logo" loading="eager" />
    </footer>
  )
}
