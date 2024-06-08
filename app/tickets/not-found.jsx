import Link from 'next/link';

const NotFound = () => {
  return (
    <main>
      <div className="text-center">
        <h2 className="text-3xl">We hit a brick wall.</h2>
        <p>We could not find the ticket you were looking for</p>
        <p>
          Go back to all <Link href="/tickets">tickets</Link>
        </p>
      </div>
    </main>
  );
};

export default NotFound;
