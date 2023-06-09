import React from "react";

//navbar i yine interaktif degilse(hareketli deglse) yuklemeden tailwind in dokumentation kismindan using rreact dan npm install @.... olan kod ile yukluyoruz

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import avatar from "../assets/icons/avatar.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//asagida artik Router yapimizi kurdgmz icin a lari Link yapip yol vereblrz.img yi localdeki ile degistirelim.once import edecegiz tabiki.

//! bir condition yazmaliyiz.eger kullanici firebase e giris yapti ise firebase in verdigi otomatik icon gelsin, firebase giris yapmadiysa avatar gozuksun diye bir condition yazacagiz.firebase ddne gelen otomatik foto(google a mesela bir foto koymussan o),icon icin currentUser.photoURL kullanilir

//*face olarak bir currentUser tanimlayip ismini de,displayName i de  gostersin diyebiliriz

export default function Navbar() {
  const currentUser = { displayName: "özlem akcicek" };
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-neutral-100 dark:bg-gray-900 py-3 dark:text-white fixed top-0 w-full z-20"
      >
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link className="pr-2 text-2xl font-semibold" to="/">
              React Movie App
            </Link>
            <div className="absolute inset-y-0 right-0 flex items-center ">
              {/*currentUser in displayName ini gostersin diyecegiz  */}
              {currentUser && <h5 className="mr-2 capitalize">{currentUser.displayName}</h5>}

              {/* Profile dropdown kismi */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={avatar} referrerPolicy="no-referrer" alt="" />
                    {/* referrerPolicy="no-referrer icon bazen gelmeyebilir onu engellemek icin" */}
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                       to="/register"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Register
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/login"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                         Login
                        </Link>
                      )}
                    </Menu.Item>
                    {/* sign out u Lunk e cevirmeye gerek yok.span yapablrz.role button ekleyerek uzerine gelince cursor ozelligi olsun deriz.baze gostermez tailwind den dolayi o zaman da className ine elimizle ekleriz cursoru */}
                    <Menu.Item>
                      {({ active }) => (
                        <span
                         role="button"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                            
                          )}
                        >
                        Log out
                        </span>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>
      <div className="h-[55px]"></div>
    </>
  );
}

//transition kismi acilir kapanir menu kismi
