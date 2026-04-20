import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

type Gender = "male" | "female"

interface Norm {
  bronze: string
  silver: string
  gold: string
  unit: string
}

interface StageData {
  age: string
  tests: Record<string, Norm>
}

const data: Record<Gender, StageData[]> = {
  male: [
    {
      age: "6–7 лет (I ступень)",
      tests: {
        "Бег 30 м": { bronze: "6,5", silver: "6,1", gold: "5,8", unit: "сек" },
        "Прыжок в длину с места": { bronze: "95", silver: "110", gold: "120", unit: "см" },
        "Метание мяча 150 г": { bronze: "12", silver: "15", gold: "17", unit: "м" },
        "Сгибание рук в упоре": { bronze: "5", silver: "7", gold: "10", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "2", silver: "4", gold: "6", unit: "см" },
        "Бег на лыжах 1 км": { bronze: "8:00", silver: "7:30", gold: "7:00", unit: "мин" },
      },
    },
    {
      age: "8–9 лет (II ступень)",
      tests: {
        "Бег 30 м": { bronze: "6,2", silver: "5,8", gold: "5,4", unit: "сек" },
        "Прыжок в длину с места": { bronze: "110", silver: "125", gold: "140", unit: "см" },
        "Метание мяча 150 г": { bronze: "15", silver: "20", gold: "25", unit: "м" },
        "Подтягивания из виса": { bronze: "2", silver: "3", gold: "5", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "3", silver: "5", gold: "7", unit: "см" },
        "Бег на лыжах 1 км": { bronze: "7:30", silver: "7:00", gold: "6:30", unit: "мин" },
        "Плавание 25 м": { bronze: "без вр.", silver: "без вр.", gold: "0:40", unit: "" },
      },
    },
    {
      age: "10–11 лет (III ступень)",
      tests: {
        "Бег 60 м": { bronze: "11,0", silver: "10,5", gold: "10,0", unit: "сек" },
        "Прыжок в длину с места": { bronze: "130", silver: "145", gold: "160", unit: "см" },
        "Метание мяча 150 г": { bronze: "25", silver: "30", gold: "35", unit: "м" },
        "Подтягивания из виса": { bronze: "3", silver: "5", gold: "7", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "4", silver: "6", gold: "9", unit: "см" },
        "Бег на лыжах 2 км": { bronze: "13:00", silver: "12:30", gold: "12:00", unit: "мин" },
        "Плавание 25 м": { bronze: "без вр.", silver: "0:50", gold: "0:40", unit: "" },
      },
    },
    {
      age: "12–13 лет (IV ступень)",
      tests: {
        "Бег 60 м": { bronze: "10,0", silver: "9,5", gold: "9,0", unit: "сек" },
        "Бег 1500 м": { bronze: "8:00", silver: "7:30", gold: "7:00", unit: "мин" },
        "Прыжок в длину с места": { bronze: "150", silver: "165", gold: "180", unit: "см" },
        "Подтягивания из виса": { bronze: "4", silver: "6", gold: "9", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "5", silver: "7", gold: "10", unit: "см" },
        "Бег на лыжах 2 км": { bronze: "12:30", silver: "12:00", gold: "11:00", unit: "мин" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:20", gold: "1:05", unit: "" },
      },
    },
    {
      age: "14–15 лет (V ступень)",
      tests: {
        "Бег 60 м": { bronze: "9,5", silver: "9,0", gold: "8,5", unit: "сек" },
        "Бег 2 км": { bronze: "10:30", silver: "10:00", gold: "9:00", unit: "мин" },
        "Прыжок в длину с места": { bronze: "170", silver: "185", gold: "200", unit: "см" },
        "Подтягивания из виса": { bronze: "5", silver: "7", gold: "10", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "6", silver: "8", gold: "11", unit: "см" },
        "Бег на лыжах 3 км": { bronze: "17:00", silver: "16:30", gold: "15:30", unit: "мин" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:10", gold: "0:57", unit: "" },
      },
    },
    {
      age: "16–17 лет (VI ступень)",
      tests: {
        "Бег 100 м": { bronze: "14,6", silver: "14,3", gold: "13,8", unit: "сек" },
        "Бег 3 км": { bronze: "14:00", silver: "13:30", gold: "12:35", unit: "мин" },
        "Прыжок в длину с места": { bronze: "200", silver: "210", gold: "230", unit: "см" },
        "Подтягивания из виса": { bronze: "6", silver: "9", gold: "13", unit: "раз" },
        "Сгибание рук в упоре лёжа": { bronze: "24", silver: "32", gold: "42", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "6", silver: "8", gold: "13", unit: "см" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:05", gold: "0:52", unit: "" },
        "Бег на лыжах 5 км": { bronze: "28:00", silver: "26:00", gold: "24:00", unit: "мин" },
      },
    },
    {
      age: "18–24 лет (VII ступень)",
      tests: {
        "Бег 100 м": { bronze: "15,1", silver: "14,8", gold: "13,9", unit: "сек" },
        "Бег 3 км": { bronze: "14:00", silver: "13:30", gold: "12:35", unit: "мин" },
        "Прыжок в длину с места": { bronze: "210", silver: "220", gold: "240", unit: "см" },
        "Подтягивания из виса": { bronze: "7", silver: "10", gold: "15", unit: "раз" },
        "Сгибание рук в упоре лёжа": { bronze: "27", silver: "35", gold: "47", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "6", silver: "8", gold: "13", unit: "см" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:05", gold: "0:50", unit: "" },
        "Бег на лыжах 5 км": { bronze: "26:00", silver: "25:00", gold: "23:00", unit: "мин" },
      },
    },
    {
      age: "25–29 лет (VIII ступень)",
      tests: {
        "Бег 100 м": { bronze: "15,5", silver: "15,1", gold: "14,3", unit: "сек" },
        "Бег 3 км": { bronze: "14:30", silver: "13:50", gold: "13:00", unit: "мин" },
        "Прыжок в длину с места": { bronze: "200", silver: "215", gold: "235", unit: "см" },
        "Подтягивания из виса": { bronze: "6", silver: "9", gold: "13", unit: "раз" },
        "Сгибание рук в упоре лёжа": { bronze: "23", silver: "30", gold: "40", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "5", silver: "7", gold: "11", unit: "см" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:10", gold: "0:55", unit: "" },
        "Бег на лыжах 5 км": { bronze: "27:00", silver: "26:00", gold: "24:00", unit: "мин" },
      },
    },
    {
      age: "30–34 лет (IX ступень)",
      tests: {
        "Бег 60 м": { bronze: "9,9", silver: "9,4", gold: "8,9", unit: "сек" },
        "Бег 3 км": { bronze: "15:00", silver: "14:30", gold: "13:30", unit: "мин" },
        "Прыжок в длину с места": { bronze: "195", silver: "210", gold: "225", unit: "см" },
        "Подтягивания из виса": { bronze: "5", silver: "8", gold: "11", unit: "раз" },
        "Сгибание рук в упоре лёжа": { bronze: "20", silver: "27", gold: "37", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "5", silver: "7", gold: "11", unit: "см" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:15", gold: "1:00", unit: "" },
      },
    },
    {
      age: "35–39 лет (X ступень)",
      tests: {
        "Бег 60 м": { bronze: "10,5", silver: "10,0", gold: "9,4", unit: "сек" },
        "Бег 3 км": { bronze: "16:00", silver: "15:30", gold: "14:30", unit: "мин" },
        "Прыжок в длину с места": { bronze: "185", silver: "200", gold: "215", unit: "см" },
        "Подтягивания из виса": { bronze: "4", silver: "7", gold: "10", unit: "раз" },
        "Сгибание рук в упоре лёжа": { bronze: "17", silver: "24", gold: "32", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "5", silver: "7", gold: "10", unit: "см" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:20", gold: "1:05", unit: "" },
      },
    },
  ],
  female: [
    {
      age: "6–7 лет (I ступень)",
      tests: {
        "Бег 30 м": { bronze: "7,0", silver: "6,5", gold: "6,2", unit: "сек" },
        "Прыжок в длину с места": { bronze: "85", silver: "100", gold: "115", unit: "см" },
        "Метание мяча 150 г": { bronze: "8", silver: "10", gold: "13", unit: "м" },
        "Сгибание рук в упоре": { bronze: "3", silver: "5", gold: "7", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "4", silver: "6", gold: "8", unit: "см" },
        "Бег на лыжах 1 км": { bronze: "8:30", silver: "8:00", gold: "7:30", unit: "мин" },
      },
    },
    {
      age: "8–9 лет (II ступень)",
      tests: {
        "Бег 30 м": { bronze: "6,6", silver: "6,2", gold: "5,8", unit: "сек" },
        "Прыжок в длину с места": { bronze: "100", silver: "115", gold: "130", unit: "см" },
        "Метание мяча 150 г": { bronze: "9", silver: "12", gold: "16", unit: "м" },
        "Подтягивания из виса лёжа": { bronze: "4", silver: "6", gold: "9", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "5", silver: "7", gold: "9", unit: "см" },
        "Бег на лыжах 1 км": { bronze: "8:00", silver: "7:30", gold: "7:00", unit: "мин" },
      },
    },
    {
      age: "10–11 лет (III ступень)",
      tests: {
        "Бег 60 м": { bronze: "11,5", silver: "11,0", gold: "10,5", unit: "сек" },
        "Прыжок в длину с места": { bronze: "120", silver: "135", gold: "150", unit: "см" },
        "Метание мяча 150 г": { bronze: "13", silver: "17", gold: "21", unit: "м" },
        "Подтягивания из виса лёжа": { bronze: "6", silver: "9", gold: "13", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "6", silver: "8", gold: "11", unit: "см" },
        "Бег на лыжах 2 км": { bronze: "14:00", silver: "13:30", gold: "13:00", unit: "мин" },
        "Плавание 25 м": { bronze: "без вр.", silver: "0:55", gold: "0:45", unit: "" },
      },
    },
    {
      age: "12–13 лет (IV ступень)",
      tests: {
        "Бег 60 м": { bronze: "10,5", silver: "10,0", gold: "9,5", unit: "сек" },
        "Бег 1500 м": { bronze: "9:00", silver: "8:30", gold: "8:00", unit: "мин" },
        "Прыжок в длину с места": { bronze: "140", silver: "155", gold: "170", unit: "см" },
        "Подтягивания из виса лёжа": { bronze: "8", silver: "11", gold: "15", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "8", silver: "10", gold: "13", unit: "см" },
        "Бег на лыжах 2 км": { bronze: "13:30", silver: "13:00", gold: "12:00", unit: "мин" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:30", gold: "1:15", unit: "" },
      },
    },
    {
      age: "14–15 лет (V ступень)",
      tests: {
        "Бег 60 м": { bronze: "10,0", silver: "9,7", gold: "9,3", unit: "сек" },
        "Бег 2 км": { bronze: "12:00", silver: "11:30", gold: "10:30", unit: "мин" },
        "Прыжок в длину с места": { bronze: "155", silver: "165", gold: "180", unit: "см" },
        "Подтягивания из виса лёжа": { bronze: "9", silver: "12", gold: "17", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "9", silver: "12", gold: "16", unit: "см" },
        "Бег на лыжах 3 км": { bronze: "19:00", silver: "18:30", gold: "17:30", unit: "мин" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:20", gold: "1:05", unit: "" },
      },
    },
    {
      age: "16–17 лет (VI ступень)",
      tests: {
        "Бег 100 м": { bronze: "17,6", silver: "17,0", gold: "16,0", unit: "сек" },
        "Бег 2 км": { bronze: "12:00", silver: "11:20", gold: "10:00", unit: "мин" },
        "Прыжок в длину с места": { bronze: "160", silver: "170", gold: "185", unit: "см" },
        "Подтягивания из виса лёжа": { bronze: "9", silver: "12", gold: "18", unit: "раз" },
        "Сгибание рук в упоре лёжа": { bronze: "10", silver: "14", gold: "20", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "13", silver: "16", gold: "20", unit: "см" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:15", gold: "1:00", unit: "" },
      },
    },
    {
      age: "18–24 лет (VII ступень)",
      tests: {
        "Бег 100 м": { bronze: "18,0", silver: "17,5", gold: "16,5", unit: "сек" },
        "Бег 2 км": { bronze: "13:00", silver: "12:20", gold: "11:00", unit: "мин" },
        "Прыжок в длину с места": { bronze: "160", silver: "170", gold: "185", unit: "см" },
        "Подтягивания из виса лёжа": { bronze: "9", silver: "12", gold: "18", unit: "раз" },
        "Сгибание рук в упоре лёжа": { bronze: "10", silver: "14", gold: "20", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "13", silver: "16", gold: "21", unit: "см" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:15", gold: "1:00", unit: "" },
      },
    },
    {
      age: "25–29 лет (VIII ступень)",
      tests: {
        "Бег 100 м": { bronze: "19,0", silver: "18,0", gold: "17,0", unit: "сек" },
        "Бег 2 км": { bronze: "13:30", silver: "12:45", gold: "11:30", unit: "мин" },
        "Прыжок в длину с места": { bronze: "155", silver: "165", gold: "180", unit: "см" },
        "Подтягивания из виса лёжа": { bronze: "7", silver: "10", gold: "14", unit: "раз" },
        "Сгибание рук в упоре лёжа": { bronze: "9", silver: "12", gold: "17", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "11", silver: "14", gold: "18", unit: "см" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:20", gold: "1:05", unit: "" },
      },
    },
    {
      age: "30–34 лет (IX ступень)",
      tests: {
        "Бег 60 м": { bronze: "11,8", silver: "11,2", gold: "10,5", unit: "сек" },
        "Бег 2 км": { bronze: "14:00", silver: "13:15", gold: "12:00", unit: "мин" },
        "Прыжок в длину с места": { bronze: "150", silver: "160", gold: "175", unit: "см" },
        "Подтягивания из виса лёжа": { bronze: "6", silver: "9", gold: "13", unit: "раз" },
        "Сгибание рук в упоре лёжа": { bronze: "8", silver: "11", gold: "16", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "11", silver: "14", gold: "18", unit: "см" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:25", gold: "1:10", unit: "" },
      },
    },
    {
      age: "35–39 лет (X ступень)",
      tests: {
        "Бег 60 м": { bronze: "12,5", silver: "11,8", gold: "11,0", unit: "сек" },
        "Бег 2 км": { bronze: "15:00", silver: "14:00", gold: "13:00", unit: "мин" },
        "Прыжок в длину с места": { bronze: "140", silver: "150", gold: "165", unit: "см" },
        "Подтягивания из виса лёжа": { bronze: "5", silver: "8", gold: "11", unit: "раз" },
        "Сгибание рук в упоре лёжа": { bronze: "6", silver: "9", gold: "13", unit: "раз" },
        "Наклон вперёд стоя": { bronze: "10", silver: "13", gold: "17", unit: "см" },
        "Плавание 50 м": { bronze: "без вр.", silver: "1:30", gold: "1:15", unit: "" },
      },
    },
  ],
}

const medalColors = {
  bronze: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", badge: "bg-amber-100", icon: "🥉" },
  silver: { bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-600", badge: "bg-gray-100", icon: "🥈" },
  gold: { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700", badge: "bg-yellow-100", icon: "🥇" },
}

export default function GTOCalculator() {
  const [gender, setGender] = useState<Gender>("male")
  const [stageIdx, setStageIdx] = useState<number | null>(null)
  const [test, setTest] = useState<string | null>(null)

  const stages = data[gender]
  const currentStage = stageIdx !== null ? stages[stageIdx] : null
  const tests = currentStage ? Object.keys(currentStage.tests) : []
  const result = currentStage && test ? currentStage.tests[test] : null

  const handleGender = (g: Gender) => {
    setGender(g)
    setStageIdx(null)
    setTest(null)
  }

  const handleStage = (idx: number) => {
    setStageIdx(idx)
    setTest(null)
  }

  return (
    <section id="calculator" className="relative py-20 bg-gray-950">
      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-wider text-white mb-4">
            КАЛЬКУЛЯТОР
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            Выбери пол, возраст и вид испытания — узнай свой норматив
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Шаг 1: Пол */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
          >
            <div className="text-xs font-black text-gray-500 tracking-widest mb-4">ШАГ 1 — ПОЛ</div>
            <div className="grid grid-cols-2 gap-3">
              {(["male", "female"] as Gender[]).map((g) => (
                <button
                  key={g}
                  onClick={() => handleGender(g)}
                  className={`flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base transition-all duration-200 border-2 ${
                    gender === g
                      ? "bg-white text-gray-900 border-white"
                      : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500"
                  }`}
                >
                  <Icon name="User" size={20} />
                  {g === "male" ? "Мужчина" : "Женщина"}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Шаг 2: Возраст */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
          >
            <div className="text-xs font-black text-gray-500 tracking-widest mb-4">ШАГ 2 — ВОЗРАСТНАЯ ГРУППА</div>
            <div className="grid grid-cols-2 gap-2">
              {stages.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleStage(idx)}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 border text-left ${
                    stageIdx === idx
                      ? "bg-white text-gray-900 border-white"
                      : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500"
                  }`}
                >
                  {s.age}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Шаг 3: Вид испытания */}
          <AnimatePresence>
            {currentStage && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
              >
                <div className="text-xs font-black text-gray-500 tracking-widest mb-4">ШАГ 3 — ВИД ИСПЫТАНИЯ</div>
                <div className="grid grid-cols-1 gap-2">
                  {tests.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTest(t)}
                      className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 border text-left ${
                        test === t
                          ? "bg-white text-gray-900 border-white"
                          : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Результат */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-xs font-black text-gray-500 tracking-widest mb-4 text-center">РЕЗУЛЬТАТ</div>
                <div className="grid grid-cols-3 gap-3">
                  {(["bronze", "silver", "gold"] as const).map((medal) => (
                    <motion.div
                      key={medal}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: medal === "bronze" ? 0 : medal === "silver" ? 0.08 : 0.16 }}
                      className={`rounded-2xl p-5 border-2 text-center ${medalColors[medal].bg} ${medalColors[medal].border}`}
                    >
                      <div className="text-3xl mb-2">{medalColors[medal].icon}</div>
                      <div className={`text-xs font-black tracking-widest mb-3 ${medalColors[medal].text}`}>
                        {medal === "bronze" ? "БРОНЗА" : medal === "silver" ? "СЕРЕБРО" : "ЗОЛОТО"}
                      </div>
                      <div className={`text-2xl font-black ${medalColors[medal].text}`}>
                        {result[medal]}
                      </div>
                      {result.unit && (
                        <div className={`text-xs mt-1 ${medalColors[medal].text} opacity-70`}>{result.unit}</div>
                      )}
                    </motion.div>
                  ))}
                </div>
                <p className="text-center text-xs text-gray-600 mt-4">
                  Нормативы носят ознакомительный характер. Актуальные данные на{" "}
                  <a href="https://www.gto.gov.ru" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">
                    gto.gov.ru
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
