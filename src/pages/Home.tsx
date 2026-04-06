import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonAlert,
  IonCard,
  IonCardContent
} from '@ionic/react';

import { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  // ADD / UPDATE
  const saveTask = () => {
    if (task.trim() === '') {
      setShowAlert(true);
      return;
    }

    if (editIndex !== null) {
      // UPDATE
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // ADD
      setTasks([...tasks, task]);
    }

    setTask('');
  };

  // EDIT
  const editTask = (index: number) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  // DELETE
  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="center-container">
          <IonCard className="todo-card">
            <IonCardContent>

              {/* Input */}
              <IonInput
                className="custom-input"
                value={task}
                placeholder="Enter a task..."
                onIonChange={(e) => setTask(e.detail.value!)}
              />

              {/* Button (Add / Update) */}
              <IonButton expand="block" className="add-btn" onClick={saveTask}>
                {editIndex !== null ? 'Update Task' : 'Add Task'}
              </IonButton>

              {/* Task List */}
              <IonList>
                {tasks.map((item, index) => (
                  <IonItem key={index} className="task-item">
                    <IonLabel>{item}</IonLabel>

                    {/* Edit Button */}
                    <IonButton
                      size="small"
                      color="primary"
                      onClick={() => editTask(index)}
                    >
                      Edit
                    </IonButton>

                    {/* Delete Button */}
                    <IonButton
                      size="small"
                      color="danger"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </IonButton>
                  </IonItem>
                ))}
              </IonList>

            </IonCardContent>
          </IonCard>
        </div>

        {/* Alert */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Error"
          message="Please enter a task!"
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;