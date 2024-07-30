// // content.js

// // Check if the panel already exists to prevent duplication
// if (!document.getElementById('my-extension-panel')) {
//     // Create the panel element
//     const panel = document.createElement('div');
//     panel.id = 'my-extension-panel';
//     panel.innerHTML = `
//       <div id="panel-content">
//         <h2>My Panel</h2>
//         <p>This is a panel on the right side of the page.</p>
//         <button id="panel-close">Close</button>
//       </div>
//     `;
    
//     // Add panel to the body
//     document.body.appendChild(panel);
  
//     // Add event listener to close button
//     document.getElementById('panel-close').addEventListener('click', () => {
//       document.getElementById('my-extension-panel').style.display = 'none';
//     });
  
//     // Optional: Initialize or configure your panel content here
//   }
  
// Create a container for the chat widget
// let chatContainer = document.createElement('div');
// chatContainer.id = 'chatContainer';

// // Inject the HTML content for the chat widget
// chatContainer.innerHTML = `
//   <script src="df-messenger.js"></script>
//   <df-messenger
//     project-id="just-well-429210-n7"
//     agent-id="2a919d25-9307-442c-8095-e3313a419a1c"
//     language-code="en"
//     max-query-length="-1">
//     <df-messenger-chat-bubble chat-title="AutismChatApp"></df-messenger-chat-bubble>
//   </df-messenger>
// `;

// // Append the container to the body
// document.body.appendChild(chatContainer);


