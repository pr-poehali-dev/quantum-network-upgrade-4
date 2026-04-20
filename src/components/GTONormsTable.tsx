import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

type Medal = "bronze" | "silver" | "gold"
type Gender = "male" | "female"

interface NormValue {
  bronze: string
  silver: string
  gold: string
}

interface TestItem {
  name: string
  unit: string
  note?: string
  male: NormValue
  female: NormValue
}

interface Stage {
  stage: number
  ageGroup: string
  label: string
  tests: TestItem[]
}

const stages: Stage[] = [
  {
    stage: 4,
    ageGroup: "16–17 лет",
    label: "IV ступень",
    tests: [
      {
        name: "Бег 100 м",
        unit: "сек",
        male: { bronze: "14,6", silver: "14,3", gold: "13,8" },
        female: { bronze: "17,6", silver: "17,0", gold: "16,0" },
      },
      {
        name: "Бег 2 км",
        unit: "мин:сек",
        male: { bronze: "10:00", silver: "9:30", gold: "8:35" },
        female: { bronze: "12:00", silver: "11:20", gold: "10:00" },
      },
      {
        name: "Подтягивания из виса",
        unit: "раз",
        note: "Муж. — из виса, жен. — из виса лёжа",
        male: { bronze: "6", silver: "9", gold: "13" },
        female: { bronze: "9", silver: "12", gold: "18" },
      },
      {
        name: "Сгибание рук в упоре лёжа",
        unit: "раз",
        male: { bronze: "24", silver: "32", gold: "42" },
        female: { bronze: "10", silver: "14", gold: "20" },
      },
      {
        name: "Наклон вперёд стоя",
        unit: "см",
        male: { bronze: "6", silver: "8", gold: "13" },
        female: { bronze: "13", silver: "16", gold: "20" },
      },
      {
        name: "Прыжок в длину с места",
        unit: "см",
        male: { bronze: "200", silver: "210", gold: "230" },
        female: { bronze: "160", silver: "170", gold: "185" },
      },
      {
        name: "Плавание 50 м",
        unit: "мин:сек",
        male: { bronze: "без вр.", silver: "1:05", gold: "0:52" },
        female: { bronze: "без вр.", silver: "1:15", gold: "1:00" },
      },
    ],
  },
  {
    stage: 5,
    ageGroup: "18–24 лет",
    label: "V ступень",
    tests: [
      {
        name: "Бег 100 м",
        unit: "сек",
        male: { bronze: "15,1", silver: "14,8", gold: "13,9" },
        female: { bronze: "18,0", silver: "17,5", gold: "16,5" },
      },
      {
        name: "Бег 3 км",
        unit: "мин:сек",
        male: { bronze: "14:00", silver: "13:30", gold: "12:35" },
        female: { bronze: "—", silver: "—", gold: "—" },
      },
      {
        name: "Бег 2 км",
        unit: "мин:сек",
        male: { bronze: "—", silver: "—", gold: "—" },
        female: { bronze: "13:00", silver: "12:20", gold: "11:00" },
      },
      {
        name: "Подтягивания из виса",
        unit: "раз",
        note: "Муж. — из виса, жен. — из виса лёжа",
        male: { bronze: "7", silver: "10", gold: "15" },
        female: { bronze: "9", silver: "12", gold: "18" },
      },
      {
        name: "Сгибание рук в упоре лёжа",
        unit: "раз",
        male: { bronze: "27", silver: "35", gold: "47" },
        female: { bronze: "10", silver: "14", gold: "20" },
      },
      {
        name: "Наклон вперёд стоя",
        unit: "см",
        male: { bronze: "6", silver: "8", gold: "13" },
        female: { bronze: "13", silver: "16", gold: "21" },
      },
      {
        name: "Прыжок в длину с места",
        unit: "см",
        male: { bronze: "210", silver: "220", gold: "240" },
        female: { bronze: "160", silver: "170", gold: "185" },
      },
      {
        name: "Плавание 50 м",
        unit: "мин:сек",
        male: { bronze: "без вр.", silver: "1:05", gold: "0:50" },
        female: { bronze: "без вр.", silver: "1:15", gold: "1:00" },
      },
    ],
  },
  {
    stage: 6,
    ageGroup: "25–29 лет",
    label: "VI ступень",
    tests: [
      {
        name: "Бег 100 м",
        unit: "сек",
        male: { bronze: "15,5", silver: "15,1", gold: "14,3" },
        female: { bronze: "19,0", silver: "18,0", gold: "17,0" },
      },
      {
        name: "Бег 3 км",
        unit: "мин:сек",
        male: { bronze: "14:30", silver: "13:50", gold: "13:00" },
        female: { bronze: "—", silver: "—", gold: "—" },
      },
      {
        name: "Бег 2 км",
        unit: "мин:сек",
        male: { bronze: "—", silver: "—", gold: "—" },
        female: { bronze: "13:30", silver: "12:45", gold: "11:30" },
      },
      {
        name: "Подтягивания из виса",
        unit: "раз",
        note: "Муж. — из виса, жен. — из виса лёжа",
        male: { bronze: "6", silver: "9", gold: "13" },
        female: { bronze: "7", silver: "10", gold: "14" },
      },
      {
        name: "Сгибание рук в упоре лёжа",
        unit: "раз",
        male: { bronze: "23", silver: "30", gold: "40" },
        female: { bronze: "9", silver: "12", gold: "17" },
      },
      {
        name: "Наклон вперёд стоя",
        unit: "см",
        male: { bronze: "5", silver: "7", gold: "11" },
        female: { bronze: "11", silver: "14", gold: "18" },
      },
      {
        name: "Прыжок в длину с места",
        unit: "см",
        male: { bronze: "200", silver: "215", gold: "235" },
        female: { bronze: "155", silver: "165", gold: "180" },
      },
      {
        name: "Плавание 50 м",
        unit: "мин:сек",
        male: { bronze: "без вр.", silver: "1:10", gold: "0:55" },
        female: { bronze: "без вр.", silver: "1:20", gold: "1:05" },
      },
    ],
  },
  {
    stage: 7,
    ageGroup: "30–34 лет",
    label: "VII ступень",
    tests: [
      {
        name: "Бег 60 м",
        unit: "сек",
        male: { bronze: "9,9", silver: "9,4", gold: "8,9" },
        female: { bronze: "11,8", silver: "11,2", gold: "10,5" },
      },
      {
        name: "Бег 3 км",
        unit: "мин:сек",
        male: { bronze: "15:00", silver: "14:30", gold: "13:30" },
        female: { bronze: "—", silver: "—", gold: "—" },
      },
      {
        name: "Бег 2 км",
        unit: "мин:сек",
        male: { bronze: "—", silver: "—", gold: "—" },
        female: { bronze: "14:00", silver: "13:15", gold: "12:00" },
      },
      {
        name: "Подтягивания из виса",
        unit: "раз",
        note: "Муж. — из виса, жен. — из виса лёжа",
        male: { bronze: "5", silver: "8", gold: "11" },
        female: { bronze: "6", silver: "9", gold: "13" },
      },
      {
        name: "Сгибание рук в упоре лёжа",
        unit: "раз",
        male: { bronze: "20", silver: "27", gold: "37" },
        female: { bronze: "8", silver: "11", gold: "16" },
      },
      {
        name: "Наклон вперёд стоя",
        unit: "см",
        male: { bronze: "5", silver: "7", gold: "11" },
        female: { bronze: "11", silver: "14", gold: "18" },
      },
      {
        name: "Прыжок в длину с места",
        unit: "см",
        male: { bronze: "195", silver: "210", gold: "225" },
        female: { bronze: "150", silver: "160", gold: "175" },
      },
      {
        name: "Плавание 50 м",
        unit: "мин:сек",
        male: { bronze: "без вр.", silver: "1:15", gold: "1:00" },
        female: { bronze: "без вр.", silver: "1:25", gold: "1:10" },
      },
    ],
  },
]

