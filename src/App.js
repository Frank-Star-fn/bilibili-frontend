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
              <a href="" className='flex-1 flex flex-col items-center'>
                <div>
                  <picture>
                    <img src="icon-ted.jpg" alt="" className='h-10 w-10' />
                  </picture>
                </div>
                <i></i>
                <span>动态</span>
              </a>
              <a href="" className='flex-1'>
                <div className='h-10 w-10'>
                  <svg className='h-5 w-5'>
                    <path>

                    </path>
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
                      <a href="">
                        <picture>
                          <img 
                            src="recommend-pic-1.jpg" alt="" 
                            className='rounded-md'
                          />
                        </picture>
                      </a>
                    </div>
                    <div></div>
                    <div></div>
                  </div>

                  <div>
                    <div></div>

                    <div className='mx-4 mt-3'>
                      <div className='flex'>
                        <a href="">
                          <span>
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

                  <div className='absolute z-20 flex left-96'>
                    <button className='mr-3'>
                      &lt;
                    </button>  
                    <button>
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
              <VideoCard 
                pictureSrc="video-1-pic.jpg" title="聊聊3.13中你们感兴趣的特性，和我实现的功能" 
                author="码农高天" date="10-11"
              ></VideoCard>
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
