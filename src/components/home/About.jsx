import React from 'react';
import Title from "../Title.jsx";
import styles from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';

const About = () => {

    return (
        <section    className={styles.about}>
            <Title titleLeft='about' titleRight='us'/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company"/>
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae rem voluptatem?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae rem voluptatem?</p>
                    <button type="button"
                            className="btn-primary">
                        read more
                    </button>
                </article>
            </div>
        </section>
    );
};

export default About;