import React from 'react'
import Image from 'next/image';

const Statistics = () => {
    return (
        <>
            <section className="bg-pale-lilac w-full text-center">
                <div className='p-8 mx-auto md:w-1/3'>
                    <h1 className='text-3xl text-midnight-blue font-bold pb-8'>Advanced Statistics</h1>
                    <p className='text-lavender-grey pb-8'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className='flex flex-col pb-16 md:pb-24 md:flex-row md:w-5/6 mx-auto'>
                    <div className='mx-8 md:mx-0 px-8 pb-8 md:p-2 lg:px-8 bg-white rounded-lg flex flex-col gap-4'>
                        <div className='mx-auto bg-midnight-blue rounded-full transform -translate-y-1/2 lg:-translate-x-24'>
                            <Image className="p-2" src='/images/icon-brand-recognition.svg' alt="hero" width={50} height={50}>    
                            </Image>
                        </div>
                        <h1 className='text-3xl text-midnight-blue font-bold'>Brand Recognition</h1>
                        <p className='text-lavender-grey'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <div className='h-16 border-l-8 border-turquoise mx-auto md:hidden'></div>
                    <div className='bg-turquoise hidden w-16 h-2 my-auto md:block'></div>
                    <div className='mx-8 md:mx-0 px-8 pb-8 md:p-2 lg:px-8 bg-white rounded-lg flex flex-col gap-4 md:transform md:translate-y-[12.5%]'>
                        <div className='mx-auto bg-midnight-blue rounded-full transform -translate-y-1/2 lg:-translate-x-24'>
                            <Image className="p-2" src='/images/icon-detailed-records.svg' alt="hero" width={50} height={50}>    
                            </Image>
                        </div>
                        <h1 className='text-3xl text-midnight-blue font-bold'>Detailed Records</h1>
                        <p className='text-lavender-grey'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <div className='h-16 border-l-8 border-turquoise mx-auto md:hidden'></div>
                    <div className='bg-turquoise hidden w-16 h-2  my-auto md:block'></div>
                    <div className='mx-8 md:mx-0 px-8 pb-8 md:p-2 lg:px-8 bg-white rounded-lg flex flex-col gap-4 md:transform md:translate-y-1/4'>
                    <div className='mx-auto bg-midnight-blue rounded-full transform -translate-y-1/2 lg:-translate-x-24'>
                            <Image className="p-2" src='/images/icon-fully-customizable.svg' alt="hero" width={50} height={50}>    
                            </Image>
                        </div>
                        <h1 className='text-3xl text-midnight-blue font-bold'>Fully Customizable</h1>
                        <p className='text-lavender-grey'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
            </section>
            <section className='bg-bg-boost-mb md:bg-bg-boost bg-midnight-blue text-center py-16 flex flex-col gap-8'>
                <p className='text-4xl lg:text-5xl font-bold text-white'>Boost your links today</p>
                <button className='text-white py-4 px-12 rounded-3xl bg-turquoise mx-auto text-2xl'>Get Started</button>
            </section>
        </>
        
    )
}

export default Statistics;