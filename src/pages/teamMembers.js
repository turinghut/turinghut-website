import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  gridTile: {
    justifyContent: 'spacing-around',
    spacing: '5',
    backgroundColor: '#14634B',

  },
  imgFullWidth: {
    width: '70%'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'spacing-around',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#14634B',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 3, 2),
  },
  heading: {
    color: '#F9F9F9',
    textAlign: 'center',
    backgroundColor: '#14634B'
  }
}));
const team = [
  {
    name: "1",
    designation: "Founder",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/abcdef",
    linkedin: "linkedin.com/in/abcdef",
    phonenNo: "9898989898",
    emailid: "abcdef@gmail.com"
  },
  {
    name: "2",
    designation: "Founder",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/pqrst",
    linkedin: "linkedin.com/in/pqrst",
    phonenNo: "9898989898",
    emailid: "pqrst@gmail.com"
  },
  {
    name: "3",
    designation: "Founder",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/abcdef",
    linkedin: "linkedin.com/in/abcdef",
    phonenNo: "9898989898",
    emailid: "abcdef@gmail.com"
  },
  {
    name: "4",
    designation: "Co-Founder",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/pqrst",
    linkedin: "linkedin.com/in/pqrst",
    phonenNo: "9898989898",
    emailid: "pqrst@gmail.com"
  },
  {
    name: "5",
    designation: "Co-Founder",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/abcdef",
    linkedin: "linkedin.com/in/abcdef",
    phonenNo: "9898989898",
    emailid: "abcdef@gmail.com"
  },
  {
    name: "6",
    designation: "President",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/pqrst",
    linkedin: "linkedin.com/in/pqrst",
    phonenNo: "9898989898",
    emailid: "pqrst@gmail.com"
  },
  {
    name: "7",
    designation: "Member",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/abcdef",
    linkedin: "linkedin.com/in/abcdef",
    phonenNo: "9898989898",
    emailid: "abcdef@gmail.com"
  },
  {
    name: "8",
    designation: "Founder",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/pqrst",
    linkedin: "linkedin.com/in/pqrst",
    phonenNo: "9898989898",
    emailid: "pqrst@gmail.com"
  },
  {
    name: "9",
    designation: "Founder",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/abcdef",
    linkedin: "linkedin.com/in/abcdef",
    phonenNo: "9898989898",
    emailid: "abcdef@gmail.com"
  },
  {
    name: "10",
    designation: "Founder",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/pqrst",
    linkedin: "linkedin.com/in/pqrst",
    phonenNo: "9898989898",
    emailid: "pqrst@gmail.com"
  },
  {
    name: "11",
    designation: "Co-Founder",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/abcdef",
    linkedin: "linkedin.com/in/abcdef",
    phonenNo: "9898989898",
    emailid: "abcdef@gmail.com"
  },
  {
    name: "12",
    designation: "Co-Founder",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/pqrst",
    linkedin: "linkedin.com/in/pqrst",
    phonenNo: "9898989898",
    emailid: "pqrst@gmail.com"
  },
  {
    name: "13",
    designation: "President",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/abcdef",
    linkedin: "linkedin.com/in/abcdef",
    phonenNo: "9898989898",
    emailid: "abcdef@gmail.com"
  },
  {
    name: "14",
    designation: "Member",
    img: "https://source.unsplash.com/random/200x200",
    githublink: "github.com/pqrst",
    linkedin: "linkedin.com/in/pqrst",
    phonenNo: "9898989898",
    emailid: "pqrst@gmail.com"
  }
]

export default function teamMembers() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const handleOpen = (data) => {
    setOpen(true);
    if (data != undefined) {
      setIndex(data);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <div className={classes.heading}>
        <Container maxWidth="md">
          <div>
            <h1><u>OUR TEAM</u></h1>
          </div>
          <div className={classes.root} >
            <GridList cellHeight={300} spacing={40} cols={3} className={classes.gridTile}>
              {team.map((tile, i) => (
                <GridListTile key={team.indexOf(tile)} >
                  <img src={tile.img} alt={tile.name} className={classes.imageFullWidth} />
                  <GridListTileBar
                    title={tile.name}
                    subtitle={<span>{tile.designation}</span>}
                    actionIcon={
                      <Fragment>
                        <button type="button" onClick={() => handleOpen(i)}>i</button>
                        <Modal
                          // aria-labelledby="transition-modal-title"
                          // aria-describedby="transition-modal-description"
                          className={classes.modal}
                          open={open}
                          onClose={handleClose}
                          closeAfterTransition
                          BackdropComponent={Backdrop}
                          BackdropProps={{
                            timeout: 500,
                            style: {
                              backgroundColor: "transparent"
                            }
                          }}
                        >
                          <Zoom in={open}>
                            <div className={classes.paper}>
                              <h1 id="transition-modal-title" className={classes.heading}>CONTACT</h1>
                              <h2 id="transition-modal-title"><span>Phone: {team[index].phonenNo}</span></h2>
                              <h2 id="transition-modal-title"><span>Email: {team[index].emailid}</span></h2>
                              <h2 id="transition-modal-title"><span>Github: {team[index].githublink}</span></h2>
                              <h2 id="transition-modal-title"><span>LinkedIn: {team[index].linkedin}</span></h2>
                            </div>
                          </Zoom>
                        </Modal>
                      </Fragment>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}