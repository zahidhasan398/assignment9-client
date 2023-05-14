import React from 'react';

const HomeBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://media.istockphoto.com/id/1372077024/photo/stir-fry-noodle-with-shrimps-asian-cuisine-cooked-soba.jpg?b=1&s=170667a&w=0&k=20&c=nS1fUp7v5Heg4A1Kusow9DdG9XbC6Lz8irmSUKAmvPk=" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Lets try chinese recepe</h1>
                        <p className="py-6">Chinese cuisine encompasses the numerous cuisines originating from China, as well as overseas cuisines created by the Chinese diaspora. Because of the Chinese diaspora and historical power of the country, Chinese cuisine has influenced many other cuisines in Asia and beyond, with modifications made to cater to local palates. Chinese food staples such as rice, soy sauce, noodles, tea, chili oil, and tofu, and utensils such as chopsticks and the wok, can now be found worldwide.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;