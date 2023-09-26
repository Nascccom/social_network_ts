import s from './Checkbox.module.css'
import {forwardRef, InputHTMLAttributes} from "react";

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>((
  props,
  ref) => {
    return (
      <div className={s.checkbox}>
          <div className={s.check}>
              <input id={'check-5'}
                     type="checkbox"
                     {...props}
                     ref={ref}/>
              <label htmlFor="check-5"></label>
          </div>
      </div>
    );
});

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}