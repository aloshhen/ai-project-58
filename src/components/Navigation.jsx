import React from 'react'
import { cn } from '../utils'

export default function Navigation() {
  return (
    <nav className="glass fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-coffee-brown">Аромат</div>
        <div className="space-x-8">
          <a href="#" className="hover:text-coffee-dark transition-colors">Главная</a>
          <a href="#menu" className="hover:text-coffee-dark transition-colors">Меню</a>
          <a href="#booking" className="hover:text-coffee-dark transition-colors">Бронирование</a>
        </div>
      </div>
    </nav>
  )
}