import Mail from "./Mail";
import TrackOption from "./TrackOption";
import AddPhone from "./AddPhone";
import Verify from "./PhoneVerify";
import Password from "./Password";
// don't forget update imports
const SignUpPage = () => {
  const [nextClicked, setNextClicked] = useState(false);
  const [nextClicked2, setNextClicked2] = useState(false);
  const [nextClicked3, setNextClicked3] = useState(false);
  const [nextClicked4, setNextClicked4] = useState(false);

  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [gender, setGender] = useState();

  const handleSetGender = (value) => {
    setGender(value);
  };

  const handleMonthchanged = (value) => {
    setMonth(value);
  };
  const handleDaychanged = (value) => {
    setDay(value);
  };
  const handleYearchanged = (value) => {
    setYear(value);
  };

  const handleClick = (click) => {
    setNextClicked(click);
  };
  const handleClick2 = (click) => {
    setNextClicked2(click);
  };
  const handleClick3 = (click) => {
    setNextClicked3(click);
  };
  const handleClick4 = (click) => {
    setNextClicked4(click);
  };

  return (
    <SignUpBackground>
      {!nextClicked && (
        <Mail
          handleButtonClick={handleClick}
          handleSetGenderFn={handleSetGender}
          handleMonthchangedFn={handleMonthchanged}
          handleDaychangedFn={handleDaychanged}
          handleYearchangedFn={handleYearchanged}
        />
      )}
      {nextClicked && !nextClicked2 && (
        <TrackOption handleButtonClick={handleClick2} />
      )}
      {nextClicked && nextClicked2 && !nextClicked3 && (
        <AddPhone handleButtonClick={handleClick3} />
      )}
      {nextClicked && nextClicked2 && nextClicked3 && !nextClicked4 && (
        <Password handleButtonClick={handleClick4} />
      )}
      {nextClicked && nextClicked2 && nextClicked3 && nextClicked4 && (
        <Verify gender={gender} birth={new Date(year, month - 1, day)} />
      )}
    </SignUpBackground>
  );
};

export default SignUpPage;
