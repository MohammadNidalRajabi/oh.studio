import './App.css'
import Header from './Header'
import CustomCursor from './CustomCursor'
import MovingCurvedCircles from './MovingCircles'
import VideoCard from './VideoCard'

function App() {
  return (
    <>
      <section className='Hero h-150 w-full bg-[#ff4d12] flex flex-col justify-between items-start' id='Hero'>
        <Header />
        <p className="text-black leading-[1.2] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] max-w-2xl p-10">
          We help

          ambitious teams turn bold visions into      lasting impact.</p>
      </section>
      <CustomCursor />
      <MovingCurvedCircles />
      <section className='Hero h-150 w-full bg-[#fbba10] flex flex-col justify-between items-start p-5'>
        <ul>
          <li>
            <h2>Why Haptic</h2>
          </li>
        </ul>
        <p className="text-black leading-[1.2] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] max-w-2xl p-10">We help
          Startups come to us when they need a team that can deliver real results.

        </p>
      </section>
      
      <section className='flex flex-row justify-between items-start'>
        <VideoCard  video="https://dl.dropboxusercontent.com/scl/fi/4vcvhd9wjkb4j0nifoctl/danny-quick.mp4?rlkey=2pocae2vbx85cx85okvhkuows&st=dzpgeyyz&dl=0"/>
        <VideoCard video="https://dl.dropbox.com/scl/fi/wm51arfidi6eszvjjzvz4/apollo-testimonial.mp4?rlkey=bjyyqof630ytg0kg6v8qshgr0&st=1wg560qm&dl=0"/>
      </section>
    </>
  )
}

export default App
