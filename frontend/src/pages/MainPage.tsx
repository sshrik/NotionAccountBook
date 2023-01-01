import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from 'components/base/Button';
import Select from 'components/base/Select';
import TextInput from 'components/base/TextInput';
import * as S from 'components/Container.style';
import { useCreateHistory } from 'hooks/useCreateHistory';

interface HistoryForm {
  title: string;
  categories: string[];
  amount: number;
  date: string;
}

const MainPage: React.FC = () => {
  const { t } = useTranslation();

  const methods = useForm<HistoryForm>({
    defaultValues: {
      title: '',
      categories: [],
      amount: 0,
      date: '2023-01-01',
    },
  });

  const { mutate } = useCreateHistory();

  const handleSignInFormSubmit = (value: HistoryForm) => {
    const databaseId = '50061e4f4ab34cda93602cca420f2872';

    mutate({ databaseId, ...value });
  };

  const handleSubmit = methods.handleSubmit(handleSignInFormSubmit);

  return (
    <S.Container>
      <S.FormContainer>
        <FormProvider {...methods}>
          <form
            autoComplete="off"
            className="flex flex-col items-start m-8 gap-4 w-[532px]"
            onSubmit={handleSubmit}
          >
            <label>{t('title')}</label>
            <TextInput
              name="title"
              type="text"
              placeholder={t('title-placeholder')}
              required={{
                value: true,
                message: t('empty-title-error-message'),
              }}
            />
            <label>{t('amount')}</label>
            <TextInput
              name="amount"
              type="number"
              placeholder={t('amount-placeholder')}
              required={{
                value: true,
                message: t('empty-amount-error-message'),
              }}
            />
            <label>{t('categories')}</label>
            <Select
              multiple
              name="categories"
              placeholder={t('categories-placeholder')}
              options={['식비', '데이트', '선물', '커피', '기타']}
              required={{
                value: true,
                message: t('empty-date-error-message'),
              }}
            />
            <label>{t('date')}</label>
            <TextInput
              name="date"
              placeholder={t('date-placeholder')}
              required={{
                value: true,
                message: t('empty-date-error-message'),
              }}
            />
            <Button onClick={handleSubmit}>{t('submit')}</Button>
          </form>
        </FormProvider>
      </S.FormContainer>
    </S.Container>
  );
};

export default MainPage;
