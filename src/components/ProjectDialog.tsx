import { useState, type ReactNode } from 'react'
import { Dialog } from 'radix-ui'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { Project } from '../data/projects'

type Props = { project: Project; children: ReactNode }

export function ProjectDialog({ project, children }: Props) {
  const [open, setOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const current = project.images[imageIndex]
  const move = (step: number) => setImageIndex((index) => (index + step + project.images.length) % project.images.length)
  const paragraphs = project.details.split(/\n\s*\n/).filter(Boolean)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <Dialog.Title className="sr-only">{project.title}</Dialog.Title>
          <Dialog.Description className="sr-only">Подробности проекта и скриншоты интерфейса.</Dialog.Description>
          <div className="dialog-topbar">
            <div className="terminal-dots" aria-hidden="true"><i /><i /><i /></div>
            <code>~/portfolio/{project.id}</code>
            <Dialog.Close className="icon-button" aria-label="Закрыть"><X size={18} /></Dialog.Close>
          </div>
          <div className="dialog-layout">
            <section className="dialog-copy">
              <div className="project-kicker"><span>{project.number}</span>{project.type}</div>
              <h2>{project.title}</h2>
              <div className="project-details">
                {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
              <div className="feature-list">{project.features.map((feature) => <span key={feature}>+ {feature}</span>)}</div>
              <div className="stack-list">{project.stack.map((item) => <code key={item}>{item}</code>)}</div>
              {(project.url || project.github) && (
                <a className="external-link" href={project.url ?? project.github} target="_blank" rel="noreferrer">открыть проект <ArrowUpRight size={16} /></a>
              )}
            </section>
            <section className="dialog-gallery">
              <div className="gallery-frame">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img key={current.src} src={current.src} alt={current.alt} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.2 }} />
                </AnimatePresence>
              </div>
              {project.images.length > 1 && (
                <div className="gallery-controls">
                  <button onClick={() => move(-1)} aria-label="Предыдущий скриншот"><ChevronLeft size={18} /></button>
                  <code>{String(imageIndex + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}</code>
                  <button onClick={() => move(1)} aria-label="Следующий скриншот"><ChevronRight size={18} /></button>
                </div>
              )}
            </section>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
