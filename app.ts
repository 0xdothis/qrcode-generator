const inputEl = document.getElementById("link") as HTMLInputElement;
const qrcodeEl = document.getElementById("qrcode") as HTMLDivElement;
const buttonContainer = document.getElementById("buttons") as HTMLDivElement;

const qrcode = new QRCode(qrcodeEl, {
  text: "https://www.facebook.com",
  width: 200,
  height: 200,
});

async function downloadAndCopyImage() {
  const download = document.createElement("a");
  const copy = document.createElement("a");
  download.className = "btn btn-download";
  download.textContent = "Download";
  copy.className = "btn btn-copy";
  copy.textContent = "Copy image";

  buttonContainer.appendChild(download);
  buttonContainer.appendChild(copy);
}

downloadAndCopyImage();
