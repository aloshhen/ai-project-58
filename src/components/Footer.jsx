import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-coffee-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Аромат</h3>
            <p className="text-coffee-cream/80">Уютная кофейня с ручным помолом и ароматными десертами</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="mb-2">ул. Кофейная, 12</p>
            <p className="mb-2">+7 (495) 123-45-67</p>
            <p>coffee@aroma.ru</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Режим работы</h3>
            <p className="mb-2">Пн-Вс: 9:00 - 22:00</p>
            <p>Без перерыва</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-coffee-cream/20 text-center text-coffee-cream/70">
          <p>© 2024 Аромат. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}