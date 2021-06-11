import axios from 'axios';

const firebase=axios.create({
    baseURL:'https://rock-position-315305-default-rtdb.asia-southeast1.firebasedatabase.app',

});

export default firebase;