import React from 'react';

import Card from '../components/Card';

function Lessons({ match, data }) {
    const lessons = match.params.topic ? data.filter(lessons => lessons.topic === match.params.topic) : data;

    return (
        <main id="books">
            <div className="mdc-layout-grid">
                <div className="mdc-layout-grid__inner">
                    {lessons.map((lessons, index) =>
                        <div key={index} className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
                            <Card lessons={lessons} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Lessons;