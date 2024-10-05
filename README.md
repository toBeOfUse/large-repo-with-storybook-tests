This is a test repo designed to see whether the Storybook test runner can support a large number of tests and stories. It consists of:

- the basic pages included when you initialize a Next.js Storybook test project
- an extra component in the src/stories directory, called "LotsOfStuff.tsx"
- a story for LotsOfStuff
- the src/stories/LotsOfStories directory, which contains 400 copies of the story for LotsOfStuff.
- test-output.txt, which contains the initial output from when I try to run the Storybook test runner in this project

Currently, the Storybook test runner cannot reliably run tests for the all these stories on my computer (Windows 11 Pro, 14-core i7-13700H processor, 32GB of RAM). The output from an attempt to run the tests is included in test-output.txt.

This is a bit of a contrived example, but the same errors that show up in the output in this repository also have started showing up when running tests on the stories that we have at my job, where we have about 600 very real Storybook tests that need to run.
