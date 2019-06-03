import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

export default function pickComboList(props) {
  return (
    <div>
      <Typography>
        Teams: <br /> {props.picks.team}
        <br /> {props.picks.otherteam}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tournament</TableCell>
            <TableCell>Pick</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.picks.matchlist
            .filter(pick => pick.match)
            .map((week, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{week.tournament.split("(")[0]}</TableCell>
                  <TableCell>{week.player}</TableCell>
                  <TableCell>{week.match}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
