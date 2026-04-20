import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// ГТО testimonials data
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Думал, что нормативы ГТО — это не для меня. Но потратил 3 месяца на подготовку и сдал на золото! Это был лучший подарок себе на 30-летие.",
    by: "Сергей Иванов, золотой значок 4 ступень",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SergeyIvanov&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Сдавала ГТО вместе с дочерью — нам обеим по 12 лет разницы, но обе получили серебряный значок. Это нас очень сблизило!",
    by: "Марина Петрова, серебряный значок 6 ступень",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaPetrova&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Золотой значок ГТО дал мне +5 баллов при поступлении в вуз. Но главное — я стала намного выносливее и увереннее в себе.",
    by: "Анна Козлова, студентка, золотой значок",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnnaKozlova&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Подтягивания давались труднее всего. Начинал с 3 раз, через 2 месяца делал 15. Сдал норматив с запасом — и почувствовал себя настоящим мужиком!",
    by: "Дмитрий Смирнов, бронзовый значок 5 ступень",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitrySmirnov&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Мне 52 года, и я получила серебряный значок ГТО. Доказала детям и себе: возраст — не приговор. Теперь готовлюсь к золоту!",
    by: "Елена Новикова, серебряный значок 9 ступень",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaNovikova&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Работодатель увидел значок ГТО в резюме и отдельно отметил это на собеседовании. Говорит, что это сразу показывает дисциплину и целеустремлённость.",
    by: "Алексей Морозов, золотой значок",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexeyMorozov&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Готовилась к ГТО полгода. Сбросила 8 кг, пробежала первую дистанцию 2 км без остановки. Серебро — это только начало!",
    by: "Айгуль Рахимова, серебряный значок 7 ступень",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AigulRahimova&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Всем классом решили сдать ГТО. Из 30 человек 24 получили значки. Учитель физкультуры гордится нами, и мы собой тоже!",
    by: "Ольга Ким, 11 класс, золотой значок",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaKim&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Стрельба из электронной винтовки — неожиданно любимый вид испытания. Никогда не думал, что у меня есть снайперский талант. ГТО открывает тебя заново!",
    by: "Наталья Соколова, золотой значок 5 ступень",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NataliyaSokolova&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Сдал ГТО в 65 лет. Мой врач говорит, что мои показатели здоровья как у 45-летнего. Программа ГТО — это не спорт, это образ жизни.",
    by: "Михаил Волков, золотой значок 11 ступень",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MikhailVolkov&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Плавание — мой слабый вид. Специально записалась в бассейн за 4 месяца до сдачи. В итоге выполнила норматив с первой попытки. Упорство работает!",
    by: "София Родригес, серебряный значок",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SofiaRodriguez&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Мой сын в 8 лет получил бронзовый значок ГТО. Видели бы вы его лицо, когда ему вручали значок! Это воспитывает характер с детства.",
    by: "Тимур Асланов, отец чемпиона",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TimurAslanov&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "Три года подряд сдаю ГТО на золото. Каждый год ставлю новую цель: улучшить результат хотя бы в одном виде. Это держит в тонусе круглый год.",
    by: "Нина Павлова, 3-кратный обладатель золота",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NinaPavlova&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Прыжок в длину — единственное, что не давалось. Смотрел видео, тренировался, просил совета у тренера. Сдал с третьей попытки — был счастлив как ребёнок!",
    by: "Роман Ким, бронзовый значок 6 ступень",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RomanKim&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Готовилась онлайн: видео, тренировки, таблицы нормативов. Всё нашла в интернете. Сдала с первого раза на серебро. Было проще, чем думала!",
    by: "Екатерина Орлова, серебряный значок 8 ступень",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EkaterinaOrlova&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "После травмы колена думал, что спорт закончился. ГТО стало стимулом восстановиться. Получил бронзу — для меня это лучше любого золота.",
    by: "Даниил Пак, бронзовый значок, история возвращения",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DaniilPak&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Наш отдел на работе поспорил — кто больше получит значков ГТО. В итоге сдали все 12 человек. Корпоративный дух на максимуме!",
    by: "Раиса Гринько, организатор корпоративного ГТО",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RaisaGrin&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "Гибкость — наклон вперёд — оказалась моей сильной стороной. В остальном пришлось потрудиться. Но именно в ГТО понял, какой я спортсмен на самом деле.",
    by: "Кирилл Вонг, золотой значок 4 ступень",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KirillVong&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Сдавала ГТО беременной — во втором триместре, с разрешения врача. Получила справку и сдала адаптированные нормативы. ГТО для каждого!",
    by: "Александра Фостер, серебряный значок",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexandraFoster&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "Впервые взял в руки лыжи специально ради ГТО. Тренер научил за 5 занятий. Сдал норматив и теперь хожу на лыжах каждые выходные зимой.",
    by: "Карлос Менделеев, бронзовый значок 5 ступень",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=CarlosMendez&backgroundColor=0891b2&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}