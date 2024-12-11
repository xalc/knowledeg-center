'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'antd';
export default function Error({ error }) {
  //
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Content cannot shown</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {

            router.push('/blog');

          }
        }>
        back
      </Button>
    </div>
  );
}
