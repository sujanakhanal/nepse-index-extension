const getNepseIndex = async () => {
  try {
    const res = await fetch(
      "https://www.onlinekhabar.com/smtm/home/indices-data/nepse/1d"
    );
    const data = await res.json();
    console.log(data);
    const nepseData = document.querySelector("#nepse");
    nepseData.innerHTML = `
        Latest price: ${data.response.latest_price}<br>
        Latest point : ${data.response.point_change}<br>
        Latest percentage : ${data.response.percentage_change}
        
        `;
  } catch (error) {
    console.error("Error fetching data!", error);
  }
};

window.addEventListener("load", () => {
  getNepseIndex();
});
