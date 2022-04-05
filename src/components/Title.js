import './Title.css'


const Title = ({ firstline, secondline }) => {
  return (
      <section className='Title'>
        <h1>
            <span>{ firstline }</span>
            <span>{ secondline }</span>
        </h1>
      </section>
  )
}

Title.defaultProps = {
    firstline: 'Hello',
    secondline: 'World !',
}

export default Title