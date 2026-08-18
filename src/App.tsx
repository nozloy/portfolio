import { ArrowDown, ArrowUpRight, Code2, Terminal } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { projects } from './data/projects'
import { SpotlightCard } from './components/SpotlightCard'
import { ProjectDialog } from './components/ProjectDialog'

const skills = ['react', 'next.js', 'typescript', 'node.js', 'postgresql', 'automation', 'seo']

function Header() {
  return (
    <header className="site-header">
      <a className="terminal-brand" href="#top" aria-label="Наверх">
        <Terminal size={16} />
        <span>almir@portfolio</span><b>:~$</b>
      </a>
      <nav aria-label="Навигация">
        <a href="#work">[work]</a>
        <a href="#about">[about]</a>
        <a href="#contact">[contact]</a>
      </nav>
      <span className="availability"><i /> available</span>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div>
          <div className="prompt-line"><span>$</span> whoami</div>
          <h1>Almir<br />Sadykoff<span className="cursor">_</span></h1>
          <p className="hero-lead">
            Разрабатываю веб-продукты и автоматизацию, которые решают задачи бизнеса — от идеи и интерфейса до запуска и поддержки.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">projects <ArrowDown size={16} /></a>
            <a className="button-ghost" href="https://github.com/nozloy" target="_blank" rel="noreferrer"><Code2 size={16} /> github</a>
          </div>
        </div>
        <aside className="hero-terminal" aria-label="Краткая информация">
          <div className="terminal-window-head">
            <div className="terminal-dots"><i /><i /><i /></div>
            <span>profile.json</span>
          </div>
          <pre>{`{
  "role": [
    "web developer",
    "automation",
    "seo / smm"
  ],
  "focus": "business value",
  "status": "available"
}`}</pre>
        </aside>
      </div>
      <div className="skill-line" aria-label="Технологии">
        {skills.map((skill) => <code key={skill}>/{skill}</code>)}
      </div>
    </section>
  )
}

function Work() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="work section" id="work">
      <div className="section-head">
        <div><span className="section-index">01</span><h2>Selected work</h2></div>
        <p>Не просто «сделал сайт». Показываю продукт, задачу и то, что работает внутри.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.2) }}
          >
            <ProjectDialog project={project}>
              <button className="project-trigger" aria-label={`Открыть проект ${project.title}`}>
                <SpotlightCard>
                  <div className="project-preview">
                    <img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" />
                    <div className="preview-scanline" />
                  </div>
                  <div className="project-body">
                    <div className="project-kicker">
                      <span>{project.number}</span>
                      {project.type}
                      {project.status && <em><i /> {project.status}</em>}
                    </div>
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <ArrowUpRight size={20} />
                    </div>
                    <p>{project.description}</p>
                    <div className="card-stack">
                      {project.stack.slice(0, 4).map((item) => <code key={item}>{item}</code>)}
                    </div>
                  </div>
                </SpotlightCard>
              </button>
            </ProjectDialog>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-head">
        <div><span className="section-index">02</span><h2>How I work</h2></div>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <div className="prompt-line"><span>$</span> cat approach.md</div>
          <p>Сначала разбираюсь, какую проблему должен решить продукт. Затем проектирую сценарии, собираю интерфейс и только после этого усложняю техническую часть.</p>
        </div>
        <div className="principles">
          <div><code>01</code><span>Простая логика для пользователя</span></div>
          <div><code>02</code><span>Автоматизация вместо ручной рутины</span></div>
          <div><code>03</code><span>Поддерживаемый код и понятная инфраструктура</span></div>
          <div><code>04</code><span>SEO и бизнес-задачи учитываются до запуска</span></div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-terminal">
        <div className="terminal-window-head">
          <div className="terminal-dots"><i /><i /><i /></div>
          <span>new-project.sh</span>
        </div>
        <div className="contact-inner">
          <div className="prompt-line"><span>$</span> ./start-project</div>
          <h2>Есть задача?<br />Обсудим решение.</h2>
          <p>Сайты, внутренние сервисы, боты, интеграции и автоматизация.</p>
          <a className="button-primary" href="https://github.com/nozloy" target="_blank" rel="noreferrer">
            связаться через GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <div className="noise" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <footer>
        <span>© 2026 Almir Sadykoff</span>
        <code>built with react / motion / radix</code>
      </footer>
    </div>
  )
}

export default App
