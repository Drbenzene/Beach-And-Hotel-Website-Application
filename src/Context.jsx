import React, { useEffect, useState } from "react";
import Data from "./Data";

const GlobalContext = React.createContext();

const Provider = (props) => {
  const [allRooms, setAllRooms] = useState({
    rooms: localStorage.getItem('rooms')? JSON.parse(localStorage.getItem('rooms')) : [],
    featured: [],
    filteredRooms: [],
    loading: false,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  useEffect(() => {
    newData();
  }, []);

  const newData = () => {
    const Rooms = Data.map((room) => ({
      id: room.sys.id,
      name: room.fields.name,
      slug: room.fields.slug,
      type: room.fields.type,
      price: room.fields.price,
      size: room.fields.size,
      capacity: room.fields.capacity,
      pets: room.fields.pets,
      breakfast: room.fields.breakfast,
      featured: room.fields.featured,
      description: room.fields.description,
      extras: room.fields.extras,
      images: room.fields.images.map((image) => image.fields.file.url),
    }));

    const prices = Rooms.map((room) => room.price);
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);

    const sizes = Rooms.map((room) => room.size);
    const maxSize = Math.max(...sizes);
    const minSize = Math.min(...sizes);


    setAllRooms({
      ...allRooms,
      rooms: Rooms,
      featured: Rooms.filter((room) => room.featured === true),
      filteredRooms: Rooms,
      loading: false,
      maxPrice,
      minPrice,
      minSize,
      price: maxPrice,
      maxSize: maxSize,
      size: maxSize,
    });

    localStorage.setItem("rooms", JSON.stringify(Rooms));
  };

  const getSingleRoomHandler = (slug) => {
    console.log("getSingleRoomHandler")
    const tempRooms  =  allRooms.rooms
    return tempRooms.find((room) => room.slug === slug)
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setAllRooms({ 
        ...allRooms, 
        [name]: value });
        
    let tempRooms = [...allRooms.rooms];

    if (name === "type" && value !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === value);
    }

    if (name === "capacity" && parseInt(value) !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity === parseInt(value));
    }

    if (name === "price") {
      tempRooms = tempRooms.filter((room) => room.price <= allRooms.price && room.price <= allRooms.maxPrice );
    }

    tempRooms = tempRooms.filter((room) => room.size >= parseInt(allRooms.minSize) && room.size <= parseInt(allRooms.maxSize))

    if (type === "checkbox") {
      tempRooms = tempRooms.filter((room) => room.pets === true && room.breakfast)
    }

    setAllRooms((prev) => ({
      ...prev,
      filteredRooms: tempRooms,
    }));

  };
  
  return (
    <GlobalContext.Provider
      value={{
        ...allRooms,
        changeHandler,
        getSingleRoomHandler,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

const Consumer = GlobalContext.Consumer;

export { GlobalContext, Provider, Consumer };
