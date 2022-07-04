import AxiosClient from "./axiosClient";

const SocialCardsApi = {
    showdata: () => {
        return AxiosClient.get('/');
    },
    saveAll: (data) => {
        return AxiosClient.post('/', data);
    },
    // uploadFile: (upload) => {
    //     const url = "/socialcards/upload";
    //     return AxiosClient.post(url, upload)
    // },
    // uploadFileIMG: (upload) => {
    //     const url = "/socialcards/upload_avatar";
    //     return AxiosClient.post(url, upload)
    // },
    delete: (id) => {
        const url = "/" + id;
        return AxiosClient.delete(url)
    },
    update: (id) => {
        const url = `/update/${id}`;
        return AxiosClient.get(url)
    },
    // saveComment: (data) => {
    //     return AxiosClient.post('/socialcards/save_comment', data);
    // },
    // showComment: () => {
    //     return AxiosClient.get('/socialcards/showcomment');
    // },
    // updateStatus: (id, value) => {
    //     return AxiosClient.get('/socialcards/update-status/' + id + '/' + value)
    // },
    // revertUndo : (id) => {
    //     const url = "/socialcards/revertundo/" + id;
    //     return AxiosClient.get(url)
    // },
}

export default SocialCardsApi;