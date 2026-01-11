import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img src="https://source.unsplash.com/1600x900/?coffee,cafe" alt="Кофейня" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-brown/90 to-coffee-dark/90"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Настоящий кофе
            <span className="text-coffee-cream">в каждом глотке</span>
          </h1>
          <p className="text-xl mb-10">Ручной помол, ароматные смеси и уютная атмосфера. Бронируйте столик заранее.</p>
          <div className="space-x-4">
            <a href="#booking" className="bg-coffee-cream text-coffee-brown px-8 py-3 rounded-full font-medium hover:bg-coffee-beige transition-colors">
              Забронировать столик
            </a>
            <a href="#menu" className="border-2 border-coffee-cream text-coffee-cream px-8 py-3 rounded-full font-medium hover:bg-coffee-cream/20 transition-colors">
              Посмотреть меню
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}