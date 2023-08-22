// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebar: SideBarType
// }
// export type StoreType = {
//     _state: RootStateType,
//     getState: () => RootStateType
//     _callSubscriber: (state: RootStateType) => void
//     subscribe: (observer: (state: RootStateType) => void) => void
//     dispatch: (action: ActionCreatorsType) => void
// }

//store
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, post: 'Hi, I am a new user this social network', likesCount: 5},
//                 {id: 2, post: 'Hi, How are you?', likesCount: 20},
//                 {id: 3, post: 'Hello world!', likesCount: 4},
//                 {id: 4, post: 'Yoo hoo', likesCount: 9},
//             ],
//             newPostText: '',
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Nastya', userAvatar: 'https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg'},
//                 {
//                     id: 2,
//                     name: 'Katya',
//                     userAvatar: 'https://mobimg.b-cdn.net/v3/fetch/68/684eac9aeb30fffb10f835fa65324c10.jpeg'
//                 },
//                 {
//                     id: 3,
//                     name: 'Valera',
//                     userAvatar: 'https://storage.yandexcloud.net/stage01-metronews-transfer/media/20220618/13/20/858x540_60e21547_dvindb8d.jpg'
//                 },
//                 {id: 4, name: 'Andrey', userAvatar: 'https://gazeta.spb.ru/wp-content/uploads/2021/09/111.jpg'},
//                 {id: 5, name: 'Sveta', userAvatar: 'https://images.eksmo.ru/upload/iblock/b34/cat-_1_.png'},
//                 {
//                     id: 6,
//                     name: 'Artem',
//                     userAvatar: 'https://pic.rutubelist.ru/user/64/bb/64bba456c67632db637aaa2c1724e05c.jpg'
//                 },
//                 {
//                     id: 7,
//                     name: 'Stepan',
//                     userAvatar: 'https://vokrug.tv/pic/news/a/1/2/b/a12b301f89741718c5b88217e0af492c.jpeg'
//                 },
//             ],
//             messages: [
//                 {id: 1, message: 'Hello! How are you?'},
//                 {id: 2, message: 'I love you!'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'My name is...'},
//                 {id: 5, message: 'Fine'},
//                 {id: 6, message: 'Good job'},
//             ],
//             newMessageText: ''
//         },
//         sidebar: {},
//     },
//     _callSubscriber() {
//         console.log('eee')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: (state: RootStateType) => void) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         profilePageReducer(this._state.profilePage, action)
//         dialogsPageReducer(this._state.dialogsPage, action)
//
//         this._callSubscriber(this._state)
//     },
// }

export {}