import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'

const HeaderWrapper = styled(AppBar)`
  && {
    display: flex;
    flex-direction: column;
    background-color: white;
    position: fixed;
  }
`
const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const HeaderBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StyledButtonGroup = styled(ButtonGroup)`
  && {
    display: flex;
    justify-content: space-between;
  }
`

const StyledFormControl = styled(FormControl)`
  && {
    min-width: 180px;
  }
`
const StyledCardMedia = styled(CardMedia)`
  && {
    height: 200px;
    width: 150px;
  }
`

const RecipesList = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderTop>
          <TextField
            variant='outlined'
            margin='normal'
            id='email'
            label='Search...'
            name='search'
          />

          <StyledFormControl variant='outlined'>
            <InputLabel id='filter'>Sorting</InputLabel>
            <Select labelId='filter' id='filter' label='hello'>
              <MenuItem>Shortest Time</MenuItem>
              <MenuItem>Longest Time</MenuItem>
              <MenuItem>A-Z</MenuItem>
              <MenuItem>Z-A</MenuItem>
              <MenuItem>Least Shared</MenuItem>
              <MenuItem>Most Shared</MenuItem>
              <MenuItem>Least Tags</MenuItem>
              <MenuItem>Most Tags</MenuItem>
              <MenuItem>Most Recent</MenuItem>
              <MenuItem>Oldest</MenuItem>
            </Select>
          </StyledFormControl>
        </HeaderTop>
        <HeaderBottom>
          <StyledButtonGroup
            variant='outlined'
            color='primary'
            aria-label='contained primary button group'
          >
            <Button>Your Recipes</Button>
            <Button>Shared with you</Button>
          </StyledButtonGroup>
        </HeaderBottom>

        <hr />
      </HeaderWrapper>
      <div>
        {/* Start of New recipe */}
        <Card square>
          <CardActionArea>
            <Box display='flex'>
              <StyledCardMedia image='https://source.unsplash.com/food' />

              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Chicken Pie
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  A lovely Chicken Pie made with tomatoes chillies and feta
                </Typography>
                <div>
                  Serving Size <br />
                  Total Time <br />
                  Created <br />
                </div>
                <div>
                  <Chip label='Tag1' color='primary' />
                  <Chip label='Tag2' color='primary' />
                  <Chip label='Tag3' color='primary' />
                </div>
              </CardContent>
            </Box>
          </CardActionArea>
        </Card>
        {/* End of New recipe */}

        {/* Start of New recipe */}
        <Card square>
          <CardActionArea>
            <Box display='flex'>
              <StyledCardMedia image='https://source.unsplash.com/food' />

              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  French Onion Soup
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  French style onion soup
                </Typography>
                <div>
                  Serving Size <br />
                  Total Time <br />
                  Created <br />
                </div>
                <div>
                  <Chip label='Tag1' color='primary' />
                  <Chip label='Tag2' color='primary' />
                  <Chip label='Tag3' color='primary' />
                </div>
              </CardContent>
            </Box>
          </CardActionArea>
        </Card>
        {/* End of New recipe */}

        {/* Start of New recipe */}
        <Card square>
          <CardActionArea>
            <Box display='flex'>
              <StyledCardMedia image='https://source.unsplash.com/random/food' />

              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  French Onion Soup
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  French style onion soup
                </Typography>
                <div>
                  Serving Size <br />
                  Total Time <br />
                  Created <br />
                </div>
                <div>
                  <Chip label='Tag1' color='primary' />
                  <Chip label='Tag2' color='primary' />
                  <Chip label='Tag3' color='primary' />
                </div>
              </CardContent>
            </Box>
          </CardActionArea>
        </Card>
        {/* End of New recipe */}
      </div>
    </div>
  )
}

export default RecipesList
