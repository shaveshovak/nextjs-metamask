import styles from './conect_btn.module.css';
import { useAuthentication } from '@/hooks/authentication';

export const ConnectBtn  = () => {
	const {
		hasProvider,
		wallet,
		isConnecting,
		error,
		errorMessage,
		handleConnect,
		truncate,
	  } = useAuthentication()

	  const disableConnect = Boolean(wallet) && isConnecting
	return (
		<>
			{
				hasProvider && <button className={styles.connect_url} disabled={disableConnect} onClick={handleConnect}>
					{ wallet.accounts.length > 0 ? truncate(wallet.accounts[0], 10) : 'Connect'}
				</button>
			}
			{	error && (
					<div>
					<strong>Error:</strong> {errorMessage}
					</div>
				)
			}
		</>
	)

}
