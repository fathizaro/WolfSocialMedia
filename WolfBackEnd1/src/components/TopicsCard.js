import React from 'react';
import { useTranslation } from 'react-i18next';


const TopicsCard = () => {
    const { t } = useTranslation();

    return (

        <div class="card mb-3">

            <h4 className="card-header text-center text-primary text-nowrap ">{t('Trending')}</h4>

            <ul class="list-group list-group-flush text-nowrap">
                <li class="list-group-item">Barca VS Bayrn</li>
                <li class="list-group-item">IOS16</li>
                <li class="list-group-item">IsraeliTerrorism</li>
                <li class="list-group-item">Queen-Elizabeth</li>
            </ul>
        </div>
    );
};

export default TopicsCard;
