import React, { useState } from 'react';
import {Card} from 'antd'
import './index.css'
const { Meta } = Card;

function AboutUs() {
    return (
        <div className='about-us'>
            <span className='about-us-content'>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzU4ODc5NzA3OQ==&mid=2247484025&idx=1&sn=f166653b7b6a63a114a3f62ec6752ea1&send_time=" />}
                >
                    <Meta title="JUANR的小屋" description="内容提供 技术支持" />
                </Card>
            </span>
            <span className='about-us-content'>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://pics.images.ac.cn/image/5eac3c827be95.html" />}
                >
                    <Meta title="HenryTian" description="网站搭建 前后端技术支持" />
                </Card>
            </span>
            <span className='about-us-content'>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://pics.images.ac.cn/image/5eac3e631e087.html" />}
                >
                    <Meta title="问题反馈" description="吐槽赞赏都可以发到这儿" />
                </Card>
            </span>
        </div>
    )
}

export default AboutUs;