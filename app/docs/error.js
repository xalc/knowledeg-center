'use client' // Error boundaries must be Client Components

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache'
export default function Error({ error, reset }) {
    //
    const router = useRouter();
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Content cannot shown</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => {
                        // window.history.back()
                        // router.refresh();

                        // revalidatePath('/docs/srender');
                        router.push('/docs');
                        //TODO why is not working ???
                        // router.push('/docs/srender');
                        // reset();
                    }
                }
            >
                Try again
            </button>
        </div >
    )
}