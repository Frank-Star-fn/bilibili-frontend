
import React, { useState, useEffect } from 'react';

function SearchContainer() {
  const [searchContent, setSearchContent] = useState('');
  
  useEffect(() => {
    document.title = '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'; // 设置标签页标题
    setSearchContent("");
  }, []); // 空数组作为第二个参数，意味着这个 effect 只在组件挂载时运行一次

  const handleInputChange = (event) => {
    const value = event.target.value; // 从事件对象中获取输入的值
    setSearchContent(value); // 更新状态变量
  };

  return (
  <div className="flex-auto">
    <div>
      <form action="" className='flex items-center ml-1 mr-2 my-1 bg-gray-100 opacity-90 rounded-lg'>
        <div className="bg-transparent w-full">
          <input 
            className='w-full p-2.5 bg-transparent text-sm'
            type="text" value={searchContent}
            // 搜索内容
            placeholder="清华研发格斗机器人"
            onChange={handleInputChange}
          />
        </div>
        <div className="cursor-pointer">
          {/* 搜索 */}
          <svg className='w-5 h-5 mx-2'>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.3451 15.2003C16.6377 15.4915 16.4752 15.772 16.1934 16.0632C16.15 16.1279 16.0958 16.1818 16.0525 16.2249C15.7707 16.473 15.4456 16.624 15.1854 16.3652L11.6848 12.8815C10.4709 13.8198 8.97529 14.3267 7.44714 14.3267C3.62134 14.3267 0.5 11.2314 0.5 7.41337C0.5 3.60616 3.6105 0.5 7.44714 0.5C11.2729 0.5 14.3943 3.59538 14.3943 7.41337C14.3943 8.98802 13.8524 10.5087 12.8661 11.7383L16.3451 15.2003ZM2.13647 7.4026C2.13647 10.3146 4.52083 12.6766 7.43624 12.6766C10.3517 12.6766 12.736 10.3146 12.736 7.4026C12.736 4.49058 10.3517 2.1286 7.43624 2.1286C4.50999 2.1286 2.13647 4.50136 2.13647 7.4026Z" fill="currentColor"></path>
          </svg>
        </div>
      </form>
    </div>
  </div>
  );
}

export default SearchContainer;
