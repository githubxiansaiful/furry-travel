const HowItsWork = () => {
    return (
        <div className="mt-[60px] lg:mt-[80px]">
            <div className="container">
                <div className="max-w-[500px] mx-auto text-center">
                    <h2 className="text-4xl text-center font-bold tracking-tight  sm:text-6xl">How It Works</h2>
                    <p className="lg:text-xl max-w-[500px] mx-auto mt-6 text-lg leading-8">A fantastic platform for discovering, booking, and exploring unique travel accommodations, all without the need for intermediaries or additional fees.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
                    <div className="text-center p-5 bg-[#00800008] rounded-xl">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hexagon hexagon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                            <div className="translate-middle absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home fea icon-m-md text-primary"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl text-black">Lot of Choices</h3>
                            <p>Embark on a journey filled with endless options, where every destination offers a unique adventure waiting to be explored.</p>
                        </div>
                    </div>
                    <div className="text-center p-5 bg-[#8000800d] rounded-xl">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hexagon hexagon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                            <div className="translate-middle absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase fea icon-m-md text-primary"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl text-black">Best Tour Guide</h3>
                            <p>Let our expert guides lead the way, ensuring every step of your journey is filled with memorable experiences and insider knowledge.</p>
                        </div>
                    </div>
                    <div className="text-center p-5 bg-[#ffff0017] rounded-xl">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hexagon hexagon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                            <div className="translate-middle absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key fea icon-m-md text-primary"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl text-black">Easy Booking</h3>
                            <p>Effortlessly book your dream getaway with our user-friendly platform, making every step from reservation to adventure a breeze.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItsWork;