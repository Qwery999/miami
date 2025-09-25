import './Button.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    className,
    type = 'button',
    href,
    /**
     * '' (default) | second | icon
     */
    mode = '',
    label,
    isLabelHidden = false,
    iconName,
    hasFillIcon,
    iconPosition = '',
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes
  const iconComponent = iconName && (
    <Icon
      className='button__icon'
      name={iconName}
      hasFill={hasFillIcon}
    />
  )

  return (
    <Component className={
      clsx(
      'button',
        className,
        mode && `button--${mode}`
      )} {...attributesByTag}
        >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className="button__label">{label}</span>
      )}
      {iconComponent}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}
