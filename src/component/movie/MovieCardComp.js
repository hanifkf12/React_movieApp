import React from "react";
import {Card, Col} from "antd";

const {Meta} = Card;
const MovieCardComp = (props) => {
    let posterUrl = "https://image.tmdb.org/t/p/w500/" + props.Movie.poster_path
    let subsOverview = props.Movie.overview.substring(1, 180) + "..."

    return <>
        <Col lg={8} sm={12}>
            <Card
                hoverable
                style={{margin: 15}}
                cover={<img alt="example" src={posterUrl}/>}
            >
                <Meta title={props.Movie.original_title} description={subsOverview}/>
            </Card>,
        </Col>

    </>


}

export default MovieCardComp