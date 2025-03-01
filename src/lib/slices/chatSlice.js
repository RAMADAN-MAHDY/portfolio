import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  participants: [], // قائمة المشاركين في المحادثة
//   messages: {}, // تخزين الرسائل لكل محادثة
//   currentConversation: null, // المحادثة الحالية
  newMessagesId: {}, // الرسائل الجديدة التي لم تُقرأ 
  setUserId : null ,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setParticipants: (state, action) => {
        let data = action.payload;
        const participantsObj = {};
  
        data.forEach((participant) => {
          participantsObj[participant._id] = participant;
        });
  
        state.participants = participantsObj;
      },
//
    // setMessages: (state, action) => {
    //  let data = action.payload ;
    // const messagesMap = new Map();
    // data.map((prev)=>{
    //     messagesMap.set(
    //         prev.conversationId ,
    //         prev 
    //     )
    // })
    //   state.messages = messagesMap ;
    // },

    // addMessage: (state, action) => {
    //   const { conversationId, message } = action.payload;
    //   if (!state.messages.has(conversationId)) {
    //     state.messages[conversationId] = [];
    //   }
    //   state.messages.set(conversationId , message);
    // },

    // setCurrentConversation: (state, action) => {
    //   state.currentConversation = action.payload;
    // },

    setNewMessages: (state, action) => {
        let newMessageId = action.payload;
  
        if (state.participants[newMessageId]) {
          let getNewMessage = state.participants[newMessageId];
  
          // حذف العنصر من الكائن
          delete state.participants[newMessageId];
  
          // إعادة ترتيب العناصر بإضافة العنصر المحذوف في البداية
          state.participants = { [newMessageId]: getNewMessage, ...state.participants };
        }
      },
    

    setUserId: (state, action) => {
        state.UserId = action.payload;
      },
  },
});

export const {
  setParticipants,
//   setMessages,
//   addMessage,
//   setCurrentConversation,
  setNewMessages,
  setUserId,
} = chatSlice.actions;

export default chatSlice.reducer;
