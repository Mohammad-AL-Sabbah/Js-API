async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
  const result =  data.map(function (post) {
    return `<tr>
    <td>${post.id}</td>
    <td class="name-data"><p>${post.name}</p></td>
    <td class="username-data">${post.username}</td>
    <td class="email-data">${post.email}</td>
    <td>
    <div class="address-data">
    <p class="street-data">street : ${post.address.street}.</p>
    <p class="suite-data">suite : ${post.address.suite}.</p>city: ${post.address.city}</p>
    <p class="zipcode-data">zip code: ${post.address.zipcode}.</p>
    <div class="address-geo">
    <p class="lat-data">lat : ${post.address.geo.lat}.</p>
    <p class="lng-data">lng : ${post.address.geo.lng}.</p>
    </div>
    </div>
    </td>
    <td class="phone-data">${post.phone}</td>
    <td class="website-data">${post.website}</td>
    <td>
    <div class="company-data">
    <p class="name-data">name : ${post.company.name}.</p>
    <p class="catchphrase-data">catchPhrase : ${post.company.catchPhrase}.</p>
    <p  class="bs-data">bs : ${post.company.bs}.</p>
    </div>
    </td>
    </tr>
    `
    })
    
    document.querySelector('tbody').innerHTML = result.join('');

}
getData();