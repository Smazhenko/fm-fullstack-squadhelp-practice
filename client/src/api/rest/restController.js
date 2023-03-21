import http from '../interceptor';

export const registerRequest = (data) => http.post('users/registration', data);
export const loginRequest = (data) => http.post('users/login', data);
export const getUser = () => http.get('users/getUser');
export const updateUser = (data) => http.put('users/updateUser', data);

export const updateContest = (data) => http.put('contests/updateContest', data);
export const downloadContestFile = (data) => http.post(`contests/downloadFile/${data.fileName}`);
export const dataForContest = (data) => http.post(`contests/dataForContest`, data);
export const getCustomersContests = (data) => http.get(`contests/getCustomersContests?limit=${data.limit}&offset=${data.offset}&status=${data.contestStatus}`);
export const getActiveContests = ({
  offset, limit, typeIndex, contestId, industry, awardSort, ownEntries,
}) => http.post('contests/getAllContests', {
  offset, limit, typeIndex, contestId, industry, awardSort, ownEntries});
export const getContestById = (data) => http.get(`contests/getContestById/${data.contestId}`);


export const setNewOffer = (data) => http.post('offers/setNewOffer', data);
export const setOfferStatus = (data) => http.post('offers/setOfferStatus', data);

export const payMent = (data) => http.post('payment/pay', data.formData);
export const changeMark = (data) => http.post('changeMark', data);
export const cashOut = (data) => http.post('payment/cashout', data);

export const getPreviewChat = () => http.get('chat/getPreview');
export const getDialog = (data) => http.get(`chat/getChat/${data.interlocutorId}`);
export const newMessage = (data) => http.post('chat/newMessage', data);
export const changeChatFavorite = (data) => http.put('chat/favorite', data);
export const changeChatBlock = (data) => http.put('chat/blackList', data);
export const removeChatFromCatalog = (data) => http.delete('chat/removeChatFromCatalog', data);

export const getCatalogList = () => http.get('catalogs/getCatalogs');
export const addChatToCatalog = (data) => http.post('catalogs/addNewChatToCatalog', data);
export const createCatalog = (data) => http.post('catalogs/createCatalog', data);
export const deleteCatalog = (data) => http.delete('catalogs/deleteCatalog', data);
export const changeCatalogName = (data) => http.put('catalogs/updateNameCatalog', data);


