import React, {Component} from "react";
import axios from 'axios/dist/axios'
import MovieCardComp from "./MovieCardComp";
import {Col, Layout, Row, Spin} from "antd";

const {Header, Footer, Content} = Layout;

class MoviePageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: true
        }
    }

    componentDidMount() {
        let username = localStorage.getItem("username");
        console.log("Username",username)
        axios.get("\n" +
            "https://api.themoviedb.org/3/movie/popular?api_key=23256e2f55aec19420181dbb09b3d7ba&language=en-US&page=1\n").then((response) => {
            console.log("RESPONSE", response.data.results)
            this.setState({
                movies: response.data.results,
                loading: false
            })
        }).catch((err) => {
            console.log("ERROR", err)
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <Layout>
                    <Content style={{minHeight: "100vh"}}>
                        < Row justify="center" align="middle" style={{minHeight: "100vh"}}>
                            <Col>
                                <div className="example" align="center">
                                    <Spin size="large"/>
                                </div>
                            </Col>
                        </Row>
                    </Content>
                </Layout>

            )
        }
        return (
            <Layout>
                <Header >
                    <div className="logo" style={{textAlign: "center", color: "#fff", fontSize: "24px"}}>
                        Popular Movie
                    </div>
                </Header>
                <Content>
                    <div className="site-card-wrapper" style={{margin: 50}}>
                        <Row gutter={16}>

                            {this.state.movies.map((movie) => (
                                <MovieCardComp Movie={movie} key={movie.id}/>
                            ))}
                        </Row>


                    </div>
                </Content>
                <Footer style={{textAlign: 'center' , background:"#cb7070"}}>Hanif KF ©2020 Created by hanifkf12</Footer>
            </Layout>
        )
    }
}


export default MoviePageComponent