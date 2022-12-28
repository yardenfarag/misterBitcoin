import { useEffect } from 'react'
import { MovesList } from '../components/MovesList'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, getUserMoves, getUserRate } from '../store/actions/userActions'

export const HomePage = () => {
  const user = useSelector((state) => state.userModule.user)
  const userMoves = useSelector((state) => state.userModule.userMoves)
  const userRate = useSelector((state) => state.userModule.userRate)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
    dispatch(getUserMoves())
    dispatch(getUserRate())
  }, [dispatch])

  if (!user) return <div>Loading...</div>
  const lastFiveUserMoves = userMoves.slice(-5).reverse()
  const imgUrl = `https://robohash.org/${user.name}?set=set4`
  return (
    <section className='home-page'>
      <div className='user-info'>
        <h1 className='user-name'>Welcome, {user.name}!</h1>
        <h2 className='user-coin'>Coins: {user.coins}</h2>
        <h3 className='user-bitcoin'>BTC: {userRate}</h3>
        <img className='user-icon' src={imgUrl} alt='user-icon' />

        <div className='user-moves'>
          {user.moves?.length > 0 ? (
            <>
              <h1>Last moves:</h1>
              <MovesList moves={lastFiveUserMoves} />
            </>
          ) : (
            <h1>No moves yet</h1>
          )}
        </div>
      </div>
    </section>
  )
}
