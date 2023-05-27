import './index.css'

const AppItem = props => {
  const {eachAppItemDetails} = props
  const {appName, imageUrl} = eachAppItemDetails
  return (
    <li className="app-items">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
