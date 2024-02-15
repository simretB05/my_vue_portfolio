// // Import required libraries
// import axios from "axios";
// import Vue from "vue";
// import Toast from "vue-toastification";
// Vue.use( Toast );

// let url = process.env.VUE_APP_BASE_URL + '/api/download_resume';

// // State object
// const state = {
//     error: null,
//     pdf_is_loading: false,
//     pdf_data: undefined
// };
// // Mutations object
// const mutations = {
//     setLoading( state, isLoadingPdf )
//     {
//         state.pdf_is_loading = isLoadingPdf;
//     },
//     set_pdfData( state, pdf_data )
//     {
//         state.pdf_data = pdf_data
//     },
//     setError( state, error )
//     {
//         state.error = error;
//     }
// };
// // Getters object
// const getters = {
//     get_pdf: ( state ) => state.pdf_data,
// };
// // Actions object
// const actions = {
//     async getPdfFile( { commit } )
//     {
//         commit( 'setLoading', true );
//         try
//         {
//             const response = await axios.get( url, { responseType: 'arraybuffer' } );
//             // Create a Blob from the array buffer
//             const blob = new Blob( [response.data], { type: 'application/pdf' } );
//             // Print the Blob data
//             console.log( blob );
//             commit( 'set_pdfData', blob );
//             console.log( response.data );
//             return blob;
//         } catch ( error )
//         {
//             commit( 'set_pdfData', undefined );
//             commit( 'setError', 'Failed to fetch data. Please try again later.' );
//         } finally
//         {
//             commit( 'setLoading', false );
//         }
//     },
// };
// export default {
//     state, getters, actions, mutations
// }



