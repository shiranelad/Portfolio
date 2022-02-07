'use strict'
var gProjs = []
const IMG_PATH = 'img/portfolio/projs'

createProjs();

function createProjs() {
    //minesweeper
    gProjs.push(createProj('mine-sweeper', 'Mine Sweeper', 'A full awesome mine-sweeper game',
        `${IMG_PATH}/mine-sweeper.jpg`, 'A similar game to the familiar game from windows, but has a number of additional features (7 boom, safe clicks, lives...)',
        'https://shiranelad.github.io/mineSweeper/', ['Minesweeper', 'mine sweeper'], 'January 2022'))

    //pacman
    gProjs.push(createProj('pacman', 'Pacman', 'The come back of Pacman', `${IMG_PATH}/pacman.png`,
        'Remake of Pacman game', 'https://shiranelad.github.io/Pacman/', ['Pacman'], 'January 2022'))

    //expanding-cards
    gProjs.push(createProj('expanding-cards', 'Expanding Cards', 'Expand of image cards on click', `${IMG_PATH}/expand-cards.jpg`,
        'An independent project out of 50 projects in 50 days. All photos were taken by me on a trip to Tanzania',
        'https://shiranelad.github.io/Expanding-Cards/', ['50 projects in 50 days', 'expanding cards', 'Tanzania photos'], 'September 2021'))

    //bookshop
    gProjs.push(createProj('book-shop', 'Book Shop', 'Book shop management system', `${IMG_PATH}/book-shop.jpg`,
        'You can add books and rate them, update prices, watch the book info', 'https://shiranelad.github.io/Book-Shop/',
        ['Book Shop'], 'February 2022'))

    //touch nums
    gProjs.push(createProj('touch-nums', 'Touch Numbers', 'Click on the numbers by their order', `${IMG_PATH}/touch-nums.jpg`,
        'You can choose a board size and try to beat your own score on click the numbers by their order',
        'https://shiranelad.github.io/numbers_game', ['numbers game', 'touch nums'], 'January 2022'))

    //In Picture
    gProjs.push(createProj('in-picture', 'In Picture', 'What\'s in the picture?', `${IMG_PATH}/in-picture.jpg`,
        'Answer the questions based on what is shown in the displayed image',
        'https://shiranelad.github.io/In-Picture', ['in-picture', 'What\'s in the picture?'], 'January 2022'))

    return gProjs
}

function createProj(id, name, title, img, desc, url, labels, date) {
    return {
        id,
        name,
        title,
        img,
        desc,
        url,
        labels,
        date,
    }
}

function getProjs() {
    return gProjs
}

function getProjById(id) {
    return gProjs.find(proj => proj.id === id)
}