import { AxiosError } from "axios";
import api from "../dependencies/api";
import useSweetAlert from "../hooks/useSweetAlert";

class FilesService {
  sendFile = async (files: FileList | null) => {
    const Alert = useSweetAlert();

    if (!files || !files[0]) {
      Alert.errorAlert("Insert a file", "Only CSV files are allowed.");
      return;
    }

    if (files[0].type !== "text/csv") {
      Alert.errorAlert("Invalid file format.", "Only CSV files are allowed.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", files[0]);

      const response = await api.post("/api/files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      Alert.successAlert("File imported.", "Your CSV file was successfully imported");

      return response.data.data;

    } catch (error) {
      const err = error as AxiosError;

      Alert.errorAlert(
        "File wasn't imported.","An error occurred while importing your CSV file, check your fields."
      );
    }
  };
}

export default new FilesService();
