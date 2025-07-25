import './style-resumeBox.scss';
import { useData } from '../../context/dataContext';
import { useEffect, useState } from 'react';
import Loading from '../../assets/loading.gif';

export default function Resumebox(props) {
    const { data, loading } = useData();
    const [totals, setTotals] = useState({
        vendas: 0,
        liquido: 0,
        cancelados: 0,
        reembolsos: 0,
    });

    useEffect(() => {
        if (!data || data.length === 0) return;

        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const filtered = data.filter(item => {
            const [day, month, year] = item.data.split('/');
            const itemDate = new Date(`${year}-${month}-${day}`);
            return (
                itemDate.getMonth() === currentMonth &&
                itemDate.getFullYear() === currentYear
            );
        });

        const vendas = filtered
            .filter(item => item.pagamento === 'Aprovado')
            .reduce((acc, cur) => acc + Number(cur.valor), 0);

        const liquido = filtered
            .filter(item => item.pagamento === 'Aprovado' && item.status === 'Entregue')
            .reduce((acc, cur) => acc + Number(cur.valor), 0);

        const cancelados = filtered
            .filter(item => item.status === 'Cancelado')
            .reduce((acc, cur) => acc + Number(cur.valor), 0);

        const reembolsos = filtered
            .filter(item =>
                item.pagamento === 'Aprovado' &&
                (item.status === 'Cancelado' || item.status === 'Recusado')
            )
            .reduce((acc, cur) => acc + Number(cur.valor), 0);

        setTotals({
            vendas,
            liquido,
            cancelados,
            reembolsos,
        });
    }, [data]);

    function formatCurrency(value) {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        });
    }

    let displayValue = 'R$ 0,00';
    if (props.name === 'Total de vendas') {
        displayValue = formatCurrency(totals.vendas);
    } else if (props.name === 'Total líquido') {
        displayValue = formatCurrency(totals.liquido);
    } else if (props.name === 'Compras canceladas') {
        displayValue = formatCurrency(totals.cancelados);
    } else if (props.name === 'Reembolsos') {
        displayValue = formatCurrency(totals.reembolsos);
    }

    return (
        <div className='styleResumeBox'>
            <div className="resumeBox">
                <h3>{props.name}</h3>
                {loading ? (
                    <div className="loading">
                        <img src={Loading} alt="loading" />
                    </div>
                ) : (
                    <span>{displayValue}</span>
                )}
            </div>
        </div>
    );
}


