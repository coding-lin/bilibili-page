import styled from 'styled-components';

export const BannersWrapper = styled.div`
height: 1.582rem;
.btn_banners{
    width:100%;
    height:50vw;
    background:#fff;
    
}
.swiper-slide{
    display: flex;
    flex-wrap: wrap;
    
}
.swiper-item{
    display:flex;
    width: 20%;
    height: 40%;
    justify-content: space-around;
    
} 
.swiper-item div{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:3vw;
    
}
.swiper-item div p{
    height:14vw;
    width:14vw;
    background: skyblue;
}
.swiper-item div img{
    height:100%;
    width:100%
}
.swiper-pagination{
    bottom: 0;
    
}
.swiper-pagination-bullet{
    border-radius: 0;
    height: 2px;
}
`