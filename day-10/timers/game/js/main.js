setInterval(tick, 30);
// setTimeout(tick, 1000);
// requestAnimationFrame(tick)
const player = new Player;
function tick(timestamp) {
    player.move();
    player.render();
    // requestAnimationFrame(tick)
}