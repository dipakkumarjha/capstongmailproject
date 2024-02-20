import {AppBar, Toolbar, styled,InputBase, Box } from '@mui/material';
import {AccountCircleOutlined, AppsOutlined, HelpOutlineOutlined, Menu as MenuIcon, Search, SettingsOutlined, Tune} from '@mui/icons-material';
import gmailLogo from "../Images/gmailLogo.svg";


const StyledAppBar = styled(AppBar)({
    background: '#F5F5F5',
    boxShadow: 'none'
})

const SearchWrapper = styled(Box)({
    background:'#EAF1FB',
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWidth:720,
    height:48,
    justifyContent:"space-between",
    display:'flex',
    alignItems:'center',
    padding:'0 20px',
    '& > div':{
        width:'100%',
        padding:'0 10px'
    }
});

const OptionsWrapper =styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent:'end',
    '& > svg':{
        marginLeft:20 
    }
});
const Header= ({toggleDrawer }) =>{
    return(
        <StyledAppBar position='static'>
            <Toolbar>
                <MenuIcon color="action" onClick={toggleDrawer} />
                <img src={gmailLogo} alt="logo" style={{width:50, marginLeft:"15px"}}/>
                <SearchWrapper>
                    <Search color="action"/>
                    <InputBase 
                        placeholder='Search your mail'
                    />
                    <Tune color="action"/>
                </SearchWrapper>
                <OptionsWrapper>
                    <HelpOutlineOutlined color="action"/>
                    <SettingsOutlined color="action"/>
                    <AppsOutlined color="action" />
                    <AccountCircleOutlined color="action" />
                </OptionsWrapper>


             
            </Toolbar>
        </StyledAppBar>
    )
   
}


export default Header;