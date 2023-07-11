import Swal from "sweetalert2";

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn",
    cancelButton: "btn danger",
  },
  buttonsStyling: false,
});

let successfulAdded = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: message,
  });
};

// // Error Request
let errorAdded = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "error",
    title: message,
  });
};

let deleteAlert = () => {
  swalWithBootstrapButtons
    .fire({
      title: "titleAlert",
      text: "textAlert",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    })
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
};

export {
  successfulAdded,
  errorAdded,
  deleteAlert,
  swalWithBootstrapButtons,
  Swal,
};
