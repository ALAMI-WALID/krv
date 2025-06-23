import React from 'react'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Barre en haut */}
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Besoin d’un devis ? C’est gratuit, et c’est tout près.
        </p>

        {/* Navigation principale */}
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-gray-200"
        >
          <div className="flex h-16 items-center">
            {/* Bouton menu mobile */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="/">
                <span className="sr-only">Your Company</span>
                <img
                  alt="PRIMOR COLORS"
                  src="/images/logovf.png"
                  className="h-8 w-auto"
                  id="logoOne"
                />
              </a>
            </div>

            {/* Liens Desktop */}
            <div className="hidden lg:flex lg:ml-8 lg:space-x-8">
              <a
                href="/#services"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                Services
              </a>
              <a
                href="/#tarifs"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                Tarifs
              </a>
              <a
                href="/#contact"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                Contact
              </a>
              <a
                href="/devis"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                Devis
              </a>
            </div>

            {/* Remplissage pour pousser à droite si besoin */}
            <div className="flex-1" />
          </div>
        </nav>

        {/* Menu mobile (drawer) */}
        <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" />

          <div className="fixed inset-0 flex">
            <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="ml-auto rounded-md p-2 text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-2 space-y-6 px-4">
                <a
                  href="#services"
                  className="block text-base font-medium text-gray-900 hover:text-indigo-600"
                  onClick={() => setOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#tarifs"
                  className="block text-base font-medium text-gray-900 hover:text-indigo-600"
                  onClick={() => setOpen(false)}
                >
                  Tarifs
                </a>
                <a
                  href="#contact"
                  className="block text-base font-medium text-gray-900 hover:text-indigo-600"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="/devis"
                  className="block text-base font-medium text-gray-900 hover:text-indigo-600"
                  onClick={() => setOpen(false)}
                >
                  Devis
                </a>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </header>
    </div>
  )
}
