import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";

function HabitDetails({ habit, deleteHabit, updateHabit }) {
  const [isComplete, setIsComplete] = useState (false);
  const [data, setData] = useState([]);

  const handleComplete = () => {
    setIsComplete(!isComplete);
  }
 // ! have completed go to another completed list

  const [updatedHabit, setUpdatedHabit] = useState({
    description: habit.description,
  });

  function handleDeleteHabit(id) {
    fetch(`/api/habits/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    }).then((r) => {
      console.log(r);
      if (r.ok) {
        deleteHabit(id);
      }
      //need to have the data refresh itself here
      setData(deleteHabit);
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
                <TableCell>Value</TableCell>
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

            <TableBody style={{ textDecoration: isComplete ? 'line-through' : 'none' }}>
              <TableRow hover key={habit.id}>
                <TableCell >{habit.title}</TableCell>
                <TableCell>{habit.description}</TableCell>
                <TableCell>{habit.category}</TableCell>
                <TableCell>{habit.value}</TableCell>
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
          {/* //comeback to fix update */}
          <form onSubmit={handleUpdateHabit}>
            <input
              type="text"
              name="updatedHabit.description"
              placeholder="update description"
              value={updatedHabit.description}
              onChange={(e) => setUpdatedHabit(e.target.value)}
            />
            <Button size="medium">Edit</Button>
          </form>
          <Button onClick={() => handleDeleteHabit(habit._id)}>Delete</Button>
        <Button onClick={handleComplete}>
         { isComplete ? 'Undo' : 'Completed'}
        </Button>
        </Box>
      </Card>
    </div>
  );
}

export default HabitDetails;
