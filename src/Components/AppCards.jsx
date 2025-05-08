import React from 'react';
import AppCard from './AppCard';
import { Link } from 'react-router';

const AppCards = ({ datas }) => {

  const trendingApps = [...datas]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4)

  const categories = [...new Set(datas.map((app)=> app.category))]

  return (
    <div className='flex flex-col gap-10 py-6'>

      <section>
        <h2 className='text-2xl font-bold mb-4'>🔥 Trending Apps</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {trendingApps.map(app => (
            <Link to={`/details/${app.id}`} key={app.id}>
              <AppCard app={app} />
            </Link>
          ))}
        </div>
      </section>

      {categories.map(category => (
        <section key={category}>
          <h2 className='text-xl font-semibold mt-6 mb-3'>{category} Apps</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {datas
              .filter(app => app.category === category)
              .map(app => (
                <Link to={`/details/${app.id}`} key={app.id}>
                  <AppCard app={app} />
                </Link>
              ))}
          </div>
        </section>
      ))}

    </div>
  );
};

export default AppCards;
