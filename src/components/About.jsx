import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="booking" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-coffee-brown">Как это работает</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8">
              <div className="w-12 h-12 bg-coffee-brown/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-coffee-brown font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-coffee-brown">Выберите время</h3>
              <p className="text-coffee-dark/80">Откройте форму бронирования и выберите удобную дату и время. Мы покажем доступные часы.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8">
              <div className="w-12 h-12 bg-coffee-brown/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-coffee-brown font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-coffee-brown">Заполните данные</h3>
              <p className="text-coffee-dark/80">Укажите ваше имя, телефон и количество гостей. Мы отправим подтверждение на почту.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8">
              <div className="w-12 h-12 bg-coffee-brown/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-coffee-brown font-bold text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-coffee-brown">Приходите!</h3>
              <p className="text-coffee-dark/80">Ваш столик зарезервирован. Приходите в назначенное время и наслаждайтесь кофе.</p>
            </motion.div>
          </div>
          <div>
            <img src="https://source.unsplash.com/800x600/?coffee-table,cafe" alt="Бронирование столика" className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}