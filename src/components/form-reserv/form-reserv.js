import './form-reserv.scss';
import '../date-dropdown/date-dropdown';
import '../dropdown/dropdown';
import '../button/button';

const dropDownInst = $('#reservation').data('datepicker');
dropDownInst.date = new Date('2019-08-08');
dropDownInst.selectDate([new Date('2019-08-19'), new Date('2019-08-23')]);
