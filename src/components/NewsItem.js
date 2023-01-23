import React from "react";

const NewsItem =(props)=>{


    let { description, title,imageUrl,newsUrl,time,author,source, } = props;
    return (
      <div>

        <div className="card my-3" style={{width: "18rem"}}>
        <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
        <span className=" badge rounded-pill bg-danger" >
    {source}
  </span>
        </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">

            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {time}</small></p>
            <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );

  
}

export default NewsItem;
