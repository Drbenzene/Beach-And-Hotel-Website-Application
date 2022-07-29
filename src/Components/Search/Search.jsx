import React, { useContext } from "react";
import styles from "./Search.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalContext } from "../../Context";

function Search() {
  const {
    changeHandler,
    maxSize,
    maxPrice,
    minSize,
    rooms,
    pets,
    price,
    breakfast,
  } = useContext(GlobalContext);

  /* Creating a new array of unique values from the rooms type array. */
  let majorType = rooms.map((room) => room.type);
  majorType = new Set(majorType);
  majorType = ["all", ...majorType];

  const types = majorType.map((theTtype, index) => (
    <option key={index} value={theTtype}>
      {theTtype}
    </option>
  ));

  console.log(types, "The Types");
  console.log(majorType, "The major type");

  /* Creating a new array of unique values from the rooms capacity array. */
  let majorCapacity = rooms.map((room) => room.capacity);
  majorCapacity = new Set(majorCapacity);
  majorCapacity = [...majorCapacity];

  const capacities = majorCapacity.map((theCapacity, index) => (
    <option key={index} value={theCapacity}>
      {theCapacity}
    </option>
  ));

  return (
    <div>
      <div className="container">
        <h1 className={styles.heading}>Search Rooms</h1>
        <form>
          <div className="row">
            <div className="col-md-2">
              <label>Room Type</label>
              <select
                name="type"
                onChange={changeHandler}
                className="form-select"
              >
                {types}
              </select>
            </div>

            <div className="col-md-2">
              <label>Capacity</label>
              <select
                name="capacity"
                onChange={changeHandler}
                className="form-select"
              >
                {capacities}
              </select>
            </div>

            <div className="col-md-2">
              <label>Room Price ${price}</label>
              <input
                type="range"
                name="price"
                value={price}
                min={0}
                max={maxPrice}
                onChange={changeHandler}
                className="form-range"
              />
            </div>

            <div className="col-md-2">
              <label htmlFor="size">Room Size</label>
              <div style={{display: 'flex' }}>
              <input className="form-control w-50 h-50" value={minSize} name="minSize"  type="number" style={{marginRight: 10}} onChange={changeHandler}/>
              <input className=" form-control w-50" type="number" name="maxSize" value={maxSize} onChange={changeHandler} />
              </div>
            </div>

            <div className="col-md-2">
              <div className="d-flex flex-column">
                <div>
                  <input name="breakfast" type="checkbox" checked={breakfast} onChange={changeHandler} />
                  <span className="px-4">BreakFast</span>
                </div>
                <div>
                  <input name="pets" type="checkbox" checked={pets} onChange={changeHandler} />
                  <span className="px-4">Pets</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <Rooms AllRoom={allRooms.rooms} /> */}
    </div>
  );
}

export default Search;
