const Box = props => {
  const {boxSize, sizeName} = props
  return (
    <div className={boxSize}>
      <p className='size-name'>{sizeName}</p>
    </div>
  )
}

const element = (
  <div className='boxes-bg-container'>
    <h1 className='title'> Boxes </h1>
    <div className='boxes-container'>
      <Box boxSize='small-box' sizeName='Small' />
      <Box boxSize='medium-box' sizeName='Medium' />
      <Box boxSize='large-box' sizeName='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
