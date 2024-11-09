
import WRBooks from "@/components/wereaderBooks";

import { getDBReadingBooks } from "@/libs/db-utils";

const WeReaderPage = async () => {

    // const dbInstance = DBInstance.getInstance('knowledge', 'books');

    const books = await getDBReadingBooks().catch(err => {
        //TODO Error handle
        console.error('get book list failed: ' + err)
    })

    const needed = books.map((b) => {
        return {
            title: b.title,
            cover: b.cover,
            category: b.category,
            author: b.author,
            bookid: b.bookId
        }
    }).reverse()
    return <WRBooks books={needed} />

}
export default WeReaderPage;