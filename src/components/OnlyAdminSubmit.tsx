import { FunctionComponent, useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "./Button";
import TextBlock from "./TextBlock";

interface SubmitFormTypes {
  agreeYn: `Y` | `N`;
}
const OnlyAdminSubmit: FunctionComponent = () => {
  const {
    handleSubmit,
    setValue,
    register,
    watch,
    formState: { isValid },
  } = useForm<SubmitFormTypes>();
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const onSubmit: SubmitHandler<SubmitFormTypes> = (data) => console.log(data);

  const triggerSubmit = useCallback(() => {
    handleSubmit(onSubmit)();
  }, [handleSubmit, onSubmit]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextBlock>
        Once sent, the report is final and cannot be retrieved. The counselor is
        solely responsible for any incorrections in the report.
      </TextBlock>
      <br />
      <CheckboxItem>
        <input
          type="checkbox"
          id="agreeYn"
          {...register("agreeYn", {
            required: {
              value: true,
              message: "체크박스에 체크해주세요.",
            },
          })}
          onChange={(e) => {
            setValue("agreeYn", e.target.checked ? "Y" : "N");
            setIsAgree(!isAgree);
          }}
          checked={isAgree}
        />
        {isAgree ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <rect width="22" height="22" rx="5" fill="#7A40F2" />
            <path
              d="M5 11.4583L8.69231 15.125L17 6.875"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <rect width="22" height="22" rx="5" fill="#d0d0d0" />
            <path
              d="M5 11.4583L8.69231 15.125L17 6.875"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        <label htmlFor="agreeYn">I agree to the above.</label>
      </CheckboxItem>
      <ButtonContainer>
        <Button
          color="secondary"
          size="lg"
          onClick={triggerSubmit}
          disabled={!isAgree}
        >
          Send to Student
        </Button>
      </ButtonContainer>
    </form>
  );
};
const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    width: calc(100% + 32px);
    position: relative;
    left: -16px;
    top: 40px;
    button {
      width: 100%;
      border-radius: 0;
    }
  }
`;
const CheckboxItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  position: relative;
  label {
    padding-left: 8px;
    cursor: pointer;
  }
  svg {
    cursor: pointer;
  }
  input {
    width: 22px;
    height: 22px;
    opacity: 0;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
`;
export default OnlyAdminSubmit;
