import './App.css';
import { Fragment } from 'react';
import VideoCard from './VideoCard';
import ChannelLink from './ChannelLink';
import ChannelLinkR from './ChannelLinkR';
import Header from './Header';
import ImageLayer from './ImageLayer';

function App() {
  const local_website = "http://localhost:3000/";

  return (
    <Fragment>
      <div className="font-chinese font-normal">
        <div className='block'>
          <Header />

          <div className=''>
            <div className='z-0'>
              <ImageLayer imageSrc="head-layer/lay1.webp"/>
              <ImageLayer imageSrc="head-layer/lay2.webp"/>
            </div>

            <div className='z-20 h-40 px-14 flex items-end'>
              <a href={local_website} className='mb-2.5'>
                <img 
                  src="bili-logo.png" alt="" 
                  className='z-20 w-40 relative'
                />
              </a>
            </div>

            <div></div>
          </div>

          <div className='flex justify-center items-center m-0 mx-5 h-24'>
            <div className='flex-auto flex justify-center items-center text-center'>
              <a href={local_website} className='flex-1 flex flex-col items-center mx-1'>
                <div>
                  <picture className=''>
                    <img src="icon-ted.jpg" alt="" className='h-10 w-10 border rounded-full' />
                  </picture>
                </div>
                <i></i>
                <span>动态</span>
              </a>
              <a href={local_website} className='flex-1 items-center mx-1'>
                <div className='flex justify-center items-center h-10 w-10 bg-red-f07775 rounded-full'>
                  <svg className='h-6.25 w-6.25 box-border p-px'>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.89054 17.272L4.89277 17.2742C6.49674 18.8782 8.66472 19.7888 10.9624 19.7888C13.2503 19.7888 15.2113 19.0539 16.6107 17.6108L16.6108 17.6108L16.6128 17.6086C18.0002 16.1345 18.7835 14.182 18.7421 12.1819C18.7852 11.3835 18.6916 9.36321 17.4088 6.75488L17.4082 6.7537C17.209 6.35523 16.8163 6.06598 16.3391 5.96993C15.8904 5.87103 15.4021 6.01997 15.061 6.35741C14.9094 6.48781 14.7796 6.61755 14.6655 6.7317L14.6637 6.73348L14.6329 6.76426C14.2107 3.35588 12.6083 1.7368 11.1654 1.00465C11.148 0.987812 11.1265 0.967972 11.1036 0.950782C11.0775 0.931205 11.0311 0.900467 10.9694 0.888912C10.2276 0.608301 9.41043 1.01168 9.1237 1.77629L9.12314 1.7778C8.50566 3.46558 7.35287 4.62281 6.16627 5.76704C4.51756 7.33121 2.75938 9.03623 2.80163 12.093C2.75906 14.055 3.54464 15.8826 4.89054 17.272ZM3.04999 13.0648C3.01092 12.7459 2.99439 12.4218 3.00168 12.0939C2.95933 9.12977 4.6531 7.47834 6.30453 5.9116C7.49017 4.76831 8.67581 3.58267 9.31098 1.84655C9.56504 1.16904 10.2849 0.830288 10.9201 1.08435C10.9624 1.08435 11.0048 1.1267 11.0471 1.16904C11.9267 1.60884 12.8853 2.39635 13.5753 3.77299C12.8853 2.39633 11.9267 1.6088 11.0471 1.16901C11.0047 1.12666 10.9624 1.08432 10.9201 1.08432C10.2849 0.830251 9.56503 1.16901 9.31097 1.84651C8.6758 3.58263 7.49016 4.76827 6.30452 5.91157C4.65309 7.47831 2.95932 9.12973 3.00166 12.0938C2.99438 12.4218 3.01092 12.7459 3.04999 13.0648ZM14.477 7.18189C14.477 7.1819 14.477 7.18192 14.477 7.18193C14.5828 7.09724 14.6887 6.99138 14.8052 6.87493C14.9216 6.75849 15.0486 6.63146 15.1968 6.50442C15.4932 6.20801 15.9167 6.08098 16.2978 6.16567C16.7212 6.25036 17.06 6.50443 17.2294 6.84318C17.3088 7.0046 17.3835 7.16371 17.4539 7.32035C17.3835 7.1637 17.3087 7.00458 17.2294 6.84314C17.06 6.50439 16.7212 6.25032 16.2978 6.16563C15.9167 6.08094 15.4932 6.20798 15.1968 6.50439C15.0486 6.63142 14.9216 6.75845 14.8051 6.87489L14.8051 6.8749C14.7557 6.92437 14.7081 6.97191 14.6617 7.01675C14.5988 7.07745 14.5379 7.13318 14.477 7.18189ZM12.6977 6.35925C12.8428 7.15476 12.8833 7.97963 12.8679 8.74864C12.8679 8.79032 12.8704 8.8315 12.8754 8.87195C12.8704 8.83151 12.8679 8.79035 12.8679 8.74867C12.8833 7.97966 12.8428 7.15478 12.6977 6.35925ZM16.7358 10.6654C16.8108 11.1478 16.8483 11.6393 16.8483 12.1362V12.1786C16.8483 13.703 16.2978 15.2274 15.2392 16.3283C14.0535 17.4293 12.5291 18.0221 10.9201 17.9374C9.1416 17.9374 7.44783 17.2175 6.21984 15.9472C5.82743 15.5548 5.50448 15.1119 5.25584 14.6331C5.50447 15.1119 5.82743 15.5548 6.21983 15.9472C7.44782 17.2175 9.14159 17.9373 10.9201 17.9373C12.5291 18.022 14.0535 17.4292 15.2392 16.3283C16.2978 15.2273 16.8483 13.7029 16.8483 12.1785V12.1362C16.8483 11.6393 16.8108 11.1478 16.7358 10.6654ZM10.9306 17.7376C12.4802 17.8192 13.9509 17.2497 15.0989 16.1856C16.1154 15.1261 16.6483 13.655 16.6483 12.1785V12.1362C16.6483 10.8624 16.3969 9.6266 15.8955 8.49474C15.2436 9.11663 14.7845 9.49093 14.4179 9.68717C14.2122 9.79725 14.0268 9.85633 13.846 9.86789C13.6644 9.8795 13.5028 9.84219 13.3473 9.78249C12.9207 9.62211 12.6679 9.20129 12.6679 8.74864V8.74464L12.6679 8.74464C12.6889 7.69735 12.6046 6.55594 12.2954 5.53554C12.01 4.59379 11.5372 3.76766 10.7904 3.20655C9.96581 4.94926 8.72521 6.18561 7.58695 7.28323L7.50836 7.35967C5.97191 8.85397 4.81321 9.98087 4.85306 12.1325L4.85313 12.1362H4.85309C4.85309 13.5239 5.38326 14.8277 6.36125 15.8057L6.36365 15.8081L6.36363 15.8082C7.55387 17.0394 9.19573 17.7374 10.9201 17.7374H10.9306L10.9306 17.7376Z" fill="#ffffff"></path>
                  </svg>
                </div>
                <span>热门</span>
              </a>
            </div>

            <div className='flex-auto flex justify-center'>
              <div className='grid grid-rows-2 grid-flow-col gap-2.5 pr-5 border-r text-center justify-center text-center'>
                <ChannelLink name="番剧" />
                <ChannelLink name="电影" />
                <ChannelLink name="国创" />
                <ChannelLink name="电视剧" />
                <ChannelLink name="综艺" />
                <ChannelLink name="纪录片" />
                <ChannelLink name="动画" />
                <ChannelLink name="游戏" />
                <ChannelLink name="鬼畜" />
                <ChannelLink name="音乐" />
                <ChannelLink name="舞蹈" />
                <ChannelLink name="影视" />
                <ChannelLink name="娱乐" />
                <ChannelLink name="知识" />
                <ChannelLink name="科技" />
                <ChannelLink name="资讯" />
                <ChannelLink name="美食" />
                <ChannelLink name="更多" />
              </div>
              <div className='grid grid-rows-2 grid-flow-col gap-y-2.5'>
                <ChannelLinkR name="专栏"/>
                <ChannelLinkR name="直播"/>
                <ChannelLinkR name="活动"/>
                <ChannelLinkR name="课堂"/>
                <ChannelLinkR name="社区中心"/>
                <ChannelLinkR name="新歌热榜"/>
              </div>
            </div>
          </div>
          
        </div>
        <main className='mx-5'>
          <div>
            <div className='grid grid-cols-4 gap-5'>
              <div className='col-span-2 row-span-2'>
                {/* 设置一个看不见的grid，用于占位 */}
                {/* <div 
                  className='grid grid-cols-2 invisible gap-5 select-none pointer-events-none'
                >
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div> */}

                <div className='pb-16 h-full'>
                  <div>
                    <div>
                      <div></div>
                      <a href={local_website}>
                        <picture>
                          <img 
                            src="recommend-pic-1.jpg" alt="" 
                            className='rounded-t-md'
                          />
                        </picture>
                      </a>
                      <div className='w-full h-20 rounded-b-md bg-purple-443'>

                      </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>

                  <div>
                    <div></div>

                    <div className='absolute mx-4 -mt-14'>
                      <div className='flex'>
                        <a href={local_website}>
                          <span className='text-white'>
                            鹿角我要消灭你！
                          </span>
                        </a>
                      </div>
                    </div>

                    <div>
                      {/* 一排小圆点 */}
                      <ul>
                        <li>
                          <div></div>
                          <div></div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='absolute -mt-14 z-20 flex left-112'>
                    <button className='mr-3 text-white'>
                      &lt;
                    </button>  
                    <button className='text-white'>
                      &gt;
                    </button>  
                  </div>
                </div>
              </div>

              <VideoCard 
                pictureSrc="video-1-pic.jpg" title="聊聊3.13中你们感兴趣的特性，和我实现的功能" 
                author="码农高天" date="10-11"
              ></VideoCard>
              <VideoCard 
                pictureSrc="video-2-pic.jpg" title="为什么哪里都有Docker的身影？你真的了解它背后的容器技术吗？" 
                author="Valiant程" date="11-14"
              ></VideoCard>
              <VideoCard 
                pictureSrc="video-3-pic.jpg" title="【1818黄金眼】“00后”通过中介进电子工厂，涉世未深 vs 门道很深" 
                author="1818黄金眼" date="11-30"
              ></VideoCard>
              <VideoCard 
                pictureSrc="video-4-pic.jpg" title="终于来了！Netflix魔幻史诗大剧《百年孤独》正式预告，年度必看！12.11上线" 
                author="乌鸦预告片" date="11-25"
              ></VideoCard>

              <div className='pt-10'>
                  <VideoCard 
                    pictureSrc="video-2-pic.jpg" title="为什么哪里都有Docker的身影？你真的了解它背后的容器技术吗？" 
                    author="Valiant程" date="11-14" 
                  ></VideoCard>
              </div>
              <div className='pt-10'>
                <VideoCard 
                  pictureSrc="video-3-pic.jpg" title="【1818黄金眼】“00后”通过中介进电子工厂，涉世未深 vs 门道很深" 
                  author="1818黄金眼" date="11-30"
                ></VideoCard>
              </div>
              <div className='pt-10'>
                <VideoCard 
                  pictureSrc="video-4-pic.jpg" title="终于来了！Netflix魔幻史诗大剧《百年孤独》正式预告，年度必看！12.11上线" 
                  author="乌鸦预告片" date="11-25"
                ></VideoCard>
              </div>
              <div className='pt-10'>
                <VideoCard 
                  pictureSrc="video-1-pic.jpg" title="聊聊3.13中你们感兴趣的特性，和我实现的功能" 
                  author="码农高天" date="10-11"
                ></VideoCard>
              </div>
            </div>
            <div>
              <button>
                <span>
                  换一换
                </span>
              </button>
            </div>
          </div>
        </main>

      </div>
    </Fragment>
  );
}

export default App;
