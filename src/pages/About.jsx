import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate
        pariatur nostrum iusto dolores? Aspernatur aliquid illo, mollitia neque
        a maxime iste, nihil vero, voluptates tempore delectus velit doloremque
        fugiat?
      </p>
      <ul>
        <li>
          <Link to="mission">Mission</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default About;
