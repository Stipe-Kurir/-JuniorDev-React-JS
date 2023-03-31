import "./title.css"


const Title = ({ime,prezime}) => {
  return (
    <div className="title">
      <p className="name">
        {ime} {prezime}
      </p>
      <p className="desc">Computer Science student at FESB</p>
      
    </div>
  )
}

export default Title
