import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Button,
//   CardActions,
//   Typography,
//   IconButton,
//   useTheme,
//   FormControlLabel,
//   Checkbox,
//   Stack,
// } from "@mui/material";

import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  useTheme,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// import FeedIcon from "@mui/icons-material/Feed";
// import { useForm, Controller } from "react-hook-form";

function HabitDetails({ habit, deleteHabit, updateHabit }) {
  const [updatedHabit, setUpdatedHabit] = useState({
    title: habit.title,
    description: habit.description,
  });

  const theme = useTheme();

  function handleDeleteHabit(id) {
    fetch(`/api/habits/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    }).then((r) => {
      if (r.ok) {
        deleteHabit(id);
      }
    });
  }

  function handleUpdateHabit(e) {
    e.preventDefault();

    fetch(`/api/habits/${habit._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedHabit),
    })
      .then((r) => r.json())
      .then((updatedHabits) => {
        updateHabit(updatedHabits);
      });
  }

  // function handleHabitChange(e) {
  //   setUpdatedHabit((updatedHabit) => ({
  //     ...updatedHabit,
  //     [e.target.des
  //   }))
  // }

  return (
    <div>
      HabitDetail
      <CardHeader title="Habits" />
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Ref</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow hover key={habit.id}>
              <TableCell>{habit.title}</TableCell>
              <TableCell>{habit.description}</TableCell>
              {/* <TableCell>
                  {format(order.createdAt, 'dd/MM/yyyy')}
                </TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </Box>
   
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </div>
  );
}

export default HabitDetails;
