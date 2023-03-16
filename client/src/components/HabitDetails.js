import React, { useState } from "react";
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
  //useTheme,
  Tooltip,
} from "@mui/material";

function HabitDetails({ habit, deleteHabit, updateHabit }) {
  const [data, setData] = useState([]);
  const [updatedHabit, setUpdatedHabit] = useState({
    description: habit.description,
  });

  //const theme = useTheme();

  function handleDeleteHabit(id) {
    fetch(`/api/habits/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    }).then((r) => {
      console.log(r)
      if (r.ok) {
        deleteHabit(id);
      }
      //need to have the data refresh itself here
      setData(deleteHabit)
    });
  }

  function handleUpdateHabit(e) {
    e.preventDefault();

    fetch(`/api/habits/${habit.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: e.target.updatedHabit }),
    })
      .then((r) => r.json())
      .then((updatedHabit) => {
        updateHabit(updatedHabit);
      })
      .catch((err) => console.log("error:", err));
  }

  // function handleHabitChange(e) {
  //   setUpdatedHabit((updatedHabit) => ({
  //     ...updatedHabit,
  //     [e.target.des
  //   }))
  // }

  return (
    <div>
      <br />
      <Card style={{ backgroundColor: "#EDE9FF", border: "1px solid navy" }}>
        <CardHeader title="Habits" />
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Category</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="asc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                {/* <TableCell>Status</TableCell> */}
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow hover key={habit.id}>
                <TableCell>{habit.title}</TableCell>
                <TableCell>{habit.description}</TableCell>
                <TableCell>{habit.category}</TableCell>
                {/* <TableCell>
                  {format(order.
                    createdAt, 'dd/MM/yyyy')}
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
          {/* <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          View all
        </Button> */}

          {/* //comeback to fix update */}
          <form onSubmit={handleUpdateHabit}>
            <input
              type="text"
              name="updatedHabit.description"
              placeholder="update description"
              value={updatedHabit.description}
              onChange={(e) => setUpdatedHabit(e.target.value)}
            />
            <Button size="small">Edit</Button>
          </form>
          <Button onClick={() => handleDeleteHabit(habit._id)}>Delete</Button>
        </Box>
      </Card>
    </div>
  );
}

export default HabitDetails;
