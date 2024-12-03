

import { Alert } from "antd";



export default function Claim() {



  // const [show, setShow] = useState(true);

  // const { styles } = useStyles();

  // if (show) {
  //   return <div className={styles.container}>
  //     <div className={styles.claim}>
  //       该内容为导出自个人NOTION笔记,可能不完整/不严谨/有bug/随时间而失效/仅代表个人观点，不保证正确。
  //     </div>
  //     <Tooltip title="Close">
  //       <Button
  //         className={styles.btn}
  //         variant="link" onClick={() => setShow(false)} icon={<CloseOutlined />} />
  //     </Tooltip>

  //   </div>
  // }
  return (
    <Alert
      banner
      closable
      message={
        ' 该内容为导出自个人NOTION笔记,可能不完整/不严谨/有bug/随时间而失效/仅代表个人观点，不保证正确。'
      }
    />
  );
}