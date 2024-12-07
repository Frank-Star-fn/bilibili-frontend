import './App.css';
import { Fragment } from 'react';
import VideoCard from './VideoCard';
import ChannelLink from './ChannelLink';
import Header from './Header';
import ImageLayer from './ImageLayer';

function App() {
  const local_website = "http://localhost:3000/";

  return (
    <Fragment>
      <div className="">
        <div className='block'>
          <Header />

          <div>
            <div className=''>
              <ImageLayer imageSrc="head-layer/lay1.webp"/>
 
              

            </div>

            <div className=''>
              <a href={local_website}>
                <img 
                  src="bili-logo.png" alt="" 
                  className='w-40'
                />
              </a>
            </div>

            <div></div>
          </div>

          <div className='flex justify-center items-center m-0 mx-auto h-24'>
            <div className='flex-auto flex justify-center items-center'>
              <a href="" className='mr-4'>
                <div></div>
                <span>动态</span>
              </a>
              <a href="">
                <div></div>
                <span>热门</span>
              </a>
            </div>
            <div className='flex-auto flex justify-center'>
              <div className='grid grid-rows-2 grid-flow-col gap-2.5 pr-5 border-r text-center'>
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
                <a href="" className='px-2'>专栏</a>
                <a href="" className='px-2'>直播</a>
                <a href="" className='px-2'>活动</a>
                <a href="" className='px-2'>课堂</a>
                <a href="" className='px-2'>社区中心</a>
                <a href="" className='px-2'>新歌热榜</a>

              </div>
            </div>
          </div>
          
        </div>
        <main>
          <div>
            <div className='grid grid-cols-4 gap-5'>
              <div className='col-span-2 row-span-2'>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div>
                  <div>
                    <div>
                      <div></div>
                      <a href="">
                        <picture>
                          <img src="recommend-pic-1.jpg" alt="" />
                        </picture>
                      </a>
                    </div>
                    <div></div>
                    <div></div>
                  </div>

                  <div>
                    <div></div>
                    <div>
                      <div>
                        <a href="">
                          <span>
                            鹿角我要消灭你！
                          </span>
                        </a>
                      </div>
                    </div>

                    <div></div>
                  </div>

                  <div>&lt; &gt;</div>
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
