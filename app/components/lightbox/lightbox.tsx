import {useState} from 'react';
import {Dialog, DialogClose, DialogContent} from '~/components/ui/dialog';
import {Button} from '~/components/ui/button';

export default function Lightbox({pictures}: {pictures: string[]}) {
  const [zoomedPicture, setZoomedPicture] = useState<string | null>(null);

  return (
    <section className={'grid grid-cols-5'}>
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={'screenshot'}
          className={'cursor-pointer h-[100px] object-cover'}
          onClick={() => setZoomedPicture(picture)}
        />
      ))}
      <Dialog open={!!zoomedPicture}>
        <DialogContent>
          <DialogClose asChild>
            <Button>blblblblblb</Button>
          </DialogClose>
          <img src={zoomedPicture ? zoomedPicture : ''} alt={'screenshot'} />
        </DialogContent>
      </Dialog>
    </section>
  );
}
