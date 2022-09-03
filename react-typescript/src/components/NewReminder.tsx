import { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle("");
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Add new reminder:</label>
      <input
        id="title"
        type="text"
        value={title}
        className="form-control my-2"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary my-3 rounded-pill">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
