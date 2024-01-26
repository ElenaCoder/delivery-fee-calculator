import React, { useState } from 'react';
import './DeliveryFeeCalculator.css';
import FormInput from './FormInput';

const DeliveryFeeCalculator1: React.FC = () => {
    const [values, setValues] = useState({
        CartValue: '',
        DeliveryDistance: '',
        AmountOfItems: '',
        OrderTime: '',
    });
    const [deliveryFee, setDeliveryFee] = useState<number | null>(null);

    const inputs = [
        {
            id: 1,
            name: 'CartValue',
            type: 'CartValue',
            placeholder: 'CartValue',
            errorMessage: 'Please enter a valid cart value (minimum 0.10).',
            label: 'Cart value (€)',
            required: true,
            pattern: '^(0(?:.[0-9]{1,2})?|[1-9]d*(?:.[0-9]{0,2})?)$',
        },
        {
            id: 2,
            name: 'DeliveryDistance',
            type: 'DeliveryDistance',
            placeholder: 'DeliveryDistance',
            errorMessage:
                'Please enter a valid delivery distance (positive whole number).',
            label: 'Delivery distance (meters)',
            required: true,
            pattern: '^[1-9]+$',
        },
        {
            id: 3,
            name: 'AmountOfItems',
            type: 'AmountOfItems',
            placeholder: 'AmountOfItems',
            errorMessage:
                'Please enter a valid number of items (positive whole number).',
            label: 'Amount of items',
            required: true,
            pattern: '^[0-9]+$',
        },
        {
            id: 4,
            name: 'OrderTime',
            type: 'date',
            placeholder: 'OrderTime',
            label: 'Order Time',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);

    return (
        <div className='container'>
            <h1>Delivery Fee Calculator</h1>
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Calculate</button>
                <div className='deliveryFeeResult'>
                    <span>{`Delivery Fee: `}</span>
                    <span>
                        {`${deliveryFee?.toFixed(2) ?? '0.00'} €`}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default DeliveryFeeCalculator1;
