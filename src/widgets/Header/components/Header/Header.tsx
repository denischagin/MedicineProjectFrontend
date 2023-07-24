import { Link } from 'shared/components/Link'
import { paths } from 'shared/routes'
import css from './Header.module.css'

export const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.wrapper}>
        <h1>DemoProject</h1>
        <div className={css.links}>
          <Link to={paths.login}>
            Войти
          </Link>

          <Link to={paths.registration}>
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  )
}
