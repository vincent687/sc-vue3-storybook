import TextTitle from "./TextTitle.vue";
import { Story } from "@storybook/vue3";
import "../../.storybook/utils.css";

// // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "TextTitle",
  component: TextTitle,
  //   // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    detail: "",
    status: "",
  },
};

// // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: Story<typeof TextTitle> = (args) => ({
  //   // Components used in your story `template` are defined in the `components` object
  components: { TextTitle },
  //   // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  //   // And then the `args` are bound to your component with `v-bind="args"`
  template: '<text-title v-bind="args" />',
});

export const GreenText = Template.bind({});
// // More on args: https://storybook.js.org/docs/vue/writing-stories/args
GreenText.args = {
  status: "success",
  detail: "Pinapple Run Volunteer",
};

export const RedText = Template.bind({});
// // More on args: https://storybook.js.org/docs/vue/writing-stories/args
RedText.args = {
  status: "success",
  detail: "Pinapple Run Volunteer",
};

// export const RedTag = Template.bind({})
// // More on args: https://storybook.js.org/docs/vue/writing-stories/args
// RedTag.args = {
//   tagColor: 'red',
//   job: {
//     id: 1,
//     title: '中六暑期實習生計畫2019',
//     time: '21 Nov',
//     participantCount: '1',
//     participantTotal: '',
//     places: ['全港'],
//     thumbnailImageURL:
//       'https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg',
//     tags: [
//       {
//         id: 1,
//         name: 'No Poverty',
//         color: 'red',
//       },
//       {
//         id: 2,
//         name: 'Quality Education',
//         color: 'red',
//       },
//       {
//         id: 3,
//         name: 'Decent Work',
//         color: 'red',
//       },
//       {
//         id: 4,
//         name: '導師/教師',
//         color: 'grey',
//       },
//       {
//         id: 5,
//         name: '管理工作',
//         color: 'grey',
//       },
//     ],
//   },
// }

// export const RedText = Template.bind({})
// // More on args: https://storybook.js.org/docs/vue/writing-stories/args
// RedText.args = {
//   textColor: 'red',
//   job: {
//     id: 1,
//     title: '中六暑期實習生計畫2019',
//     time: '21 Nov',
//     participantCount: '1',
//     participantTotal: '',
//     places: ['全港'],
//     thumbnailImageURL:
//       'https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg',
//     tags: [
//       {
//         id: 1,
//         name: 'No Poverty',
//         color: 'red',
//       },
//       {
//         id: 2,
//         name: 'Quality Education',
//         color: 'red',
//       },
//       {
//         id: 3,
//         name: 'Decent Work',
//         color: 'red',
//       },
//       {
//         id: 4,
//         name: '導師/教師',
//         color: 'grey',
//       },
//       {
//         id: 5,
//         name: '管理工作',
//         color: 'grey',
//       },
//     ],
//   },
// }

// // export const Small = Template.bind({})
// // Small.args = {
// //   size: 'small',
// //   label: 'Button'
// // }
