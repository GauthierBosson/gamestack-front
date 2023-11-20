import {Button} from '~/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '~/components/ui/popover';
import {Form} from '@remix-run/react';
import {Label} from '~/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import {gameScores, gameStatus} from '~/components/games-table/columns';

export default function AddGame() {
  return (
    <Popover>
      <Button asChild variant={'outline'} className={'w-full'}>
        <PopoverTrigger>Add to list</PopoverTrigger>
      </Button>
      <PopoverContent>
        <Form method={'post'}>
          <Label htmlFor={'status'}>Status</Label>
          <Select name={'status'}>
            <SelectTrigger className={'mt-1 mb-4'}>
              <SelectValue>Choose a status</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Object.values(gameStatus).map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Label htmlFor={'score'}>Score</Label>
          <Select name={'score'}>
            <SelectTrigger className={'mt-1 mb-4'}>
              <SelectValue>Choose a score</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Object.values(gameScores).map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Label htmlFor={'platform'}>Platform</Label>
          <Select name={'platform'}>
            <SelectTrigger className={'mt-1 mb-6'}>
              <SelectValue>Choose a platform</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="PC" value="PC">
                PC
              </SelectItem>
              <SelectItem key="PS5" value="PS5">
                PS5
              </SelectItem>
              <SelectItem key="Xbox" value="Xbox">
                Xbox
              </SelectItem>
              <SelectItem key="Switch" value="Switch">
                Switch
              </SelectItem>
            </SelectContent>
          </Select>

          <Button className={'w-full'} type={'submit'}>
            Add game
          </Button>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
