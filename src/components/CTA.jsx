import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-coffee-brown">
      <div className="container mx-auto px-4">
        <div className="bg-coffee-cream/80 backdrop-blur-xl rounded-3xl p-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-coffee-brown">
            Готовы попробовать
            <span className="text-coffee-cream">настоящий кофе?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-10 text-coffee-dark">
            Мы ждем вас каждый день с 9:00 до 22:00
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#booking"
            className="bg-coffee-cream text-coffee-brown px-10 py-4 rounded-full font-medium text-lg hover:bg-coffee-beige transition-colors">
            Забронировать столик
          </motion.a>
        </div>
      </div>
    </section>
  )
}