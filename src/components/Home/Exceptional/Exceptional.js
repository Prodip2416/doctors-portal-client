import React from 'react';
import mask from '../../../images/mask.png';

const Exceptional = () => {
    return (
        <section className="d-flex justify-content-center mt-5">
            <div className="row w-75 mt-5 mb-5">
                <div className="col-md-5">
                    <img src={mask} style={{height:'400px'}} className="img img-fluid" alt="" />
                </div>
                <div className="col-md-7 mt-5">
                    <h2>Exceptional Dental <br /> Care, on Yours Terms</h2>
                    <p className="mb-5 text-secondary mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, quaerat voluptatum corporis nihil id ducimus eius similique nobis perspiciatis quibusdam, atque quos aliquam optio totam. Ex sapiente eligendi repellat quaerat beatae inventore odio hic odit quasi, nam in quae dolore quidem porro modi quod delectus et molestiae ab! Iure culpa eos harum! Aliquid provident itaque iure deserunt fuga voluptatum repellat, reiciendis aut, amet ratione molestiae.</p>
                    <button className="btn button-color">Lear More</button>
                </div>               
           </div>
        </section>
    );
};

export default Exceptional;