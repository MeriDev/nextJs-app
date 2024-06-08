'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CreateForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('low');
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();

    setIsLoading(true);

    const ticket = { title, body, priority, user_email: 'meri@meri.dev' };

    const res = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticket),
    });

    if (res.status === 201) {
      router.refresh();
      router.push('/tickets');
    }

    return res.json();
  };

  return (
    <form className="w-1/2" onSubmit={submitHandler}>
      <label>
        <span>Title:</span>
      </label>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter a title"
        required
      />
      <label>
        <span>Body:</span>
      </label>
      <textarea value={body} onChange={e => setBody(e.target.value)} required />

      <label>
        <span>Priority:</span>
      </label>
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add ticket</span>}
      </button>
    </form>
  );
};

export default CreateForm;
