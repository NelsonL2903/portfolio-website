import { Box, Button, Grid, Slider } from "@mui/material";
import { useState } from "react";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { jobs } from "../components/utils/jobs_info";
import Experience from "../components/timeline/experience";

const marks = [];
const markBaseValue = 100 / (jobs.length - 1);

jobs.forEach((job, index) => {
  marks.push({ value: markBaseValue * index, label: job.start });
});

export const TimelinePage = () => {
  const [sliderValue, setSliderValue] = useState(100);
  const [pageIndex, setPageIndex] = useState(100);
  const [disabledPrevious, setDisabledPrevious] = useState(false);
  const [disabledNext, setDisabledNext] = useState(true);

  function valueLabelFormat(value) {
    return marks[marks.findIndex((mark) => mark.value === value)]?.label;
  }

  const handleSliderChange = (value) => {
    setSliderValue(value);

    if (marks.some((mark) => mark.value === value)) {
      setPageIndex(value);
      const index = marks.findIndex((mark) => mark.value === value);
      setDisabled(index);
    }
  };

  const handleSliderChangeCommit = (value) => {
    setSliderValue(getClosest(value));
    setPageIndex(getClosest(value));
    const index = marks.findIndex((mark) => mark.value === getClosest(value));
    setDisabled(index);
  };

  const setDisabled = (index) => {
    if (index === 0) {
      setDisabledPrevious(true);
      setDisabledNext(false);
    } else if (index === marks.length - 1) {
      setDisabledPrevious(false);
      setDisabledNext(true);
    } else {
      setDisabledPrevious(false);
      setDisabledNext(false);
    }
  };

  const getClosest = (value) => {
    let closest = 0;

    marks.forEach((mark) => {
      const diff = Math.abs(value - mark.value);

      if (diff < Math.abs(value - closest)) {
        closest = mark.value;
      }
    });
    return closest;
  };

  const handlePrevious = () => {
    const index = marks.findIndex((mark) => mark.value === sliderValue);
    setSliderValue(marks[index - 1].value);
    setPageIndex(marks[index - 1].value);
    setDisabled(index - 1);
  };

  const handleNext = () => {
    const index = marks.findIndex((mark) => mark.value === sliderValue);
    setSliderValue(marks[index + 1].value);
    setPageIndex(marks[index + 1].value);
    setDisabled(index + 1);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        xs
      >
        <Slider
          aria-label="Restricted values"
          value={sliderValue}
          valueLabelFormat={valueLabelFormat}
          step={1}
          marks={marks}
          classes={{ markLabel: "color=white" }}
          onChange={(event) => {
            handleSliderChange(event.target.value);
          }}
          onChangeCommitted={(event, value) => {
            handleSliderChangeCommit(value);
          }}
          style={{
            marginTop: "15px",
            marginLeft: "50px",
            marginRight: "50px",
          }}
          sx={{
            "& .MuiSlider-markLabel": {
              color: "white",
            },
          }}
        ></Slider>
        {jobs.map(
          (job, index) =>
            pageIndex === marks[index].value && (
              <Experience jobInfo={job} key={job.title} />
            )
        )}
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        xs
        style={{ marginTop: "-20px" }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<NavigateBefore />}
          style={{ marginRight: "30px" }}
          disabled={disabledPrevious}
          onClick={() => {
            handlePrevious();
          }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          size="large"
          endIcon={<NavigateNext />}
          disabled={disabledNext}
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </Button>
      </Grid>
    </Box>
  );
};

export default TimelinePage;
