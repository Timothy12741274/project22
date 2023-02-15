import React, {useEffect} from 'react';
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import {newsSlice} from "../../store/reducer/newsReducer";
import s from './News.module.css'
import {useNavigate} from "react-router-dom";

const News = () => {
    const dispatch = useAppDispatch()
    const news:any = useAppSelector(state => state.newsReducer.news)
    const navigate = useNavigate()
    useEffect(()=>{
        const setStoreNews = async () => {
            axios.get('http://localhost:5000/api/news/all')
                .then((res)=>{
                    dispatch(newsSlice.actions.setNews({news: res.data}))
                })
        }
        setStoreNews()
    }, [])
    const h1 = (id:any) => {
     navigate(`/news/${id}`)
    }
    return (
        <div>
            <div>{
                news.map((n:any)=> {
                    return <div className={s.item} onClick={()=>h1(n.id)}>
                        <img src={`http://localhost:5000/${n.main_photo}`} className={s.item_img}/>
                        <div>{n.tag}</div>
                        <div>{n.name}</div>
                        <div className={s.item_title}>{n.title.slice(0, 100)}...</div>
                    </div>
                })
            }</div>
        </div>
    );
};

export default News;