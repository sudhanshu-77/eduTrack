import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher.jsx'
import { Button, Drawer, DrawerContent, DrawerHeader, DrawerOverlay ,useDisclosure ,
  VStack,
  HStack,
  DrawerBody,

} from '@chakra-ui/react'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';

import { Link } from 'react-router-dom';


const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);


function Header() {
const {isOpen, onOpen, onClose} = useDisclosure()
const isAuthenticated = false

const user ={
  role: 'admin'
}



  return (
    <>
    <ColorModeSwitcher/>
    <Button 
    onClick={onOpen}
     colorScheme={'yellow'}
     width="12"
     height={'12'}
     rounded="full"
     zIndex={'overlay'}
     position={'fixed'}
     top="6"
     left="6"
    >
      <RiMenu5Fill/>

    </Button>
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>

      <DrawerOverlay/>
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" backdropFilter={'blur(3px)'}>
          EduTrack Courses
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
            <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton
                onClose={onClose}
                url="/courses"
                title="Browse All Courses"
              />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="Request a Course"
              />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />

              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                 {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} >
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={'purple'} variant="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button  colorScheme={'yellow'}>
                        Login
                      </Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to="/register">
                      <Button colorScheme={'yellow'}>
                        Register
                      </Button>
                    </Link>
                  </>
                )}

                </HStack>
                </VStack>
                </DrawerBody>
      </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header
  