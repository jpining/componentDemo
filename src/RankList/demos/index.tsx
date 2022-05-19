/*
 * @Descripttion: 
 * @version: 
 * @LastEditors: jp
 * @Date: 2022-05-19 18:45:26
 * @LastEditTime: 2022-05-19 18:47:54
 */
import React from 'react';
import { RankList } from 'component-demo-tools';

function RankListDemo() {
  const data = Array.from(new Array(10)).map((_, idx) => ({
    label: `选项${idx + 1}`,
    value: 10 - idx,
  }));

  return (
    <div>
      <RankList data={data}></RankList>
    </div>
  );
}

export default RankListDemo;

