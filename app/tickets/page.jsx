import { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from '../loading';
import Link from 'next/link';

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
      </nav>
      <div className="flex justify-center my-8">
        <Link href="/tickets/create">
          <button className="btn-primary">Add a ticket</button>
        </Link>
      </div>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;
