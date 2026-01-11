import React from 'react'
import { motion } from 'framer-motion'
import { Coffee, Utensils, Calendar, Sparkles } from 'lucide-react'

export default function Features() {
  return (
    <section id="menu" className="py-24 bg-coffee-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-coffee-brown">Наше меню</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-coffee-brown/20">
            <div className="w-12 h-12 bg-coffee-brown/20 rounded-full flex items-center justify-center mb-4">
              <Coffee className="w-6 h-6 text-coffee-brown" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-coffee-brown">Кофе</h3>
            <p className="text-coffee-dark/80">Ручной помол, 12 видов арабики, латте арт от профессионалов. Вкус, который запомнится.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-coffee-brown/20">
            <div className="w-12 h-12 bg-coffee-brown/20 rounded-full flex items-center justify-center mb-4">
              <Utensils className="w-6 h-6 text-coffee-brown" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-coffee-brown">Десерты</h3>
            <p className="text-coffee-dark/80">Пирожные, тарталетки, брауни и другие сладкие изыски. Всё домашнее и свежее.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-coffee-brown/20">
            <div className="w-12 h-12 bg-coffee-brown/20 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-coffee-brown" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-coffee-brown">Бронирование</h3>
            <p className="text-coffee-dark/80">Выберите удобное время и дату. Мы зарезервируем столик, чтобы вы не ждали.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}