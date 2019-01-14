var name = prompt ('кто ты?','');
switch (name) {
    case 'пидор':
    alert('Ну конечно!)');
    break;
    case 'человек':
    alert('нет, ты пидор!');
    break;
    case '':
    alert ('что? стыдно признаться?');
    break;
    case 'null':
    alert('что? стыдно признаться?');
    break;
    case name:
    alert('пидор ты ' + name);
    break;
    default:
    alert ('че за хрень ты городишь?');
}
