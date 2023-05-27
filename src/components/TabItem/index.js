import './index.css'

const TabItem = props => {
  const {eachTabItemDetails, updateActiveTabItem, isActive} = props
  const {displayText, tabId} = eachTabItemDetails
  const onUpdateActiveTabItem = () => {
    updateActiveTabItem(tabId)
  }

  const activeTabAddStyles = isActive ? 'add-active-styles' : ''

  return (
    <li className="tabItems">
      <button
        className={`tab-item ${activeTabAddStyles}`}
        type="submit"
        onClick={onUpdateActiveTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
