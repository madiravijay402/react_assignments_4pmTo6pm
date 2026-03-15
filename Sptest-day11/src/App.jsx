import Counter1 from './components/Counter1';
import TextInput from './components/TextInput';
import ThemeToggle from './components/ThemeToggle';
import LoginStatus from './components/LoginStatus';
import UpdateName from './components/UpdateName';
import ObjectUpdateAge from './components/ObjectUpdateAge';
import ObjectUpdateCity from './components/ObjectUpdateCity';
import ArrayAddSkill from './components/ArrayAddSkill';
import ArrayRemoveLast from './components/ArrayRemoveLast';
import StudentStatus from './components/StudentStatus';
import EvenOddCounter from './components/EvenOddCounter';
import UserForm from './components/UserForm';
import ProductStock from './components/ProductStock';
import NumberList from './components/NumberList';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>React useState Mastery</h1>
        <p style={{ color: 'var(--text-color)', opacity: 0.8, marginTop: '0.5rem' }}>
          15 practical exercises demonstrating the power of useState in React.
        </p>
      </header>

      <main className="grid-container">
        <Counter1 />
        <TextInput />
        <ThemeToggle />
        <LoginStatus />
        <UpdateName />
        <ObjectUpdateAge />
        <ObjectUpdateCity />
        <ArrayAddSkill />
        <ArrayRemoveLast />
        <StudentStatus />
        <EvenOddCounter />
        <UserForm />
        <ProductStock />
        <NumberList />
        <ProfileCard />
      </main>

      <footer style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.7, fontSize: '0.9rem' }}>
        Built with Vite + React for Day 11 Assignment
      </footer>
    </div>
  );
}

export default App;
