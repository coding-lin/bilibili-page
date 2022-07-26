import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import Loading from '@/components/common/loading'
import SearchBox from '@/components/common/search-box'
import { useNavigate } from 'react-router-dom'
import NothingImg from '@/assets/images/nothing.png'
import { Container, HeaderWrapper, Empty, GoodsWrapper, EnterLoading } from './style'
import { changeEnterLoading, getGoodsList } from './store/actionCreators'
import { Wrapper } from '@/pages/Vip/GoodsList/style'
import GoodsItem from '@/components/GoodsItem'

const VipSearch = (props) => {
  const navigate = useNavigate()
  const { enterLoading, goodsList } = props
  const { changeEnterLoadingDispatch, getGoodsListDispatch } = props
  const [query, setQuery] = useState('')
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  const handleQuery = (q) => {
    setQuery(q)
  }

  useEffect(() => {
    if (query.trim()) {
      changeEnterLoadingDispatch(true)
      getGoodsListDispatch(query)
    }
  }, [query])

  const renderGoodsList = () => {
    return (
      <Wrapper>
        <h3 style={{"margin": "5px"}}>商品列表</h3>
        <div className="container">
        {
          goodsList.filter(good => 
            good.title.indexOf(query) != -1
          ).map(good => {
            return (
              <GoodsItem key={good.id} good={good} />
            )
          })
        }
        </div>
      </Wrapper>
    )
  }

  const EmptyWrapper = () => {
    return (
      <Empty>
        <div className='info'>
          <img src={NothingImg} />
          <span>没有搜到商品...</span>
        </div>
      </Empty>
    )
  }

  return (
    <Container>
      <HeaderWrapper>
        <SearchBox
          newQuery={query}
          handleQuery={handleQuery}>
        </SearchBox>
        <span onClick={() => navigate(-1)}>取消</span>
      </HeaderWrapper>
      <GoodsWrapper show={query}>
        {
          goodsList.filter(
            item => item.title.indexOf(query) != -1
          ).length > 0
          ?
            renderGoodsList()
          :
            EmptyWrapper()
        }
        </GoodsWrapper>
        { enterLoading && <EnterLoading><Loading></Loading></EnterLoading> }
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    enterLoading: state.vipsearch.enterLoading,
    goodsList: state.vipsearch.goodsList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeEnterLoadingDispatch(data) {
      dispatch(changeEnterLoading(data))
    },
    getGoodsListDispatch(query) {
      dispatch(getGoodsList(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(VipSearch))