import React from "react";
import { dogBreeds, allDogBreeds } from "../Redux/Actions/Actions";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedSubBreed, setSelectedSubBreed] = useState("");
  const dispatch = useDispatch();
  const { breeds, allBreeds, theme } = useSelector((state) => state.app);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dog.ceo/api/breeds/list/all");
        const breedData = response.data.message;

        const breedNames = Object.keys(breedData);

        const updatedBreeds = breedNames.map((breed, index) => {
          const subBreeds = breedData[breed];
          return {
            id: Date.now() + index,
            breed,
            subBreeds,
          };
        });

        dispatch(allDogBreeds(updatedBreeds));
      } catch (error) {
        console.error("Error loading breeds:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  console.log("Breeds___", breeds);
  console.log("allBreeds___", allBreeds);

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
    setSelectedSubBreed("");
  };

  const handleSubBreedChange = (event) => {
    setSelectedSubBreed(event.target.value);
  };

  useEffect(() => {
    if (selectedBreed.length === 0) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://dog.ceo/api/breeds/image/random/8"
          );
          const abc = response.data.message;
          const xyz = abc.map((img, index) => {
            return {
              id: Date.now() + index,
              img,
            };
          });
          dispatch(dogBreeds(xyz));
        } catch (error) {
          console.error("Error loading breeds:", error);
        }
      };

      fetchData();
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://dog.ceo/api/breed/${selectedBreed}/images/random/8`
          );
          const abc = response.data.message;
          const xyz = abc.map((img, index) => {
            return {
              id: Date.now() + index,
              img,
            };
          });
          dispatch(dogBreeds(xyz));
        } catch (error) {
          console.error("Error loading breeds:", error);
        }
      };

      fetchData();
    }
  }, [selectedBreed, dispatch]);

  console.log("Sel___", selectedBreed);

  useEffect(() => {
    if (selectedSubBreed.length === 0) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://dog.ceo/api/breed/${selectedBreed}/images/random/8`
          );
          const abc = response.data.message;
          const xyz = abc.map((img, index) => {
            return {
              id: Date.now() + index,
              img,
            };
          });
          dispatch(dogBreeds(xyz));
        } catch (error) {
          console.error("Error loading breeds:", error);
        }
      };

      fetchData();
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://dog.ceo/api/breed/${selectedSubBreed}/images/random/8`
          );
          const abc = response.data.message;
          const xyz = abc.map((img, index) => {
            return {
              id: Date.now() + index,
              img,
            };
          });
          dispatch(dogBreeds(xyz));
        } catch (error) {
          console.error("Error loading breeds:", error);
        }
      };

      fetchData();
    }
  }, [selectedBreed, selectedSubBreed, dispatch]);

  console.log("SelSub___", selectedSubBreed);

  return (
    <>
      <div
        style={{
          backgroundColor: theme ? "black" : "white",
          color: theme ? "white" : "black",
        }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <div className="text-center py-4">
                <div className="form-group">
                  <label htmlFor="breeds" className="form-label">
                    Choose a Breed:
                  </label>
                  <select
                    id="breeds"
                    value={selectedBreed}
                    onChange={handleBreedChange}
                    className="form-select mb-3"
                    style={{
                      width: "50%",
                      margin: "auto",
                      backgroundColor: theme ? "black" : "white",
                      color: theme ? "white" : "black",
                    }}
                  >
                    <option value="">Select Breed</option>
                    {allBreeds.map((breed) => (
                      <option key={breed.id} value={breed.breed}>
                        {breed.breed}
                      </option>
                    ))}
                  </select>

                  {selectedBreed && (
                    <div className="py-2">
                      <label htmlFor="subBreeds" className="form-label">
                        Choose a Sub-Breed:
                      </label>
                      <select
                        id="subBreeds"
                        value={selectedSubBreed}
                        onChange={handleSubBreedChange}
                        className="form-select"
                        style={{
                          width: "50%",
                          margin: "auto",
                          backgroundColor: theme ? "black" : "white",
                          color: theme ? "white" : "black",
                        }}
                      >
                        <option value="">Select Sub-Breed</option>
                        {allBreeds
                          .find((breed) => breed.breed === selectedBreed)
                          .subBreeds.map((subBreed, index) => (
                            <option key={index} value={subBreed}>
                              {subBreed}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="text-center">
                <h1>
                  {selectedBreed === ""
                    ? "Dog Breeds"
                    : `${
                        selectedBreed.charAt(0).toUpperCase() +
                        selectedBreed.slice(1)
                      } ${
                        selectedSubBreed.charAt(0).toUpperCase() +
                        selectedSubBreed.slice(1)
                      }`}
                </h1>
              </div>
            </div>
            <hr />
          </div>
          <div className="d-flex justify-content-center">
            <div className="row">
              {breeds.map((img) => (
                <div className="col py-3" key={img.id}>
                  <div
                    className="card h-100 text-center"
                    style={{
                      width: "15rem",
                      height: "480px",
                      backgroundColor: theme ? "black" : "white",
                      color: theme ? "white" : "black",
                    }}
                  >
                    <img
                      src={img.img}
                      className="card-img-top"
                      alt={""}
                      height={"250px"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
