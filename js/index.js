//A function to open the mobile menu
const mobileMenu = document.getElementById("mobile-menu");
function openMobileMenu() {
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "block";
      }
}

const checkPermission = () => {
    if (!('serviceWorker' in navigator)) {
        throw new Error('No Service Worker support!')
    }

    if (!('Notification' in window)) {
        throw new Error('No notif API Support!')
    }
}

const registerSW = async () => {
    const registration = await navigator.serviceWorker.register('./js/sw.js');
    return registration;
}

const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();

    if (permission !== 'granted') {
        throw new Error('Permission not granted for Notification');
    }else {
        console.log('Permission granted');
        new Notification('Thanks for granting permission');
    }
}

const main = async () => {
  checkPermission();
  await requestNotificationPermission();
  const reg = await registerSW();
  //reg.showNotification("Hello from SW");
  //requestNotificationPermission();
}

//main();

