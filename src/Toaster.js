import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-center",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const makeToast = (type, msg) => {
  alert(type,msg);
  Toast.fire({
    icon: type,
    title: msg,
  });
};

export default makeToast;

