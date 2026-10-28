import React from 'react';
import Movie from './components/Movie';
import {ScrollView} from 'react-native';

class AllMovies extends React.Component {
    render() {
        return (
            <ScrollView>
                <Movie title={'Doctor Sleep'} year={2019} icon_name={"skull"} icon_color={'grey'} poster={require('./img/doctor-sleep.jpg')} />
                <Movie title={'Midway'} year={2020} icon_name={"person-rifle"} icon_color={'grey'} poster={require('./img/midway.jpg')} />
                <Movie title={'Sonic 3'} year={2024} icon_name={"bolt"} icon_color={'blue'} poster={{uri: 'https://www.impawards.com/2024/posters/sonic_the_hedgehog_three_ver5.jpg'}} />

            </ScrollView>
        );
    };
};

export default AllMovies;