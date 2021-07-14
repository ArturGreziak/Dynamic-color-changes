{
  const form = document.querySelector(".form-color1");
  const input = form.querySelector(".input-color");
  const colorDiv = form.querySelector(".color");

  input.addEventListener("change", e =>
  {
    colorDiv.style.color = input.value;
    colorDiv.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae iure nam, neque ex aperiam totam id, nisi autem commodi ullam corrupti voluptate ratione sapiente molestias facilis in doloribus cupiditate sed.'
  })}