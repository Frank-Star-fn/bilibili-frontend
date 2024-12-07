import { Fragment } from "react";
import React, { useState, useEffect } from 'react';
import HeaderItem from './HeaderItem';

function Header(props) {
  const [searchContent, setSearchContent] = useState('');

  useEffect(() => {
    document.title = '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'; // 设置标签页标题
    setSearchContent("搜索内容");
  }, []); // 空数组作为第二个参数，意味着这个 effect 只在组件挂载时运行一次

  const handleInputChange = (event) => {
    const value = event.target.value; // 从事件对象中获取输入的值
    setSearchContent(value); // 更新状态变量
  };
  return (
    <Fragment>
      <div className='z-30 absolute h-16 pl-8 flex justify-center items-center'>
        <ul className='flex items-center'>
          <HeaderItem name="首页" />
          <HeaderItem name="番剧" />
          <HeaderItem name="直播" />
          <HeaderItem name="游戏中心" />
          <HeaderItem name="会员购" />
          <HeaderItem name="漫画" />
          <HeaderItem name="赛事" />
          <HeaderItem name="下载客户端" />
        </ul>
        <div>
          <div>
            <form action="" className='flex items-center pl-1'>
              <div>
                <input 
                  className='px-2 py-1'
                  type="text" value={searchContent}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <svg className='w-5 h-5'>
                  搜索
                </svg>
              </div>
            </form>
          </div>
        </div>
        <ul className='flex items-center'>
          <li className='mx-0.5'>
            <div>
              <a href="" className='block w-9'>
                <picture>
                  <img src="head.jpg" alt="" />
                </picture>
              </a>
              <a href=""></a>
            </div>
            <div></div>
          </li>
          <div className='mx-0.5 text-white'>大会员</div>
          <li className='mx-0.5 text-white'>消息</li>
          <li className='mx-0.5 text-white'>动态</li>
          <li className='mx-0.5 text-white'>收藏</li>
          <li className='mx-0.5 text-white'>历史</li> {/* 历史记录 */}
          <li className='mx-0.5 text-white'>创作中心</li>
          <li className='mx-0.5 text-white'>投稿</li>
        </ul>
      </div>
    </Fragment>
  );

}

export default Header;
