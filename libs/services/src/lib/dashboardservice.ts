// import HttpClient from './config/httpClient'

// export class DashboardService {
//   private readonly httpClient: HttpClient
//   private readonly endPoints = {
//     // getUserBehaviour: 'api/v1/users/',
//     getUserBehaviour:'http://localhost:3000/dashboard'
//   }

//   constructor(componentName: string) {
//     this.httpClient = new HttpClient(componentName)
//   }
//   // Api calling methods

//   fetchclassDistributionData = async () => {

//     const classDistributionData = [
//       { name: "Person", value: 1423 },
//       { name: "Car", value: 846 },
//       { name: "Bike", value: 512 },
//       { name: "Traffic Sign", value: 398 },
//       { name: "Animal", value: 273 },
//       { name: "Icons", value: 273 },
//     ];
    
//     return classDistributionData;
//   }
// }
import axios from 'axios';

export class DashboardService {
  constructor(private context: string) {}

  fetchTotalImages() {
    return axios.get('http://localhost:3000/dashboard/total-images')
      .then(res => res.data.totalImages);
  }

  fetchTotalAnnotations() {
    return axios.get('http://localhost:3000/dashboard/total-annotations')
      .then(res => res.data.totalAnnotations);
  }

  fetchAverageQuality() {
    return axios.get('http://localhost:3000/dashboard/average-quality')
      .then(res => res.data.averageQuality);
  }

  fetchclassDistributionData() {
    return axios.get('http://localhost:3000/dashboard/class-distribution')
      .then(res => res.data.map((item: any) => ({
        name: item.class_name,
        value: parseInt(item.count)
      })));
  }
}

