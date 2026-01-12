import React from 'react'
import Card from '../components/Card'
import { Link } from "react-router-dom";


const Products = () => {
    return (
        <div className='w-full h-full mx-auto '>
            <section className="pt-40 pb-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-semibold text-[#1d1d1f] tracking-tight mb-6 leading-tight">
                        Technology solutions <br className="hidden md:block" />
                        built for real-world use.
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                        Explore our range of integrated AV, digital, and infrastructure solutions designed to
                        enhance learning environments, workplaces, and public institutions.
                    </p>
                </div>
            </section>

            <div className="flex justify-center py-4 bg-gray-100 ">
                <div className="max-w-[1440px]">
                    <Card />
                </div>
            </div>


<Link
            to="/solutions"
            className="hover:text-[#1A4F8B] transition-colors"
          >

             <div className="flex justify-center items-center my-4">
  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
    Learn More →
  </button>
</div>
          </Link>

        </div>
    )
}

export default Products
