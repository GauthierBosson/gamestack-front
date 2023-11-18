import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

type ArticleCardProps = {
  title: string;
  description?: string;
  picture: string;
  date: string;
  author: string;
};

export default function ArticleCard({
  title,
  description,
  picture,
  date,
  author,
}: ArticleCardProps) {
  return (
    <article>
      <Card>
        <CardHeader>
          <div className={'object-cover'}>
            <img
              src={picture}
              alt="Article cover"
              className={'rounded-md h-[150px] w-full object-cover'}
            />
          </div>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardFooter className={'flex justify-between items-center'}>
          <p className={'text-sm'}>{date}</p>
          <p className={'text-sm'}>{author}</p>
        </CardFooter>
      </Card>
    </article>
  );
}
