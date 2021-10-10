//SLider
{
    var counter = 1;
    setInterval(()=> {
    document.getElementById(`btn-${counter}`).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
        }
    }, 4000)
}