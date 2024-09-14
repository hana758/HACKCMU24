import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

interface Message {
  text: string;
  sender: string;
}

interface ChatBoxProps {
  messages: Message[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  return (
    <Paper
      elevation={5}
      sx={{
        flex: 1,
        padding: 2, 
        overflowY: 'auto', 
        maxHeight: '70vh', 
        backgroundColor: 'white',
      }}
    >
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={message.text} 
              primaryTypographyProps={{
                align: message.sender === 'user' ? 'right' : 'left',
              }}
              sx={{
                backgroundColor: message.sender === 'user' ? '#DDBBF5' : 'lightgray',
                color: message.sender === 'user' ? 'black' : 'black',
                borderRadius: 2,
                padding: 1, 
                maxWidth: '75%', 
                marginLeft: message.sender === 'user' ? 'auto' : 0,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ChatBox;
