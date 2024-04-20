import React, { useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'none',
  outline: 'none',
  width: "80vw",
  height: "90vh",
  bgcolor: 'transparent',
  p: 0,
};

export default function GallerySection ( { numberOfImages, heading, sourceFolder, id } ) {

  const isUnder1000screen = useMediaQuery('(max-width:1000px)');
  const isUnder700screen = useMediaQuery('(max-width:700px)');
  const isUnder500screen = useMediaQuery('(max-width:500px)');

  const numbers = Array.from(Array(numberOfImages).keys(), (i) => i + 1);
  
  const [open, setOpen] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState('');

  const handleOpen = (e) => {
    setOpen(true);
    setImageSrc(e.target.src);
    };

  const handleClose = () => setOpen(false);

  return (
    <section className="gallery-section" id={id}>
        <h2 className={`h-2 ${isUnder1000screen ? isUnder500screen ? "mi-2" : "mi-5" : "mi-10"} pt-6'`}>{heading}</h2>
        <ImageList variant="masonry" 
            className={`${isUnder1000screen ? isUnder500screen ? "mi-2" : "mi-5" : "mi-10"} mt-2 mb-5`} 
            cols={isUnder1000screen ? isUnder700screen ? 1 : 2 : 3} 
            gap={35}>
            {numbers.map((num) => (
                <ImageListItem key={num}>
                    <img 
                        className='gallery-img'
                        onClick={handleOpen}
                        srcSet={`images/${sourceFolder}/${num}.webp?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`images/${sourceFolder}/${num}.webp?w=248&fit=crop&auto=format`}
                        alt={num}
                        loading="lazy"
                    />
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <picture className='modal-picture'>
                                <img className='modal-img' src={imageSrc} alt="modal" />
                            </picture>
                            <button className='btn-close' onClick={handleClose}></button>
                        </Box>
                    </Modal>
                </ImageListItem>
            ))}
        </ImageList>
    </section>
  )
}