export type Project = {
  id: string
  number: string
  title: string
  type: string
  status?: string
  description: string
  details: string
  features: string[]
  stack: string[]
  url?: string
  github?: string
  images: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    id: 'mypicks', number: '01', title: 'MyPicks / Находки', type: 'Product · Social commerce', status: 'live',
    description: 'Сервис публичных подборок товаров: одна ссылка вместо десятка магазинов и сообщений.',
    details: 'Полноценный продукт для авторов и пользователей: подборки товаров, бейджи, профили, Premium-функции, публикации и автоматизация контента.',
    features: ['Авторские подборки', 'Premium и роли', 'Автопубликация', 'AI-инструменты'],
    stack: ['Next.js 16', 'React 19', 'PostgreSQL', 'Prisma', 'Redis / BullMQ', 'Motion'],
    url: 'https://mypicks.ru', images: [{ src: '/cases/mypicks.webp', alt: 'MyPicks — интерфейсы проекта' }],
  },
  {
    id: 'battlepay', number: '02', title: 'BattlePay', type: 'E-commerce · Automation', status: 'live',
    description: 'Магазин цифровых товаров и сервисов с автоматизацией продаж и собственными внутренними инструментами.',
    details: 'Развитие продукта от витрины до внутренней инфраструктуры: каталог, заказы, выдача цифровых товаров, администрирование, новости и сервисные модули.',
    features: ['Автовыдача товаров', 'Админ-панель', 'Контент и SEO', 'Внутренние сервисы'],
    stack: ['Next.js 16', 'React 19', 'PostgreSQL', 'Prisma', 'S3', 'WebSocket'],
    url: 'https://battlepay.ru', images: [{ src: '/cases/battlepay.webp', alt: 'BattlePay — административные интерфейсы' }],
  },
  {
    id: 'glavsiz', number: '03', title: 'ГлавСИЗ', type: 'B2B · E-commerce', status: 'live',
    description: 'Корпоративный каталог и оптовый кабинет для заказов, документов и повторных закупок.',
    details: 'B2B-интерфейс для регулярной работы клиента с поставщиком: лимиты, заказы, коммерческие предложения, документы и быстрые повторные закупки.',
    features: ['Оптовый кабинет', 'КП и документы', 'Повторные заказы', 'Импорт и каталог'],
    stack: ['Next.js 16', 'React 19', 'PostgreSQL', 'Prisma', 'SWR', 'Tailwind CSS'],
    url: 'https://glavsiz.ru', images: [{ src: '/cases/glavsiz.webp', alt: 'ГлавСИЗ — оптовый кабинет' }],
  },
  {
    id: 'rentcars', number: '04', title: 'IrkutskCars38', type: 'CRM · Rental service', status: 'live',
    description: 'Сайт аренды автомобилей и внутренняя CRM для управления парком, клиентами и обслуживанием.',
    details: 'Единый продукт для клиента и бизнеса: публичная аренда, карточки автомобилей и операционная часть с картой парка, документами и сервисными данными.',
    features: ['Каталог и аренда', 'CRM', 'Карта автопарка', 'ТО и документы'],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Zustand', 'Motion'],
    url: 'https://irkutskcars38.ru', images: [{ src: '/cases/rentcars.webp', alt: 'IrkutskCars38 — карта автопарка' }],
  },
  {
    id: 'beauty', number: '05', title: 'Beauty Queen', type: 'Mobile web · Local business',
    description: 'Мобильный интерфейс студии красоты с услугами, мастерами, акциями и быстрыми каналами связи.',
    details: 'Лёгкий клиентский интерфейс для локального бизнеса: фокус на записи, доверии, команде и навигации без перегруженной структуры.',
    features: ['Mobile-first UI', 'Карточки мастеров', 'Запись', 'Локальные контакты'],
    stack: ['React', 'TypeScript', 'Responsive UI'],
    images: [{ src: '/cases/beauty.webp', alt: 'Beauty Queen — мобильный интерфейс' }],
  },
  {
    id: 'imperator', number: '06', title: 'Император', type: 'Website · Restaurant',
    description: 'Лёгкая презентационная концепция ресторанного комплекса с понятной подачей услуг и пакетов.',
    details: 'Минималистичный mobile-first интерфейс: ключевые преимущества, быстрый расчёт, способы связи и готовые предложения.',
    features: ['Mobile-first', 'Пакеты услуг', 'Быстрая связь', 'Презентационный UI'],
    stack: ['Vite', 'Responsive UI'], github: 'https://github.com/nozloy/imperator',
    images: [{ src: '/cases/imperator.webp', alt: 'Император — мобильный интерфейс' }],
  },
]
