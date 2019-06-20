import New from './New'

const News = (props) => {
  return (
    <div className="row">
      {props.news.map((aNew) => (
        <New
          key={aNew.url}
          new={aNew}
        />
      ))}
    </div>
  )
}

export default News;
