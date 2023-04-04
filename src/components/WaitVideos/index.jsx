import React, { useState } from 'react'
import { Popup, Toast } from "antd-mobile"
import { MoreOutline, DeleteOutline } from "antd-mobile-icons"
import './index.scss'

const WaitVideos = ({data, delDispatch}) => {
  const [visible, setVisible] = useState(false)

  const delWaitVideos = async (id) => {
    await delDispatch(id)
    Toast.show({
      content: '删除成功',
      position: 'bottom',
    })
    setVisible(false)
  }

  return (
    <div className='wv-container'>
      <div className="wv-img">
        <img src={data.img} alt="" />
      </div>
      <div className="wv-time">
        <span>{data.time}</span>
      </div>
      <div className="wv-title">
        <span>{data.title}</span>
      </div>
      <div className="wv-up">
        <span>{data.up}</span>
      </div>
      <div className="wv-data">
        <div className="data-bofang">
          <i className='iconfont icon-bofangqi-bofangxiaodianshi'></i>
          <span>{data.bofang}</span>
        </div>
        <div className="data-pinglun">
          <i className='iconfont icon-pinglun'></i>
          <span>{data.pinglun}</span>
        </div>
      </div>
      <MoreOutline
        className="wv-pop"
        onClick={() => {
          setVisible(true)
        }}
      />
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        bodyStyle={{ height: "5rem" }}
      >
        <div className="wv-popup" onClick={() => delWaitVideos(data.id)}>
          <DeleteOutline className='wv-icon' />
          <span>删除</span>
        </div>
        <div className="wv-pop-bottom" onClick={() => setVisible(false)}>
          <span>取消</span>
        </div>
      </Popup>
    </div>
  )
}

export default WaitVideos
