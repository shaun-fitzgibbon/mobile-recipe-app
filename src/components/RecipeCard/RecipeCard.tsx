import styled from 'styled-components'

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'

import TimerIcon from '@material-ui/icons/Timer'
import PeopleIcon from '@material-ui/icons/People'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'

const StyledCardMedia = styled(CardMedia)`
  && {
    height: 200px;
    width: 150px;
  }
`

const RecipeCard = () => {
  return (
    <Card square>
      <CardActionArea>
        <Box display='flex'>
          <StyledCardMedia image='http://placehold.it/500' />

          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              French Onion Soup
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              French style onion soup
            </Typography>
            <ul>
              <li>
                <PeopleIcon fontSize='small' />
                Serving Size: 8 people
              </li>
              <li>
                <TimerIcon fontSize='small' /> Total Time: 1 1/2 Hours{' '}
              </li>
              <li>
                <CalendarTodayIcon fontSize='small' />
                Created: Date
              </li>
            </ul>
            <div>
              <Chip label='Tag1' color='primary' />
              <Chip label='Tag2' color='primary' />
              <Chip label='Tag3' color='primary' />
            </div>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default RecipeCard
