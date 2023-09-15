import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice';
const initialState = {
    topics: {}, //This inner topics object will eventually hold all topics keyed by id.
};

const topicsSlice = createSlice({
    name: 'topics', //the slice name used as the prefix of the generated action.type strings
    initialState,
    reducers: { // an object containing action names as keys and their corresponding case reducers as values. The keys are used to generate action creators with the same names.
        addTopic: (state, action) => { //Action
            const { id, name, icon } = action.payload; //This line extracts the id, name, and icon properties from the payload of the action.

            /*This line updates the state to add a new topic to the topics object. It uses the id extracted from the payload as the key to store the topic in the topics object. This ensures that topics are stored in the state by their unique id.
            The topic object itself is an object literal that includes the id, name, icon, and an initially empty quizIds array.*/
            state.topics[id] = {       
                id: id,
                name: name,
                icon,
                quizIds: [],
            };
            /*So, when the addTopic action is dispatched, it adds a new topic to the Redux state by assigning it a unique id and initializing its name, icon, and quizIds. 
            This is how you add new topics to your Redux store using this action.*/
        },
    },
    extraReducers: {
        "quizzes/addQuiz": (state, action) => {
            const { topicId, id } = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
    }
});

// Export the action creator
export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;

// Create a selector This selector is used to select a different part of the Redux state, specifically the topics property.
export const selectTopics = (state) => state.topics.topics;

// Export the reducer
export default topicsSlice.reducer;