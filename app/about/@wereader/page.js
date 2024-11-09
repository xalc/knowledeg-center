import DBInstance from "@/api/libs/db";
import WRBooks from "../../src/components/wereaderBooks";


const WeReaderPage = async () => {

    const dbInstance = DBInstance.getInstance('knowledge', 'books');

    const books = await dbInstance.execute(async (c) => {
        return await c.find({}).toArray()
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