export default async function api() {
  let response = await fetch(
    "https://restaurant.delino.com/restaurant/menu/00b99096-3dca-41dd-ae68-61265cafd5ca"
  );
  //   console.log(response);

  if (response.ok) {
    // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
    return json;
  } else {
    alert("HTTP-Error: " + response.status);
  }
}
