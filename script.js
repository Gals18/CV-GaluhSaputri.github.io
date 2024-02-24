// Function to add fadeIn animation effect
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("content");

fadeIn(sidebar);
fadeIn(mainContent);
function fadeIn(element) {
	element.style.opacity = 0;

	let opacity = 0;
	const interval = setInterval(() => {
		if (opacity < 1) {
			opacity += 0.1;
			element.style.opacity = opacity;
		} else {
			clearInterval(interval);
		}
	}, 100);
}
fadeIn(sidebar);
fadeIn(mainContent);
// Apply fadeIn effect to sidebar and main-content

document.addEventListener("DOMContentLoaded", function () {
	// Pesan yang ingin disimpan
	var pesan = "Halo Galuh Saputri, Saya Tertarik dengan CV anda, Bisakah Untuk meluangkan waktu mengobrol dengan saya.";

	// Nomor WhatsApp dan pesan yang disimpan
	var nomorWhatsApp = "62895424225333";
	var linkWhatsApp = "https://wa.me/" + nomorWhatsApp + "/?text=" + encodeURIComponent(pesan);

	// Mengubah href dari tautan WhatsApp
	document.getElementById("whatsappLink").setAttribute("href", linkWhatsApp);
});
document.addEventListener("DOMContentLoaded", (event) => {
	Swal.fire({
		title: "Selamat datang :))",
		text: "Jika Anda tertarik, bisa langsung klik whats'app. Trimakasih.",
		icon: "info",
		confirmButtonText: "OK",
	});
});
