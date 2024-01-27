import React, { useState, ChangeEvent, FormEvent } from 'react';
import './DeliveryFeeCalculator.css';
import FormInput, { InputProps } from './FormInput';

type FormValues = {
    CartValue: string;
    DeliveryDistance: string;
    AmountOfItems: string;
    OrderTime: string;
};

const DeliveryFeeCalculator: React.FC = () => {
    const initialFormValues: FormValues = {
        CartValue: '',
        DeliveryDistance: '',
        AmountOfItems: '',
        OrderTime: '',
    };
    const [values, setValues] = useState<FormValues>(initialFormValues);
    const [deliveryFee, setDeliveryFee] = useState<number | null>(null);

    const inputs: InputProps[] = [
        {
            id: '1',
            name: 'CartValue',
            type: 'CartValue',
            placeholder: 'CartValue',
            errorMessage: 'Please enter a valid cart value.',
            label: 'Cart value (€)',
            required: true,
            pattern: '^(0|[1-9]\\d*)(\\.\\d+)?$',
            value: values.CartValue,
            onChange: (e) => onChange(e),
        },
        {
            id: '2',
            name: 'DeliveryDistance',
            type: 'DeliveryDistance',
            placeholder: 'DeliveryDistance',
            errorMessage:
                'Please enter a valid delivery distance (positive whole number).',
            label: 'Delivery distance (meters)',
            required: true,
            pattern: '^[1-9]+$',
            value: values.DeliveryDistance,
            onChange: (e) => onChange(e),
        },
        {
            id: '3',
            name: 'AmountOfItems',
            type: 'AmountOfItems',
            placeholder: 'AmountOfItems',
            errorMessage:
                'Please enter a valid number of items (positive whole number).',
            label: 'Amount of items',
            required: true,
            pattern: '^[0-9]+$',
            value: values.AmountOfItems,
            onChange: (e) => onChange(e),
        },
        {
            id: '4',
            name: 'OrderTime',
            type: 'date',
            placeholder: 'OrderTime',
            label: 'Order Time',
            value: values.OrderTime,
            onChange: (e) => onChange(e),
        },
    ];

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Add your logic for calculating delivery fee here
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
                        value={values[input.name as keyof FormValues]}
                        onChange={onChange}
                    />
                ))}
                <button>Calculate</button>
                <div className='deliveryFeeResult'>
                    <span>{`Delivery Fee: `}</span>
                    <span>{`${deliveryFee?.toFixed(2) ?? '0.00'} €`}</span>
                </div>
            </form>
        </div>
    );
};

export default DeliveryFeeCalculator;
