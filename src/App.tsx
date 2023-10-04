import PassedPropsButton from './components/PassedProps/PassedPropsButton';
import AdaptingButton from './components/AdaptingBasedOnProps/AdaptingButton';
import React, { useState } from 'react';

export default function App() {
  const ThemeOptions = ["light", "dark"];
  const [selectedTheme, setSelectedTheme] = useState<string>('light');

  const changeTheme = (theme: string) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="App" style={{ background: `${selectedTheme === 'light' ? 'lightgrey' : 'black'}` }}>
      <h1>Themes</h1>
      <ThemeFunc themeOptions={ThemeOptions} setSelectedTheme={changeTheme} selectedTheme={selectedTheme} />
      <p>Selected Theme: <strong>{selectedTheme}</strong></p>
      {/* Adapting Based on Props */}
      <div className="adapting-button">
        <h2>Adapting Based on Props</h2>
        <AdaptingButton />
      </div>
      {/* End */}
      {/* Passed Props */}
      <div className='passed-props'>
        <h2>Passed Props</h2>
        <PassedPropsButton />
      </div>
      {/* End */}
    </div>
  );
}

interface ThemeFuncProps {
  themeOptions: string[];
  setSelectedTheme: (theme: string) => void;
  selectedTheme: string
}

function ThemeFunc({ themeOptions, setSelectedTheme, selectedTheme }: ThemeFuncProps) {
  return (
    <div className="list">
      <ul>
        {themeOptions.map((theme, index) => (
          <li style={{ color: `${selectedTheme === 'light' ? 'black' : '#ffffffc5'}`, fontWeight: `${selectedTheme === theme ? '700' : '400'}` }} key={index} onClick={() => setSelectedTheme(theme)}>{theme}</li>
        ))}
      </ul>
    </div>
  )
}

//  We define the ThemeFuncProps interface to specify the types for the props passed to the ThemeFunc component. 
//  It includes themeOptions (an array of strings) and setSelectedTheme (a function that takes a string argument and returns void).

// In the ThemeFunc component, we use this interface to specify the types of the props received, 
// ensuring that TypeScript recognizes setSelectedTheme as a function that can be called with a string argument.