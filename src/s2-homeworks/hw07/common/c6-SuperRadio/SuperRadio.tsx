import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';
import s from './SuperRadio.module.css';
import { CoordinateType } from '../../HW7';

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
  options?: CoordinateType[];
  onChangeOption?: (option: string) => void;
  spanProps?: DefaultSpanPropsType;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  id,
  name,
  className,
  options,
  value,
  onChange,
  onChangeOption,
  spanProps,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeOption?.(e.target.value);
  };

  const finalRadioClassName = s.radio + (className ? ' ' + className : '');
  const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '');

  const mappedOptions: JSX.Element[] = options
    ? options.map((o) => (
        <label key={name + '-' + o.id} className={s.label}>
          <input
            id={id + '-input-' + o.id}
            className={finalRadioClassName}
            type='radio'
            name='coordinate'
            value={o.value}
            checked={o.value === value}
            onChange={onChangeCallback}
            {...restProps}
          />
          <span id={id + '-span-' + o.id} {...spanProps} className={spanClassName}>
            {o.value}
          </span>
        </label>
      ))
    : [];

  return <div className={s.options}>{mappedOptions}</div>;
};

export default SuperRadio;
