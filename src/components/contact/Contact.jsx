import React from 'react';
import Title from '../Title.jsx';
import styles from '../../css/contact.module.css';

// import Contact from './Contact.jsx';
// const Contact = (props) => {
const Contact = () => {

    // no refs

    // const [isOpen, setOpen] = useState(false);

    // const toggleNav = () => {
    //    setOpen(isOpen => !isOpen)
    // }



    return (
        <section    className={styles.contact}>
            <Title titleLeft="contact" titleRight="us"/>
            <div className={styles.center}>
                <form   action="https://formspree.io/dwilbank@gmail.com"
                        method='POST'
                        className={styles.form}>
                    <div>
                        <label htmlFor="name">name</label>
                        <input  type="text" name="name" id="name"
                                className={styles.formControl}
                                placeholder="John Smith"/>
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input  type="email" name="email" id="email"
                                className={styles.formControl}
                                placeholder="example@email.com"/>
                    </div>
                    <div>
                        <label htmlFor="message">message</label>
                        <textarea   name="message" id="message"
                                    className={styles.formControl}
                                    rows="10"/>
                    </div>
                    <div>
                        <input  type="submit" value="submit here"
                                className={styles.submit}/>
                    </div>
                </form>
            </div>
        </section>
    );
};


// Contact.defaultProps = {};
// Contact.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({
//          title: PropTypes.string.isRequired,
//          text: PropTypes.string.isRequired
//     }).isRequired,
//     comments:    PropTypes.arrayOf(PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default Contact;


///////////////////////////////////// BACKGROUND IMAGE /////////////////////////////////////

// import Foo from './images/foo.png';

// style={{background:`white url(${Foo})`}}


///////////////////////////////////// REACT-REVEAL EFFECT /////////////////////////////////////

// import Fade from 'react-reveal/Fade.js';
// import Slide from 'react-reveal/Slide.js';
// import Zoom from 'react-reveal/Zoom.js';

// <Fade delay={500}>...</Fade>
// <Slide left delay={1000}>...</Slide
// <Zoom delay={foo.delay}>...</Zoom>