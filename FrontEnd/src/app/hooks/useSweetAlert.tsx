import Swal from 'sweetalert2';

const useSweetAlert = () => {
  const successAlert = (title:string, text:string) => {
    Swal.fire({
      title,
      text,
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  const errorAlert = (title:string, text:string) => {
    Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }

  const loadingAlert = (title:string, text:string) => {
    const swalWithLoading = Swal.mixin({
      customClass: {
        confirmButton: 'd-none',
      },
      allowOutsideClick: false,
      showCloseButton: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    swalWithLoading.fire({
      title,
      text,
      icon: 'info',
    });
  }

  return { successAlert, errorAlert, loadingAlert };
};

export default useSweetAlert;