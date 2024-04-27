// <Accordion defaultValue="group_0">
//   {[...new Array(10)].map((_, i) => (
//     // eslint-disable-next-line react/jsx-key
//     <Accordion.Item key={i} value={`group_${i}`}>
//       <Accordion.Control
//         icon={
//           <IconPhoto
//             style={{
//               color: 'var(--mantine-color-red-6)',
//               width: rem(20),
//               height: rem(20),
//             }}
//           />
//         }
//       >
//         <Group justify="space-between" pr={5}>
//           <Text>Group_{i + 1}</Text>
//           <ActionIcon.Group>
//             <ButtonIcon
//               //onClick={() => alert('ok')}
//               icon={IconMaximize}
//               bg="transparent"
//               variant="light"
//               aria-label="full"
//             />
//           </ActionIcon.Group>
//         </Group>
//       </Accordion.Control>
//       <Accordion.Panel>
//         <Grid>
//           {[...new Array(4)].map((_) => (
//             // eslint-disable-next-line react/jsx-key
//             <Grid.Col span={3}>
//               <StreamCard />
//             </Grid.Col>
//           ))}
//         </Grid>
//       </Accordion.Panel>
//     </Accordion.Item>
//   ))}
// </Accordion>