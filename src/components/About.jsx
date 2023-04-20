import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta laudantium sit et deleniti fuga quibusdam dolor enim voluptatibus natus. Beatae dicta repudiandae cupiditate voluptates illo sapiente quis consequatur hic fugiat, nesciunt officiis quam fuga optio aliquam provident laboriosam, velit, quibusdam eum doloremque corrupti neque? Similique voluptatem harum repudiandae dolorum!
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque aspernatur alias saepe voluptatibus, provident numquam eos debitis, quia dolores dolorum eaque consectetur reiciendis! Labore cum ut illum eveniet nulla asperiores atque et quam error! Voluptas quia blanditiis asperiores ea delectus quam quidem eveniet, laudantium, maxime doloribus voluptate dicta sequi reprehenderit!
            </p>
        </div>
    </div>
  )
}

export default About