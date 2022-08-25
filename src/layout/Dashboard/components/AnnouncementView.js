import React, { useEffect , useState } from 'react'
import {getAnnouncement} from '../../../slices/api/simpleApi'
import { useParams } from "react-router-dom";
import {imageUrl} from '../../../common/apis' 
import { Link } from "react-router-dom";

const AnnouncementView = () => {
  
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [announcementData , setAnnouncementData] = useState([]);
  
  useEffect(() => {
    const callback = (data) => {
      console.log(data);
      setAnnouncementData([...data])
    };
    getAnnouncement(callback, token , id);
  }, [id]);

console.log(announcementData);

  return (
    <>
      <div className="row col-12">
        <div className="col-6">
            <h3 className="mt-4">Add Announcement</h3>
        </div>
        <div className="col-6">
          <Link to={`/dashboard/announcement/${id}`}>Edit</Link>
          {/* <Link to={`/dashboard/announcement`}>Add</Link> */}
        </div>

      </div>
    {
      announcementData && announcementData.map((item,index)=>{
        return(
          <div className="dashboard-main-form" key={index}>
          <div className="row mt-3">
            <div className="col-6">
              <label className="form-label">
                <b>Title : </b>
              </label>
              <span> {item.title}</span>
            </div>
            <div className="col-6">
              <label className="form-label">
                <b>Start Date : </b>
              </label>
              <span> {item.start_date}</span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <label className="form-label">
                <b>Description : </b>
              </label>
              <span> {item.description}</span>
            </div>
            <div className="col-6">
                <label className="form-label">
                  <b>End Date : </b>
                </label>
                <span> {item.end_date}</span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <label className="form-label">
                <b>Social Media Platform : </b>
              </label>
              <span> {item.social_platform}</span>
            </div>
            <div className="col-6">
                <label className="form-label">
                  <b>Image : </b>
                </label>
                <img className='img-fluid' src={`${imageUrl}${item.image}`}/> 
            </div>
          </div>
        </div>
        )
      })
    }
     
    </>
  )
}

export default AnnouncementView