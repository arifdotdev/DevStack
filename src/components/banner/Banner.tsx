import bannerImg from './../../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='container block sm:flex text-center sm:text-left justify-between items-center my-10'>
            <div className='w-12/12 sm:w-6/12 space-y-4'>
                <h2 className='font-bold text-4xl font-primary'>Build Your Ideal<br /> <span className='bg-gradient-to-r from-[#ff6b1a] to-[#ec4899] bg-clip-text text-transparent'>Development Stack</span></h2>
                <p className='font-secondary'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                <div className="flex gap-3 items-center justify-center sm:justify-start mt-10">
                    <button className='btn btn-primary'>Explore Technologies</button>
                    <button className='btn border-2 border-orange-400 bg-transparent text-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition'>Learn More</button>
                </div>
            </div>
            <img className='w-12/12 sm:w-6/12' src={bannerImg} alt="banner image" />
        </div>
    );
};

export default Banner;