const medalConfig: Record<Medal, { label: string; bg: string; text: string; icon: string }> = {
  bronze: { label: "Бронза", bg: "bg-amber-700/10", text: "text-amber-700", icon: "Award" },
  silver: { label: "Серебро", bg: "bg-gray-400/10", text: "text-gray-500", icon: "Award" },
  gold: { label: "Золото", bg: "bg-yellow-500/10", text: "text-yellow-600", icon: "Trophy" },
}

export default function GTONormsTable() {
  const [activeStage, setActiveStage] = useState(0)
  const [gender, setGender] = useState<Gender>("male")
  const [activeMedal, setActiveMedal] = useState<Medal | "all">("all")

  const currentStage = stages[activeStage]

  const medals: Medal[] = ["bronze", "silver", "gold"]

  return (
    <section id="norms" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-4">
            НОРМАТИВЫ{" "}
            <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">ГТО</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Узнай, что нужно выполнить для получения знака отличия в твоей возрастной группе
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 mb-8"
        >
          {/* Stage selector */}
          <div className="flex flex-wrap justify-center gap-2">
            {stages.map((s, idx) => (
              <button
                key={s.stage}
                onClick={() => setActiveStage(idx)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 border ${
                  activeStage === idx
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                {s.label} <span className="opacity-70">({s.ageGroup})</span>
              </button>
            ))}
          </div>

          {/* Gender + Medal filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {/* Gender */}
            <div className="flex rounded-full border border-gray-200 bg-white overflow-hidden">
              <button
                onClick={() => setGender("male")}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  gender === "male" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon name="User" size={14} />
                Мужчины
              </button>
              <button
                onClick={() => setGender("female")}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  gender === "female" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon name="User" size={14} />
                Женщины
              </button>
            </div>

            {/* Medal filter */}
            <div className="flex rounded-full border border-gray-200 bg-white overflow-hidden">
              <button
                onClick={() => setActiveMedal("all")}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeMedal === "all" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Все знаки
              </button>
              {medals.map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMedal(m)}
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    activeMedal === m
                      ? "bg-gray-900 text-white"
                      : `${medalConfig[m].text} hover:bg-gray-50`
                  }`}
                >
                  <Icon name="Award" size={14} />
                  {medalConfig[m].label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          key={`${activeStage}-${gender}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left px-5 py-4 font-semibold tracking-wide w-1/3">Вид испытания</th>
                {(activeMedal === "all" ? medals : [activeMedal as Medal]).map((m) => (
                  <th key={m} className={`px-5 py-4 font-semibold tracking-wide text-center`}>
                    <span className={`inline-flex items-center gap-1.5 ${
                      m === "gold" ? "text-yellow-400" : m === "silver" ? "text-gray-300" : "text-amber-500"
                    }`}>
                      <Icon name={m === "gold" ? "Trophy" : "Award"} size={14} />
                      {medalConfig[m].label}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentStage.tests.map((test, idx) => {
                const vals = gender === "male" ? test.male : test.female
                const visibleMedals = activeMedal === "all" ? medals : [activeMedal as Medal]
                return (
                  <tr
                    key={test.name}
                    className={`border-t border-gray-100 transition-colors hover:bg-gray-50 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-5 py-4">
                      <div className="font-semibold text-gray-900">{test.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">
                        {test.note ? test.note : `Единица: ${test.unit}`}
                      </div>
                    </td>
                    {visibleMedals.map((m) => (
                      <td key={m} className={`px-5 py-4 text-center`}>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${medalConfig[m].bg} ${medalConfig[m].text}`}>
                          {vals[m] === "—" ? (
                            <span className="text-gray-300 font-normal">—</span>
                          ) : (
                            <>
                              {vals[m]}
                              {vals[m] !== "без вр." && (
                                <span className="ml-1 text-xs font-normal opacity-60">{test.unit}</span>
                              )}
                            </>
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-400 mt-6"
        >
          Нормативы приведены в ознакомительных целях. Актуальные данные — на официальном сайте{" "}
          <a
            href="https://www.gto.gov.ru/norms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600 transition-colors"
          >
            gto.gov.ru
          </a>
        </motion.p>
      </div>
    </section>
  )
}
