import React, { Component } from "react"
import styles from '../../css/items.module.css';
import Tour from './Tour.jsx';
import Title from '../Title.jsx';

class TourList extends Component {

    state = {
        tours: [],
        sortedTours: []
    }

    componentDidMount() {
        this.setState({
            tours: this.props.tours.edges,
            sortedTours: this.props.tours.edges
        })
    }


    render() {
        return (
            <section className={styles.tours}>
                <Title titleLeft="our" titleRight="tours"/>
                <div className={styles.center}>
                    {this.state.sortedTours.map(({node}) => (
                        <Tour tour={node} key={node.contentful_id}/>
                    ))}
                </div>
            </section>
        )
    }
}

export default TourList