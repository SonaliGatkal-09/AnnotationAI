import HttpClient from './config/httpClient'

class ImageSearchService {
  private readonly httpClient: HttpClient
  private readonly endPoints = {
    getUserBehaviour: 'api/v1/users/',
  }

  constructor(componentName: string) {
    this.httpClient = new HttpClient(componentName)
  }
  // Api calling methods
}

export default ImageSearchService