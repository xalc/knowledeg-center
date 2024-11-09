const Cover = ({ url }) => {
    const useBigImage = (url) => {
        let arr = url.split('/');
        let len = arr.length;
        arr[len - 1] = arr[len - 1].replace('s_', 't6_');
        return arr.join('/');
    }

    return <img src={useBigImage(url)}
        style={{
            width: "180px",
            height: "auto",
            marginLeft: "30px",
            maxHeight: '260px'
        }}
    ></img >
}
export default Cover;