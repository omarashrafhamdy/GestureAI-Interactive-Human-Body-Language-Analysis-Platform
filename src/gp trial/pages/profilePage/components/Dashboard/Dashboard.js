import React from 'react';

import ThirdSection from '../ThirdSection/ThirdSection';
import SecondSection from './components/dataInsight/SecondSection';

export default function Dashboard() {
    return (
        <div className='row'>
            <div className="col-sm-5 SecondSection">
                <SecondSection />
            </div>
            <div className="col-sm-7 ThirdSection">
                <ThirdSection />
            </div>
        </div>
    )
}
