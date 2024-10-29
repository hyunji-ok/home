import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// props 타입 정의
interface AlertDialogProps {
  children: React.ReactNode;
  company: string;
  contents: Array<DialogContents>;
}

// contents를 위한 인터페이스 정의
interface DialogContents {
  title: string;
  period: string;
  role: Array<string>;
  result: Array<string>;
  technology: Array<string>;
}

export default function AlertDialog({children, company, contents}: AlertDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        {children}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`${company} 경력기술서`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {contents.map((item,index) => {
              return (
                <div key={index} style={{marginBottom: "50px"}}>
                  <p>{`${index+1}. ${item.title}`}</p>

                  <p>기간</p>
                  <ul>
                    <li>{item.period}</li>
                  </ul>

                  <p>역할</p>
                  <ul>
                    {item.role.map((roleItem, roleIndex) => (
                      <li key={`${index}-${roleIndex}`}>{roleItem}</li>
                    ))}
                  </ul>

                  <p>성과</p>
                  <ul>
                    {item.result.map((resultItem, resultIndex) => (
                      <li key={`${index}-${resultIndex}`}>{resultItem}</li>
                    ))}
                  </ul>

                  <p>사용기술</p>
                  <ul>
                    {item.technology.map((technologyItem, technologyIndex) => (
                      <li key={`${index}-${technologyIndex}`}>{technologyItem}</li>
                    ))}
                  </ul>

                </div>
              );
            })}
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}