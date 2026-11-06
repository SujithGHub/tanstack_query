self.onmessage = async (event) => {

  const { id, type } = event.data;

  const response = await fetch(`http://localhost:5000/${type}/${id}`);
  const data = await response.json();


  self.postMessage({ id: data.id, title: data.title, desc: data.description })

}