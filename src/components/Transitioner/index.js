import './trans.css';

const Transitioner = (props) => {
    return (
        <div className='transitionWrap' style={{animation: `${props.animation}t 1200ms forwards`}}>
        </div>
    );
};

export default Transitioner;