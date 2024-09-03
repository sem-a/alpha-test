import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Card {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    likes: boolean;
}

interface CardsState {
    cards: Card[];
}

const initialState: CardsState = {
    cards: [],
};

export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        setCards: (state, action: PayloadAction<Card[]>) => {
            state.cards = action.payload;
        },
    },
});

export const { setCards } = cardsSlice.actions;

export default cardsSlice.reducer;