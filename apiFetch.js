// some comment
const httpUrl =  "http://api.tianapi.com/star/index?key=6292c8dc89486f84e435358844b69a4e&astro=";
const constellation_str = "pisces";

async function load() {
  try {
    const response = await fetch(httpUrl + constellation_str);
    const body = await response.json();
    const list = document.getElementById("list");
    list.innerText = "";
    body.newslist.forEach(({ type, content }) => {
      const listItem = document.createElement("li");
      listItem.innerText = `type: ${type}, content: ${content}`;
      list.appendChild(listItem);
    });
  } catch (err) {
    console.error(err);
  }
}

load();// JavaScript Document
