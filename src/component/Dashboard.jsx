import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Dashboard = () => {
  const cars = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuvriMNhkhG6UzxzZyO7nQuSFIhVn0m6Yrw&usqp=CAU",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4263Q8CFtpQBDZx7ffl7gYV3qdg5YMoyocQ&usqp=CAU",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WsrrDgrAA6jFl4kl3Xuc0UDLYAW_ssBhOg&usqp=CAU",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuvriMNhkhG6UzxzZyO7nQuSFIhVn0m6Yrw&usqp=CAU",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4263Q8CFtpQBDZx7ffl7gYV3qdg5YMoyocQ&usqp=CAU",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WsrrDgrAA6jFl4kl3Xuc0UDLYAW_ssBhOg&usqp=CAU",
    }
  ]

  return (
    <main className="mt-16 ">
      <h1 class="text-center text-2xl font-bold p-4  text-gray-400">Latest Cars</h1>
        <Carousel className="w-1/2 ml-80	" >
          {cars.map((car) => {
            return (
              <img src={car.image} />
            )
          })}
        </Carousel>
    </main>
  )
}

export default Dashboard