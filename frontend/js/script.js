import Property from "./property.js";

const properties = await Property.findAll();

console.log(properties);

if (properties.length === 0) {
  const noPropertiesMessage = document.createElement("p");
  noPropertiesMessage.textContent = "No properties found";
  document.querySelector(".properties").appendChild(noPropertiesMessage);
}

const propertiesContainer = document.querySelector("#properties");

properties.forEach((property) => {
  const propertyElement = `
  <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
  <div class="card product-item border-0 mb-4">
      <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img class="img-fluid w-100" src="img/apartmen t.jpeg" alt="">
      </div>
      <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h5 class="text-truncate mb-3">${property.name}</h5>
          <h5>${property.type}</h5>
          <h5>Keneth John</h5>
          <div class="d-flex justify-content-center">
              <h6>UGX: ${property.price}</h6>
          </div>
      </div>
      <div class="card-footer d-flex justify-content-between bg-light border">
          <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-thumbs-up text-primary mr-1"></i>Like</a>
          <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-thumbs-down text-primary mr-1"></i>Dislike</a>
          <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Details</a>
          <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-home text-primary mr-1"></i>Lease</a>
      </div>
  </div>
</div>
  `;

  propertiesContainer.innerHTML += propertyElement;
});

// create a new property
const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const property = new Property({
    title: formData.get("title"),
    description: formData.get("description"),
    location: formData.get("location"),
    price: formData.get("price"),
    image: formData.get("image"),
  });

  const res = await property.create();

  if (res.error) {
    alert(res.error);
    return;
  }

  const propertyElement = document.createElement("div");
  propertyElement.classList.add("property");

  const imageElement = document.createElement("img");
  imageElement.src = property.image;
  imageElement.alt = property.title;
  propertyElement.appendChild(imageElement);

  const titleElement = document.createElement("h2");
  titleElement.textContent = property.title;
  propertyElement.appendChild(titleElement);

  const priceElement = document.createElement("p");
  priceElement.textContent = property.price;
  propertyElement.appendChild(priceElement);

  const locationElement = document.createElement("p");
  locationElement.textContent = property.location;
  propertyElement.appendChild(locationElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = property.description;
  propertyElement.appendChild(descriptionElement);

  propertiesContainer.appendChild(propertyElement);

  form.reset();
});
