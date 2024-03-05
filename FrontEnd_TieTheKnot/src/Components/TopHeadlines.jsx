import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Container, Row } from "react-bootstrap";
import { NewsArticle } from "./NewsArticle";
import { fetchTopHeadlines } from "../Services/FoodVlogService";

export function TopHeadlines() {
    const [articles, setArticles] = useState([]);

    async function fetchArticles() {
        try {
            const result = await fetchTopHeadlines();
            setArticles(result.articles);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchArticles();
        // fetchTopHeadlines().then((result)=>{
        //     setArticles(result.articles);
        // }).catch((error)=>{
        //     console.log(error);
        // });
    }, []);
    console.log(articles);
    return (
        <Container>
          <center>  <Header text="Welcome! On this page, you can find and explore health-related news."></Header></center>
          <br></br>
            <Row>
                {
                    articles.map((article) => {
                        return (
                           <NewsArticle article={article}></NewsArticle>
                        );
                    })
                }
            </Row>
        </Container>
    );
}