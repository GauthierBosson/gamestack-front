import {Card} from '~/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '~/components/ui/avatar';

export default function GameDiscussions() {
  return (
    <>
      <h2>Discussions</h2>
      <div className={'grid grid-cols-3 gap-4'}>
        <article className={'w-full'}>
          <Card className={'p-4 flex items-center gap-4'}>
            <Avatar>
              <AvatarImage src={''} />
              <AvatarFallback>GB</AvatarFallback>
            </Avatar>
            <h3>Comment finir le jeu sur PS5 svp help</h3>
          </Card>
        </article>
        <article className={'w-full'}>
          <Card className={'p-4 flex items-center gap-4'}>
            <Avatar>
              <AvatarImage src={''} />
              <AvatarFallback>GB</AvatarFallback>
            </Avatar>
            <h3>Comment finir le jeu sur PS5 svp help</h3>
          </Card>
        </article>
        <article className={'w-full'}>
          <Card className={'p-4 flex items-center gap-4'}>
            <Avatar>
              <AvatarImage src={''} />
              <AvatarFallback>GB</AvatarFallback>
            </Avatar>
            <h3>Comment finir le jeu sur PS5 svp help</h3>
          </Card>
        </article>
        <article className={'w-full'}>
          <Card className={'p-4 flex items-center gap-4'}>
            <Avatar>
              <AvatarImage src={''} />
              <AvatarFallback>GB</AvatarFallback>
            </Avatar>
            <h3>Comment finir le jeu sur PS5 svp help</h3>
          </Card>
        </article>
      </div>
    </>
  );
}
