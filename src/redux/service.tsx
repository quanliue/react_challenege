import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

var Services = {
  getUsers() {
    return new Promise((resolve, reject) => {
      axios.get(url).then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  },
}

export default Services;