import React from 'react';
import { Card } from 'dantd';

const Comp = () => {
  return (
    <div>
      <Card
        antdProps={{ bordered: true, title: 'Card Title' }}
        copyText="打开支付宝首页搜“681424595”领红包，领到大红包的小伙伴赶紧使用哦！"
      >
        在跨年演讲中，罗胖提到了一个词“基本盘”。
        <br />
        什么叫基本盘？
        <br />
        就是什么都可以失去后，我们最后还能剩下的东西。
        <br />
        中国人的基本盘是什么？
        <br />
        中国人的基本盘，是勤奋。
        <br />
        不管我们是不是最聪明的民族，不管我们是不是颜值最高的民族，不管我们是不是最强壮的民族，我们至少是最勤奋的民族。
        <br />
        虽然2019年的经济形势不是最好，2020年也未必非常乐观。
        <br />
        但是，只要勤奋这个最基本的基本盘不失去，我们就能把一切都追回来。
        <br />
        2020年，希望你能坚守你的勤奋，坚守你的基本盘。
      </Card>
    </div>
  );
};

export default Comp;
