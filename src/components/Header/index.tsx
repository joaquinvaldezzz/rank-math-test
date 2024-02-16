import { useState } from 'react'
import clsx from 'clsx'
import {
  ChevronLeftIcon,
  DotsVerticalIcon,
  LayoutTopIcon,
  Share01Icon,
  TextInputIcon,
  XCircleIcon,
} from '~/components/icons'
import styles from './header.module.scss'

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false)

  function handleMenu(): void {
    setOpen(!open)
  }

  return (
    <>
      <header className={styles.header}>
        <button className={styles['header-button']} type="button">
          <span className="sr-only">Go back</span>
          <ChevronLeftIcon />
        </button>
        <h1 className={styles['header-text']}>Bitcoin Wallet</h1>
        <button className={styles['header-button']} type="button" onClick={handleMenu}>
          <span className="sr-only">Open menu</span>
          <DotsVerticalIcon />
        </button>
      </header>

      <div className={clsx(styles['header-menu'], open ? styles.open : styles.closed)}>
        <ul className="divide-y px-4">
          <li>
            <button
              className="font-semi flex w-full items-center justify-between py-4"
              type="button"
            >
              Edit
              <TextInputIcon className="size-6" />
            </button>
          </li>

          <li>
            <button
              className="font-semi flex w-full items-center justify-between py-4"
              type="button"
            >
              Courier info
              <LayoutTopIcon className="size-6" />
            </button>
          </li>

          <li>
            <button
              className="font-semi flex w-full items-center justify-between py-4"
              type="button"
            >
              Share
              <Share01Icon className="size-6" />
            </button>
          </li>

          <li>
            <button
              className="flex w-full items-center justify-between py-4 text-red-600"
              type="button"
            >
              Remove
              <XCircleIcon className="size-6" />
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
