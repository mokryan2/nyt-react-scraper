import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Query from "../../components/Query";
import Article from "../../components/Articles"

class Home extends Component {
    state = {
        articles: [],
        q: "",
        startYear: "",
        endYear: "",
        message: "Search for Articles"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event =>{
        event.preventDefault();
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
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    <Card title="Results">
                    </Card>
                    </Col>
                </Row>

            </Container>
        )
    }

}

export default Home;
