
    let color;

    /*     // Cyan, Magenta, Yellow
        const generarColor = () =>{
            let num = Math.floor(Math.random()*3);
            switch(num){
                case 0:
                    color = 'cyan';
                    break;
                case 1:
                    color = 'magenta';
                    break;
                case 2:
                    color = 'yellow';
                    break;
            }
            return color;
        } */
    
        const generarColor = () =>{
            let num = Math.floor(Math.random()*139);
            switch(num){
                //Rojos
                case 0:
                    color = 'LightCoral';
                    break;
                case 1:
                    color = 'Salmon';
                    break;
                case 2:
                    color = 'IndianRed';
                    break;
                case 3:
                    color = 'Red';
                    break;
                case 4:
                    color = 'Crimson';
                    break;
                case 5:
                    color = 'FireBrick';
                    break;
                case 6:
                    color = 'Brown';
                    break;
                case 7:
                    color = 'DarkRed';
                    break;
                case 8:
                    color = 'Maroon';
                    break;
                //Rosas
                case 9:
                    color = 'MistyRose';
                    break;
                case 10:
                    color = 'Pink';
                    break;
                case 11:
                    color = 'LightPink';
                    break;
                case 12:
                    color = 'HotPink';
                    break;
                case 13:
                    color = 'RosyBrown';
                    break;
                case 14:
                    color = 'PaleVioletRed';
                    break;
                case 15:
                    color = 'DeepPink';
                    break;
                case 16:
                    color = 'MediumVioletRed';
                    break;
                //Naranjas
                case 17:
                    color = 'PapayaWhip';
                    break;
                case 18:
                    color = 'BlanchedAlmond';
                    break;
                case 19:
                    color = 'Bisque';
                    break;
                case 20:
                    color = 'Moccasin';
                    break;
                case 21:
                    color = 'PeachPuff';
                    break;
                case 22:
                    color = 'NavajoWhite';
                    break;
                case 23:
                    color = 'LightSalmon';
                    break;
                case 24:
                    color = 'DarkSalmon';
                    break;
                case 25:
                    color = 'Orange';
                    break;
                case 26:
                    color = 'DarkOrange';
                    break;
                case 27:
                    color = 'Coral';
                    break;
                case 28:
                    color = 'Tomato';
                    break;
                case 29:
                    color = 'OrangeRed';
                    break;
                //Marrones
                case 30:
                    color = 'Wheat';
                    break;
                case 31:
                    color = 'BurlyWood';
                    break;
                case 332:
                    color = 'Tan';
                    break;
                case 33:
                    color = 'SandyBrown';
                    break;
                case 34:
                    color = 'Goldenrod';
                    break;
                case 35:
                    color = 'Peru';
                    break;
                case 36:
                    color = 'DarkGoldenrod';
                    break;
                case 37:
                    color = 'Chocolate';
                    break;
                case 38:
                    color = 'Sienna';
                    break;
                case 39:
                    color = 'SaddleBrown';
                    break;
                //Amarillos
                case 40:
                    color = 'LightYellow';
                    break;
                case 41:
                    color = 'Cornsilk';
                    break;
                case 42:
                    color = 'LemonChiffon';
                    break;
                case 43:
                    color = 'LightGoldenrodYellow';
                    break;
                case 44:
                    color = 'PaleGoldenrod';
                    break;
                case 45:
                    color = 'Khaki';
                    break;
                case 46:
                    color = 'Yellow';
                    break;
                case 47:
                    color = 'Gold';
                    break;
                case 48:
                    color = 'DarkKhaki';
                    break;
                //Verdes Amarillentos
                case 49:
                    color = 'GreenYellow';
                    break;
                case 50:
                    color = 'Chartreuse';
                    break;
                case 51:
                    color = 'LawnGreen';
                    break;
                case 52:
                    color = 'YellowGreen';
                    break;
                case 53:
                    color = 'OliveDrab';
                    break;
                case 54:
                    color = 'Olive';
                    break;
                case 55:
                    color = 'DarkOliveGreen';
                    break;
                //Verdes
                case 56:
                    color = 'PaleGreen';
                    break;
                case 57:
                    color = 'LightGreen';
                    break;
                case 58:
                    color = 'MediumSpringGreen';
                    break;
                case 59:
                    color = 'SpringGreen';
                    break;
                case 60:
                    color = 'Lime';
                    break;
                case 61:
                    color = 'DarkSeaGreen';
                    break;
                case 62:
                    color = 'LimeGreen';
                    break;
                case 63:
                    color = 'MediumSeaGreen';
                    break;
                case 64:
                    color = 'SeaGreen';
                    break;
                case 65:
                    color = 'ForestGreen';
                    break;
                case 66:
                    color = 'Green';
                    break;
                case 67:
                    color = 'DarkGreen';
                    break;
                //Azules Verdes
                case 68:
                    color = 'LightCyan';
                    break;
                case 69:
                    color = 'PaleTurquoise';
                    break;
                case 70:
                    color = 'Aquamarine';
                    break;
                case 71:
                    color = 'Aqua'; //Cyan
                    break;
                case 72:
                    color = 'Turquoise';
                    break;
                case 73:
                    color = 'MediumTurquoise';
                    break;
                case 74:
                    color = 'DarkTurquoise';
                    break;
                case 75:
                    color = 'MediumAquamarine';
                    break;
                case 76:
                    color = 'LightSeaGreen';
                    break;
                case 77:
                    color = 'CadetBlue';
                    break;
                case 78:
                    color = 'DarkCyan';
                    break;
                case 79:
                    color = 'Teal';
                    break;
                //Azules
                case 80:
                    color = 'Lavender';
                    break;
                case 81:
                    color = 'BlueWeb';
                    break;
                case 82:
                    color = 'PowderBlue';
                    break;
                case 83:
                    color = 'LightBlue';
                    break;
                case 84:
                    color = 'LightSkyBlue';
                    break;
                case 85:
                    color = 'SkyBlue';
                    break;
                case 86:
                    color = 'LightSteelBlue';
                    break;
                case 87:
                    color = 'DeepSkyBlue';
                    break;
                case 88:
                    color = 'CornflowerBlue';
                    break;
                case 89:
                    color = 'DodgerBlue';
                    break;
                case 90:
                    color = 'SteelBlue';
                    break;
                case 91:
                    color = 'RoyalBlue';
                    break;
                case 92:
                    color = 'Blue';
                    break;
                case 93:
                    color = 'MediumBlue';
                    break;
                case 94:
                    color = 'DarkBlue';
                    break;
                case 95:
                    color = 'Navy';
                    break;
                case 96:
                    color = 'MidnightBlue';
                    break;
                //Violetas y Purpuras
                case 97:
                    color = 'Thistle';
                    break;
                case 98:
                    color = 'Plum';
                    break;
                case 99:
                    color = 'Violet';
                    break;
                case 100:
                    color = 'Orchid';
                    break;
                case 101:
                    color = 'Fuchsia'; //Magenta
                    break;
                case 102:
                    color = 'MediumPurple';
                    break;
                case 103:
                    color = 'MediumOrchid';
                    break;
                case 104:
                    color = 'MediumSlateBlue';
                    break;
                case 105:
                    color = 'SlateBlue';
                    break;
                case 106:
                    color = 'BlueViolet';
                    break;
                case 107:
                    color = 'DarkViolet';
                    break;
                case 108:
                    color = 'DarkOrchid';
                    break;
                case 109:
                    color = 'DarkMagenta';
                    break;
                case 110:
                    color = 'Purple';
                    break;
                case 111:
                    color = 'DarkSlateBlue';
                    break;
                case 112:
                    color = 'Indigo';
                    break;
                //Blancos
                case 113:
                    color = 'White';
                    break;
                case 114:
                    color = 'WhiteSmoke';
                    break;
                case 115:
                    color = 'Snow';
                    break;
                case 116:
                    color = 'Seashell';
                    break;
                case 117:
                    color = 'Linen';
                    break;
                case 118:
                    color = 'AntiqueWhite';
                    break;
                case 119:
                    color = 'OldLace';
                    break;
                case 120:
                    color = 'FloralWhite';
                    break;
                case 121:
                    color = 'Ivory';
                    break;
                case 122:
                    color = 'Beige';
                    break;
                case 123:
                    color = 'Honeydew';
                    break;
                case 124:
                    color = 'MintCream';
                    break;
                case 125:
                    color = 'Azure';
                    break;
                case 126:
                    color = 'AliceBlue';
                    break;
                case 127:
                    color = 'GhostWhite';
                    break;
                case 128:
                    color = 'LavenderBlush';
                    break;
                //Grises
                case 129:
                    color = 'Gainsboro';
                    break;
                case 130:
                    color = 'LightGrey';
                    break;
                case 131:
                    color = 'Silver';
                    break;
                case 132:
                    color = 'DarkGray';
                    break;
                case 133:
                    color = 'LightSlateGray';
                    break;
                case 134:
                    color = 'SlateGray';
                    break;
                case 135:
                    color = 'Gray';
                    break;
                case 136:
                    color = 'DimGray';
                    break;
                case 137:
                    color = 'DarkSlateGray';
                    break;
                case 138:
                    color = 'Black';
                    break;
            }
            return color;
        }
    
        function agregar(){
            for(let i=0; i<50;i++ ){
                generarColor();
            let caja = document.createElement('div');
            caja.style = `width:500px;height:10px;background:${color};`;
            caja.id = 'linea';
            document.body.appendChild(caja);
            }
        }
    
            let btn1 = document.getElementById('btn1');
            btn1.addEventListener('click', agregar);
    
    
            let btn2 = document.getElementById('btn2');
    
        const borrar = () => {
            document.body.removeChild(document.querySelectorAll('div'));
        }
            btn2.addEventListener('click', borrar);