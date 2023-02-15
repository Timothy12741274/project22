import React, {FC} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../store/hooks/hooks";
import s from './NewsItem.module.css'
const NewsItem = () => {
    const {id}: any = useParams()
    const news:any = useAppSelector(state => state.newsReducer.news)
    console.log(news)
    // @ts-ignore
    const newsItem:any = news.find((n:any)=>n.id === Number(id))
    const content = JSON.parse(newsItem.content)
    return (
        <div className={s.columns_wrapper}>
            <div className={s.wrapper}>
                <div className={s.title}>{newsItem.title}</div>
                {content.map((el:any)=>el.type === 'paragraph' ?
                    <div className={s.paragraph}>{el.value}</div> :
                    <img src={`http://localhost:5000/${el.value}`}/>
                )}
            </div>
            <div className={s.second_column}>
                {
                    // @ts-ignore
                    <Component news={news} id={id}/>
                }
            </div>
        </div>
    );
};
// @ts-ignore
const Component: FC = ({news, id}:any) => {
    const navigate = useNavigate()
    const h1 = (id:any) => {
        navigate(`/news/${id}`)
    }
    for (let i = 0; i < news.length - 1; i++) {
        let randomNumber = id
        while (randomNumber === id) {
            randomNumber = Math.floor(Math.random() * (news.length)) // + 0
        }
        const n = news[randomNumber]
        return <div>
            <div className={s.item} onClick={()=>h1(n.id)}>
                <img src={`http://localhost:5000/${n.main_photo}`} className={s.item_img}/>
                <div>{n.tag}</div>
                <div>{n.name}</div>
                <div className={s.item_title}>{n.title.slice(0, 100)}...</div>
            </div>
        </div>
    }
}

export default NewsItem;