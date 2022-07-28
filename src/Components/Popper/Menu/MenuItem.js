import Button from '~/Components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={classes} lefticon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
