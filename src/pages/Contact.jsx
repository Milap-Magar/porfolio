import hero2 from "../assets/hero2.png";

const About = () => {
  return (
    <div>
      <div className='bg-slate-100 w-full h-auto'>
        {/* About */}
        <div className='flex items-center justify-center px-3 py-2'>
          <h1 className='font-mono'>Contact</h1>
        </div>
        <div>
          {/* image div */}
          <div className='md:flex md:justify-center md:items-center md:right-4 flex justify-start items-start bg-slate-500'>
              <img src={ hero2 } alt="assets/hero.img" className='md:w-96 w-44 '/>
              <div className=''>
                <h3 className='md:text-lg md:flex md:items-start md:justify-start flex justify-center items-center text-xs md:pl-32 pl-2'>Milap Magar</h3>
                <p className='md:text-lg md:flex md:items-start md:justify-start text-xs font-thin md:pl-32 pl-2'>Gmail: readonlypls@gmail.com</p>
                <p className='md:text-lg md:flex md:items-start md:justify-start text-xs font-thin md:pl-32 pl-2'>Linkedin: Milap Magar</p>
                <p className='md:text-lg md:flex md:items-start md:justify-start text-xs font-thin md:pl-32 pl-2'>Facebook: Milap Magar</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About