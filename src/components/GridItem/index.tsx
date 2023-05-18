import { Levels } from "../../helpers/imc";
import downImage from '../../assets/img/down.png';
import upImage from '../../assets/img/up.png';
import '../../App.css';

type Props = {
    item: Levels;
};
export const GridItem = ({ item }: Props) => {
    return (
        <div className="flex-1 text-white flex rounded-xl justify-center items-center flex-col p-5" style={{ backgroundColor: item.color }}>
            <div className="flex justify-center items-center rounded-full w-20 h-20 bg-black/[.1]">
                <img src={item.icon === 'up' ? upImage : downImage} alt='' width='30' />
            </div>

            <div className="text-base font-bold mt-1.5">{item.title} </div>
            {item.yourImc &&
                <div className="text-base mt-5">Seu IMC e de {item.yourImc} kg/m</div>
            }
            {!item.yourImc &&
                <div>
                    <>
                        <p className="text-sm mt-2.5">IMC deve está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong></p>
                    </>
                </div>
            }
        </div>
    );
}