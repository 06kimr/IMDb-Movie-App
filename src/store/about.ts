import { Store } from "../core/utils";


interface State{
  photo: string;
  name: string;
  email: string;
  github: string;
  repository: string
}
export default new Store<State>({
  photo: "../image.jpg",
  name: 'Ricky / YoungSeo Kim',
  email: '06kimr@gmail.com',
  github: 'https://github.com/06kimr',
  repository: 'https://github.com/06kimr/IMDb-Movie-App'
})