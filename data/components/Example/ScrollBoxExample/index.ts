const baseImgUrl = 'https://picsum.photos/240';

/** 生成数组 */
const genArr = (length: number) => {
  const arr = [];
  for (let i = 1; i <= length;++i) {
    arr.push(i);
  }
  return arr;
};

export const getPartners = async () => {
  const partners = genArr(51).map((item: number) => ({
    imgUrl: `${baseImgUrl}?id=${item}`,
  }));

  // 将数组从 30 开始截取，截取到 51 拆分成两个数组
  return [
    partners.slice(0, 30),
    partners.slice(30, 51),
  ];
};
