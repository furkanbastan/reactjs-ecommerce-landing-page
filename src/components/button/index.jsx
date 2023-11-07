import * as S from './styles';

function Button({ children, variant = 'primary', size = 'medium', ...rest }) {
    return (
        <S.Button $variant={variant} $size={size} {...rest}>
            {children}
        </S.Button>
    );
}

export { Button };