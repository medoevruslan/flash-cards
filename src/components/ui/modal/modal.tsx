import { CSSProperties } from 'react'

import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogProps,
  DialogTitle,
} from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './modal.module.scss'

export type ModalProps = {
  className?: string
  onClose?: () => void
  style?: CSSProperties
  title?: string
} & Omit<DialogProps, 'modal'>

const dropIn = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
    y: '100vh',
  },
  hidden: {
    opacity: 0,
    x: '-50%',
  },
  visible: {
    opacity: 1,
    transition: {
      damping: 25,
      duration: 0.3,
      ease: 'easeIn',
      stiffness: 300,
      type: 'spring',
    },
    y: '-50%',
  },
}

export const Modal = ({ children, className, onClose, open = false, style, title }: ModalProps) => {
  return (
    <Dialog onOpenChange={onClose} open={open}>
      <AnimatePresence>
        {open && (
          <DialogPortal forceMount>
            <DialogOverlay asChild className={s.overlay}>
              <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                key={'overlay'}
              />
            </DialogOverlay>
            <DialogContent className={clsx(s.container, className)} forceMount>
              <motion.div
                animate={'visible'}
                exit={'exit'}
                initial={'hidden'}
                key={'content'}
                variants={dropIn}
              >
                <section className={s.content} style={style}>
                  <header className={s.header}>
                    {title && (
                      <DialogTitle>
                        <Typography variant={'h3'}>{title}</Typography>
                      </DialogTitle>
                    )}
                    <DialogClose>
                      <button>
                        <Icon
                          aria-label={'close'}
                          className={s.close}
                          height={12}
                          name={'close'}
                          width={12}
                        />
                      </button>
                    </DialogClose>
                  </header>
                  <article>{children}</article>
                </section>
              </motion.div>
            </DialogContent>
          </DialogPortal>
        )}
      </AnimatePresence>
    </Dialog>
  )
}
