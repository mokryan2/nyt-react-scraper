import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Query from "../../components/Query";
import Article from "../../components/Articles";
import API from "../../utils/API";

class Home extends Component {
    state = {
        articles: [],
        q: "",
        startYear: "",
        endYear: "",
        message: "Search for Articles"
    };

    getArticles = () => {
        API.getArticles({
            q: this.state.q,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        })
            .then(res =>
                this.setState({
                    articles: res.data,
                    message: !res.data.length
                        ? "Nothing found, Please Try something else" : ""
                }))
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getArticles();
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron />
                    </Col>
                    <Col size="md-12">
                        <Card title="Search">
                            <Query
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                q={this.state.q}
                                startYear={this.startYear}
                                endYear={this.endYear}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Results">
                            {this.state.articles.length ? (
                                <List>
                                    {this.state.articles.map(article => (
                                        <Article
                                            key={article._id}
                                            _id={article._id}
                                            title={article.headline.main}
                                            url={article.web_url}
                                            date={article.pub_date}
                                            handleClick={this.handleArticleSave}
                                            buttonText="Save Article"
                                        />
                                    ))}
                                </List>
                            ) : (
                                    <h2 className="text-center">{this.state.message}</h2>
                                )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Home;
