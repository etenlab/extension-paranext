import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent } from '@ionic/react';

import {
  Typography,
  CrowdBibleUI,
  MuiMaterial,
  BiCommentAdd,
  useColorModeContext,
} from '@eten-lab/ui-kit';

import { mockDocument } from './ReaderQAPage';

const { LabelWithIcon, KindSelectionBox } = CrowdBibleUI;
const { Stack, Backdrop } = MuiMaterial;

export function FeedbackPage() {
  const { getColor } = useColorModeContext();
  const history = useHistory();
  const [openedKindSelectionBox, setOpenedKindSelectionBox] =
    useState<boolean>(false);

  const handleClickPlus = () => {
    setOpenedKindSelectionBox(true);
  };

  const handleCancelKindSelectionBox = () => {
    setOpenedKindSelectionBox(false);
  };

  const handleTextClick = () => {
    handleCancelKindSelectionBox();
    history.push('/feedback/text-part');
  };

  const handleChapterClick = () => {
    handleCancelKindSelectionBox();
    history.push('/feedback/chapter');
  };

  const handleVerseClick = () => {
    handleCancelKindSelectionBox();
    history.push('/feedback/verse');
  };

  return (
    <IonContent>
      <Stack sx={{ padding: '20px' }}>
        <LabelWithIcon
          label="translation"
          icon={<BiCommentAdd />}
          color="gray"
          onClick={handleClickPlus}
        />
        <Typography
          variant="body2"
          color="text.dark"
          sx={{
            lineHeight: '30px',
            textAlign: 'justify',
          }}
        >
          {mockDocument}
        </Typography>
      </Stack>
      <Backdrop
        open={openedKindSelectionBox}
        sx={{
          alignItems: 'flex-start',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
      >
        <Stack
          sx={{
            borderRadius: '0 0 20px 20px',
            width: '100%',
            background: getColor('white'),
          }}
        >
          <KindSelectionBox
            title="Leave Feedback"
            label="Choose what you want to leave feedback for:"
            onTextClick={handleTextClick}
            onChapterClick={handleChapterClick}
            onVerseClick={handleVerseClick}
            onCancel={handleCancelKindSelectionBox}
          />
        </Stack>
      </Backdrop>
    </IonContent>
  );
}
