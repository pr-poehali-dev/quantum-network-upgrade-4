import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import Icon from "@/components/ui/icon"
import IframeEmbed from "@/components/IframeEmbed"

export default function Index() {
  const missionStatement =
    "ГТО — это не просто нормативы, это твой личный вызов. Программа «Готов к труду и обороне» объединяет миллионы россиян, которые хотят быть сильными, выносливыми и здоровыми. Бег, прыжки, отжимания, плавание — каждый норматив раскрывает твой потенциал. Золотой значок ГТО — это не просто металл, это доказательство твоей силы воли. Присоединяйся, готовься, сдавай — и открывай в себе то, на что ты действительно способен."

  const timelineEntries = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJ3iTXUn5SUexF6nHMZYhMoQLNCboK.png",
      alt: "Бегунья на дорожке — норматив по бегу ГТО",
      title: "Шаг 1: Узнай свои нормативы",
      description:
        "Для каждой возрастной группы — свои нормативы. От 6 лет до 70+, 18 ступеней ГТО охватывают всех. Проверь таблицу нормативов для своего возраста и узнай, что нужно для бронзового, серебряного или золотого значка. Это проще, чем кажется!",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN9OPh9hw0b9rwSPRSslHoejcfoKHe.png",
      alt: "Спортсмен готовится к испытаниям ГТО",
      title: "Шаг 2: Подготовься с нами",
      description:
        "Тренировочные планы, советы тренеров, поддержка сообщества — всё, что нужно для успешной сдачи. Бег, силовые упражнения, гибкость и плавание — готовься системно и приходи на испытания уверенным в своих силах.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
      alt: "Победитель получает значок ГТО",
      title: "Шаг 3: Сдай и получи значок",
      description:
        "Центры тестирования ГТО открыты по всей России. Выбери удобное место и время, приди на испытания и докажи себе, что ты готов. Золотой значок ГТО — это честь, привилегии при поступлении и гордость на всю жизнь.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">О ПРОГРАММЕ ГТО</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">КАК СДАТЬ ГТО</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Три простых шага от новичка до обладателя золотого значка ГТО.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Что говорят{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">УЧАСТНИКИ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные истории людей, которые прошли путь от дивана до золотого значка ГТО.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Полный сайт ГТО */}
      <section id="gto-site" className="relative py-20 bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-4">САЙТ ГТО</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Полный сайт gotovktrydyioborone.ru — всё в одном месте.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full"
          >
            <IframeEmbed
              src="https://gotovktrydyioborone.ru/"
              title="Сайт ГТО"
              height={3500}
            />
          </motion.div>
          <p className="text-center text-xs text-gray-400 mt-4">
            Источник:{" "}
            <a href="https://gotovktrydyioborone.ru/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">
              gotovktrydyioborone.ru
            </a>
          </p>
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/runners-motion-blur.png"
          mobileImage="/images/runners-motion-blur.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}