import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const StyledImg = styled.img`
  width: 100%;
`

const RecipeSingle = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <div>
        <Typography variant='h5' component='h1' align='center'>
          Pesto Tamato Pasta
        </Typography>
        <StyledImg src='https://source.unsplash.com/random/food' alt='' />
      </div>
      <div>
        <Typography variant='h5' component='h2'>
          Ingredients
        </Typography>
        <ul>
          <li>Pasta: 300grams</li>
          <li>Lettace: 300grams</li>
          <li>Tamatoes: 2 Large</li>
          <li>Garlic: 1 clove</li>
        </ul>
      </div>

      <div>
        <Typography variant='h5' component='h2'>
          Preperation
        </Typography>

        <ul>
          <li>Serving size: 8 servings</li>
          <li>Total Time: 1 1/2 Hours</li>
          <li>Prep time: 30 min</li>
          <li>Cooking time: 1 hour</li>
        </ul>
      </div>

      <div>
        <Typography variant='h5' component='h3'>
          Steps
        </Typography>
        <ol>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quod aspernatur animi temporibus quisquam fugit ducimus quae, ipsum
            suscipit aperiam omnis explicabo eum tenetur tempore sed facere
            facilis numquam. Deleniti?
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quod aspernatur animi temporibus quisquam fugit ducimus quae, ipsum
            suscipit aperiam omnis explicabo eum tenetur tempore sed facere
            facilis numquam. Deleniti?
          </li>
        </ol>
      </div>

      <div>
        <Button variant='outlined'>Share</Button>
        <Button variant='contained' color='primary'>
          Edit
        </Button>
      </div>
    </Box>
  )
}

export default RecipeSingle
