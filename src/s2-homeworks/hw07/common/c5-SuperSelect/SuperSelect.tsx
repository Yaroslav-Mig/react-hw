import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import s from './SuperSelect.module.css';
import { CoordinateType } from '../../HW7';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: CoordinateType[];
  onChangeOption?: (option: string) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const selectEl = selectRef.current as HTMLSelectElement;
    if (!toggle) {
      selectEl.blur();
    }
  }, [toggle]);

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): void => {
    onChangeOption?.(e.target.value);
  };

  const onClickHandler = (): void => setToggle((prev) => !prev);

  const mappedOptions: JSX.Element[] = options
    ? options.map((o) => (
        <option key={o.id} id={'hw7-option-' + o.id} className={s.option} value={o.value}>
          {o.value}
        </option>
      ))
    : [];

  const finalSelectClassName = s.select + (className ? ' ' + className : '');

  return (
    <form className={s.wrapper}>
      <select
        name='coordinate'
        ref={selectRef}
        className={finalSelectClassName}
        onChange={onChangeCallback}
        onClick={onClickHandler}
        {...restProps}
      >
        {mappedOptions}
      </select>
    </form>
  );
};

export default SuperSelect;
