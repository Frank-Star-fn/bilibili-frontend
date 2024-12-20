
import RecommendBox from './RecommendBox';
import VideoCard from './VideoCard';

function GridBox() {
  return (
  <div className='grid grid-cols-4 gap-5'>
    <RecommendBox />
  
    <VideoCard 
      pictureSrc="video-pic/video-8-pic.jpg" 
      numWatch="1.6万" numChat="10"
      videoTime="11:51"
      title="【python】C扩展里这些METH_都是干啥的？聊聊C模块的方法传参" 
      cardInfo="已关注"
      author="码农高天" date="11-16"
    ></VideoCard>
    <VideoCard 
      pictureSrc="video-pic/video-6-pic.jpg" title="世界上最大的质数有多大？梅森素数和完全数有啥关系？" 
      author="李永乐老师官方" date="11-26"
      numWatch="13.6万" numChat="548"
      videoTime="16:00"
      cardInfo="已关注"
    ></VideoCard>
    <VideoCard 
      pictureSrc="video-pic/video-7-pic.jpg" 
      numWatch="252.6万" numChat="806"
      videoTime="01:01"
      title="在卷雪这个赛道，是有一些天赋在🤔" 
      cardInfo="9万点赞"
      author="爱睡觉的长颈鹿亚克" date="11-17"
    ></VideoCard>
    <VideoCard 
      pictureSrc="video-pic/video-5-pic.jpg" title="计算机组成原理-透视版(上)" 
      author="织点代码" date="11-25"
      numWatch="6.8万" numChat="54"
      videoTime="48:23"
      cardInfo="已关注"
    ></VideoCard>

    <div className='pt-9'>
        <VideoCard 
        pictureSrc="video-pic/video-10-pic.jpg" 
        numWatch="3.7万" numChat="164"
        videoTime="09:19"
        title="9分钟游遍阿姆斯特丹：这座低于海平面的荷兰首都，如何闪耀世界？" 
        cardInfo="已关注"
        author="两颗太阳Show" date="12-6"
        ></VideoCard>
    </div>
    <div className='pt-9'>
        <VideoCard 
          pictureSrc="video-pic/video-9-pic.jpg" 
          numWatch="60.2万" numChat="712"
          videoTime="05:33"
          title="我 很 大 气，从 不 计 较 得" 
          cardInfo="已关注"
          author="知了解压萌物" date="12-6"
        ></VideoCard>
    </div>
    <div className='pt-9'>
      <VideoCard 
        pictureSrc="video-pic/video-4-pic.jpg" title="终于来了！Netflix魔幻史诗大剧《百年孤独》正式预告，年度必看！12.11上线" 
        author="乌鸦预告片" date="11-25"
        cardInfo="up"
      ></VideoCard>
    </div>
    <div className='pt-9'>
      <VideoCard 
        pictureSrc="video-pic/video-1-pic.jpg" title="聊聊3.13中你们感兴趣的特性，和我实现的功能" 
        author="码农高天" date="10-11"
        cardInfo="已关注"
      ></VideoCard>
    </div>

    {/* <div className='pt-9'>
        <VideoCard 
          pictureSrc="video-pic/video-2-pic.jpg" title="为什么哪里都有Docker的身影？你真的了解它背后的容器技术吗？" 
          author="Valiant程" date="11-14" 
          cardInfo="已关注"
        ></VideoCard>
    </div>
    <div className='pt-9'>
      <VideoCard 
        pictureSrc="video-pic/video-3-pic.jpg" title="【1818黄金眼】“00后”通过中介进电子工厂，涉世未深 vs 门道很深" 
        author="1818黄金眼" date="11-30"
        cardInfo="已关注"
      ></VideoCard>
    </div> */}
  </div>
  );

}


export default GridBox;