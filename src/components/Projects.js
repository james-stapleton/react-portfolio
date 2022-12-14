import React from 'react';
import Card from './Card';
import seo from '../images/refactor.png';

export default function Projects () {
    return (
        <div id = "projects">

                <Card 
                    projectName = "Cocktail Curator"
                    image = {seo}
                    />

                <Card 
                    projectName = "Tech Blog"
                    image = "refactor.png"
                    />

                <Card 
                    projectName = "Social Media API"
                    image = "refactor.png"
                    />

                <Card 
                    projectName = "Regex Tutorial"
                    image = "refactor.png"
                    />

                <Card 
                    projectName = "Employee Tracker DB"
                    image = "refactor.png"
                    />

                <Card 
                    projectName = "Team Profile Generator"
                    image = "refactor.png"
                    />

            </div>
    )
}