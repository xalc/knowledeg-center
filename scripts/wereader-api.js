const BOOK_SHELF_URL = 'https://i.weread.qq.com/shelf/sync?synckey=0&teenmode=0&album=1&onlyBookid=0'

// paste cookie from browser request
const cookie = `wr_gid=247941411; wr_fp=2314917716; wr_vid=16110108; wr_rt=web%40vaFK7z0HSr~0yMigVjj_AL; wr_localvid=72932e806f5d21c729ca120; wr_name=HuntX; wr_avatar=https%3A%2F%2Fthirdwx.qlogo.cn%2Fmmopen%2Fvi_32%2FG2icRHrAN7qmUGfvxVibFnpzOFZ84E6Ribsiarj5WqSSpzaow36Qt9xFqaM1tQialXQUB3zoc9mCfibGkIRlIMI0m7uA%2F132; wr_gender=1; wr_skey=oAA3eipM; wr_pf=undefined`

const fetchWithCookie = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                cookie
            }
        });
        if (!response.ok) {
            throw new Error(`fetch URL ${url} failed with : + ${response.statusText}`)
        }
        return await response.json();

    } catch (err) {
        console.error(err.message)
    }

}

const getShelt = async () => {
    const result = fetchWithCookie(BOOK_SHELF_URL)
    return result;
}


const WRAPI = {
    getShelt
}
export default WRAPI;