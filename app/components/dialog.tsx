import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';

type DialogProps = {
  triggerLabel: string;
  alertTitle: string;
  alertMessage: string;
  actionLabel?: string;
  cancelLabel?: string;
  actionFunction: () => void;
  isDisabled?: boolean;
};

export default function Dialog({
  triggerLabel,
  alertTitle,
  alertMessage,
  actionLabel,
  cancelLabel,
  actionFunction,
  isDisabled,
}: DialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        disabled={isDisabled !== undefined ? isDisabled : false}>
        {triggerLabel}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
          <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => actionFunction()}>
            {actionLabel ?? 'Ok'}
          </AlertDialogAction>
          <AlertDialogCancel>{cancelLabel ?? 'Cancel'}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
