import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

interface IframeEmbedProps {
  src: string
  title: string
  height?: number
}

export default function IframeEmbed({ src, title, height = 900 }: IframeEmbedProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-50" style={{ height }}>
      {/* Loader */}
      <AnimatePresence>
        {!loaded && !error && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-gray-50"
          >
            {/* Animated rings */}
            <div className="relative w-20 h-20">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-gray-200"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-t-gray-900 border-r-transparent border-b-transparent border-l-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-gray-400 border-b-transparent border-l-transparent"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Trophy" size={20} className="text-gray-900" />
              </div>
            </div>

            {/* Pulse dots */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gray-900"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>

            <p className="text-sm font-semibold text-gray-500 tracking-wide">Загружаем нормативы...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-gray-50 px-8 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
            <Icon name="ExternalLink" size={28} className="text-gray-500" />
          </div>
          <div>
            <p className="font-black text-gray-900 text-lg mb-1">Сайт ограничивает встраивание</p>
            <p className="text-gray-500 text-sm mb-4">Откройте страницу напрямую</p>
          </div>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            <Icon name="ExternalLink" size={16} />
            Открыть на сайте
          </a>
        </div>
      )}

      {/* Iframe */}
      <iframe
        src={src}
        title={title}
        className="w-full h-full border-none"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
      />
    </div>
  )
}
