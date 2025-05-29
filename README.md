# FlexGPT 💪

FlexGPT is an AI-powered fitness application that generates personalized workout routines based on your available equipment. Simply add the gym equipment you have at hand, and FlexGPT will create a customized workout plan just for you!

## 🌟 Features

- **Equipment-Based Workouts**: Add any fitness equipment you own and get workouts tailored to what you have
- **AI-Powered Recommendations**: Leverages Claude AI to generate intelligent, effective workout routines  
- **Interactive Equipment Management**: Easily add and remove equipment from your list
- **Structured Workout Plans**: Get complete workouts with warm-up, main exercises, and cool-down
- **Markdown Formatting**: Clean, readable workout presentations with proper formatting
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful glassmorphism design with smooth animations

## 📸 Screenshots

### Main Interface
<img width="1470" alt="Screenshot 2025-05-28 at 11 53 46 PM" src="https://github.com/user-attachments/assets/f7401f67-b126-4bbf-8306-f18d83ced746" />

### Equipment List
<img width="1466" alt="Screenshot 2025-05-28 at 11 49 28 PM" src="https://github.com/user-attachments/assets/34ce67b0-2d72-47f9-b03e-921165cbe7b0" />

### Generated Workout
<img width="1467" alt="Screenshot 2025-05-28 at 11 49 43 PM" src="https://github.com/user-attachments/assets/759722a0-74a8-4703-8036-b9a94ca4bd97" />
<img width="1466" alt="Screenshot 2025-05-28 at 11 49 53 PM" src="https://github.com/user-attachments/assets/57c0a0c3-a9b1-43cd-8748-e92829591394" />

### Mobile View
![flex](https://github.com/user-attachments/assets/ce7b8900-ae0c-45ea-9788-5bf63ef5e371)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Anthropic API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flex-gpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY=your_anthropic_api_key_here
   ```
   
   To get your Anthropic API key:
   - Visit [Anthropic Console](https://console.anthropic.com/)
   - Create an account or sign in
   - Generate a new API key
   - Copy the key to your `.env` file

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running.

## 🛠️ Usage

1. **Add Equipment**: Use the input form to add fitness equipment you have available (e.g., "dumbbells", "resistance bands", "yoga mat")

2. **Manage Your List**: View your equipment list and remove items by clicking the × button next to each item

3. **Generate Workout**: Click the "Generate Workout" button to create a personalized routine

4. **Follow Your Routine**: Review the AI-generated workout plan complete with exercises, sets, reps, and instructions

## 🏗️ Project Structure

```
flex-gpt/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Header.jsx          # App header with logo
│   │   ├── Main.jsx            # Main component with state management
│   │   ├── EquipmentList.jsx   # Equipment list and workout generation
│   │   ├── Workout.jsx         # Workout display component
│   │   └── ai.js              # Anthropic AI integration
│   ├── App.jsx                 # Root application component
│   ├── index.css              # Global styles and responsive design
│   └── index.jsx              # Application entry point
├── .env                       # Environment variables (create this)
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🔧 Built With

### Core Technologies
- **React 19.1.0** - Modern React with hooks
- **Vite 6.3.5** - Fast build tool and dev server
- **JavaScript (ES6+)** - Modern JavaScript features

### AI Integration
- **Anthropic Claude API** - AI-powered workout generation
- **@anthropic-ai/sdk 0.52.0** - Official Anthropic SDK

### UI/UX
- **React Markdown 10.1.0** - Markdown rendering for workouts
- **CSS3** - Modern styling with gradients, backdrop filters, and animations
- **Responsive Design** - Mobile-first approach with breakpoints
- **Glassmorphism UI** - Modern design with blur effects and transparency

### Development Tools
- **ESLint** - Code linting and quality
- **Vite Dev Server** - Hot module replacement
- **Modern Build Pipeline** - Optimized production builds

## 🎨 Design Features

- **Dark Theme**: Easy on the eyes with a sophisticated dark color scheme
- **Glassmorphism Effects**: Modern UI with backdrop blur and transparency
- **Smooth Animations**: Hover effects and transitions for better UX
- **Gradient Accents**: Beautiful color gradients throughout the interface
- **Mobile-First**: Responsive design that works on all devices
- **Accessible**: Proper ARIA labels and semantic HTML

## 📱 Responsive Breakpoints

- **Desktop**: Full-width layout with side-by-side elements
- **Tablet (768px)**: Adjusted spacing and font sizes
- **Mobile (480px)**: Single-column layout with optimized touch targets

## 🤖 AI Integration

FlexGPT uses Claude AI (Haiku model) to generate workout routines. The AI:

- Analyzes your available equipment
- Creates balanced workout routines
- Includes warm-up, main workout, and cool-down sections
- Provides specific sets, reps, and instructions
- Can incorporate bodyweight exercises and suggest additional equipment
- Formats responses in clean, readable markdown

## 🔒 Environment Variables

The application requires the following environment variable:

- `VITE_API_KEY`: Your Anthropic API key for accessing Claude AI

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
