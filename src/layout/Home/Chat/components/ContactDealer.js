import React, {  useEffect, useState } from "react";
import "../Chat.css";
import {useLocation} from "react-router-dom";
import { useDispatch } from "react-redux";
import { createDeal } from "../../../../slices/DealsSlice/DealsSlice";
import { getDealsListOfKol, getDealsListForUsers } from "../../../../slices/api/simpleApi";
import { imageUrl } from "../../../../common/apis";

const ContactDealer = () => {
  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");
  console.log(role);

  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
 // console.log(id);

  const dispatch = useDispatch();
  const [dealModal, setDealModal] = useState(false);
  const [dealForm, setDealForm] = useState({
    title:"",
    description:"",
    price:"",
    total_days:"",
    type:"",
    token
  });
  const [dealdetail, setDealDetails] = useState();
  const [kolDealForUser, setKolDealForUser] = useState();

  const showDealModal= () => {
    setDealModal(!dealModal);
  }

  const handleDealChange = (e) => {
    setDealForm((preState)=> {
      return {...preState, [e.target.name]:e.target.value }
    });
    //console.log(e.target.name, e.target.value );
  }

  const handleDealSubmit = (e) => {
    e.preventDefault();
    dispatch(createDeal(dealForm ));
    //setDealModal(false);
  }

  useEffect(()=> {
    const callback = (data) => {
      setKolDealForUser({...data});
      console.log()
    };
    getDealsListForUsers(callback, token,id);
  },[]);


  useEffect(()=> {
    const callback = (data) => {
      setDealDetails({...data});
      console.log()
    };
    getDealsListOfKol(callback, token);
  },[]);

  // console.log(dealdetail);
  console.log(kolDealForUser);

  return (
    <>
      <div className="col-lg-12">
            <h5>About the Creator</h5>
      </div>
      { role === 3 ? (
      <>
        <div className="kol-user-card">
          <div className="kol-user-icon"><img className="rounded-circle  img-fluid" src={`${imageUrl}${dealdetail?.avatar}`}  alt="avatar"/></div>
          <div className="kol-user-info">
            <div className="d-flex justify-content-between">
              <span className="deal-user-name">{`${dealdetail?.get_user?.name} ${dealdetail?.get_user?.last_name}`}</span>
              <span className=""><i className="bi bi-instagram"></i> 456k</span>
            </div>
            <div className="kol-user-loc">
                <i className="loc bi-geo-alt"></i>
                <p>
                  {dealdetail?.city} {dealdetail?.state}, india
                </p>
              </div>
          </div>
      </div>

      <h5 className="mt-3 mb-1 theme-color d-flex">Deals <button className="btn btn-sm theme-btn ms-auto" onClick={showDealModal}>+ Deal</button></h5>
      <div className="kol-user-deals">
        {dealdetail?.get_deal && dealdetail?.get_deal.map((item, index)=> {
          return(
            <div key={index} className="kol-list-deal">
            <div className="kol-deal-row justify-content-between align-items-start mb-0">
              <div className="kol-deal-heading h6">{item.title}</div>
              <div className="deal-price h6">${item.price} <input className="form-check-input price-check" type="radio" name="" id=""></input></div>
            </div>

            <div className="kol-deal-row">
              <span className="deal-icon-text"><i className="fa fa-calendar"></i>{item.total_days} Days</span>
              <span className="deal-icon-text"><i className="fa fa-picture-o"></i> {item.type}</span>
            </div>
            
            <p>{item.description}</p>
          </div>
          );
        })}

      </div>
      </>
      ) : (
      <>
        <div className="kol-user-card">
          <div className="kol-user-icon"><img className="rounded-circle  img-fluid" src={`${imageUrl}${dealdetail?.avatar}`}  alt="avatar"/></div>
          <div className="kol-user-info">
            <div className="d-flex justify-content-between">
              <span className="deal-user-name">{`${dealdetail?.get_user?.name} ${dealdetail?.get_user?.last_name}`}</span>
              <span className=""><i className="bi bi-instagram"></i> 456k</span>
            </div>
            <div className="kol-user-loc">
                <i className="loc bi-geo-alt"></i>
                <p>
                  {dealdetail?.city} {dealdetail?.state}, india
                </p>
              </div>
          </div>
      </div>

      <h5 className="mt-3 mb-1 theme-color d-flex">Deals </h5>
      <div className="kol-user-deals">
        {dealdetail?.get_deal && dealdetail?.get_deal.map((item, index)=> {
          return(
            <div key={index} className="kol-list-deal">
            <div className="kol-deal-row justify-content-between align-items-start mb-0">
              <div className="kol-deal-heading h6">{item.title}</div>
              <div className="deal-price h6">${item.price} <input className="form-check-input price-check" type="radio" name="" id=""></input></div>
            </div>

            <div className="kol-deal-row">
              <span className="deal-icon-text"><i className="fa fa-calendar"></i>{item.total_days} Days</span>
              <span className="deal-icon-text"><i className="fa fa-picture-o"></i> {item.type}</span>
            </div>
            
            <p>{item.description}</p>
          </div>
          );
        })}

      </div>
      </>
      )}

      

      <div className="deal-action-bar">
          <form className="deal-form-row" >
            <select className="form-select">
              <option>Order Summary</option>
              <option>Order Summary</option>
              <option>Order Summary</option>
            </select>
            <button type="submit" className="btn theme-btn">
              Buy Now
            </button>
          </form>
      </div>

    { dealModal && 
    <div className="modal-open overflow-hidden">
      <div className="modal fade show" style={{display:'block'}}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header px-4">
              <h5 className="modal-title theme-color">Add Deal</h5>
              <button type="button" className="btn-close" onClick={showDealModal} ></button>
            </div>
            <form onSubmit={handleDealSubmit}>
              <div className="modal-body px-4">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="form-label ">Title</label>
                      <input type="text" className="form-control" name="title" required autoComplete="off" onChange={handleDealChange} />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Description</label>
                      <textarea type="text" className="form-control" name="description"  rows="3" autoComplete="off" onChange={handleDealChange}></textarea>
                    </div>
                    <div className="col-6 mb-3">
                      <label className="form-label">Price</label>
                      <input type="number" className="form-control" name="price" required autoComplete="off" onChange={handleDealChange}/>
                    </div>
                    <div className="col-6 mb-3">
                      <label className="form-label">Days</label>
                      <input type="number" className="form-control" name="total_days" required autoComplete="off" onChange={handleDealChange}/>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="form-check d-inline-block me-3">
                          <input className="form-check-input" type="radio" name="type" id="video" value="video" onChange={handleDealChange} />
                          <label className="form-check-label" htmlFor="video">
                              Video
                          </label>
                      </div>
                      <div className="form-check d-inline-block">
                          <input className="form-check-input" type="radio" name="type" id="image" value="image" onChange={handleDealChange} />
                          <label className="form-check-label" htmlFor="image">
                              Image
                          </label>
                      </div>
                    </div>
                  </div>
              </div>
            <div className="modal-footer justify-content-start px-4 py-3">
              <button type="submit" className="btn theme-btn">Create Deal</button>
            </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
      </div>
      }
      

    </>
  );
};

export default ContactDealer;