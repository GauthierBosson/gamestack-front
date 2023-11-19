import {Card} from '~/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '~/components/ui/avatar';

export default function GameDiscussions() {
  return (
    <div>
      <article className={'w-full'}>
        <Card className={'p-4'}>
          <Avatar>
            <AvatarImage src={''} />
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
        </Card>
      </article>
    </div>
  );
}