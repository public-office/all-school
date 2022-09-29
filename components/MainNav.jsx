function MainNav() {

  const [isVisible, setIsVisible] = useState(false)
  const menuState = (event) => {
    setIsVisible((isVisible) => !isVisible)
  }

  const [isExpanded, setisExpanded] = useState(false)
  const [buttonText, setbuttonText] = useState('Menu')

  return (
    <div className="menu">
      <span
          className="nav-trigger"
          onClick={function (event) {
          menuState()
          setbuttonText('Close x')
        }}
      >
        {buttonText}
      </span>
      {isVisible && (
        <nav>
          <a href="#about">About</a>
          <a href="#lab">LAB</a>
        </nav>
      )}
    </div>
  );
}

export default MainNav;