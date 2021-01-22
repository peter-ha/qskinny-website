---
title: QskDialogWindow
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group___dialogs/)**



Inherits from QskWindow

Inherited by [QskMessageWindow](/docs/classes/class_qsk_message_window/), [QskSelectionWindow](/docs/classes/class_qsk_selection_window/)

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[accept](/docs/classes/class_qsk_dialog_window/#slot-accept)**() |
| void | **[reject](/docs/classes/class_qsk_dialog_window/#slot-reject)**() |
| virtual void | **[done](/docs/classes/class_qsk_dialog_window/#slot-done)**(QskDialog::DialogCode result) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[finished](/docs/classes/class_qsk_dialog_window/#signal-finished)**(QskDialog::DialogCode result) |
| void | **[accepted](/docs/classes/class_qsk_dialog_window/#signal-accepted)**() |
| void | **[rejected](/docs/classes/class_qsk_dialog_window/#signal-rejected)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskDialogWindow](/docs/classes/class_qsk_dialog_window/#function-qskdialogwindow)**(QWindow * parent =nullptr) |
| | **[~QskDialogWindow](/docs/classes/class_qsk_dialog_window/#function-~qskdialogwindow)**() override |
| QskDialog::Actions | **[dialogActions](/docs/classes/class_qsk_dialog_window/#function-dialogactions)**() const |
| void | **[setDialogActions](/docs/classes/class_qsk_dialog_window/#function-setdialogactions)**(QskDialog::Actions actions) |
| Q_INVOKABLE QskDialog::Action | **[clickedAction](/docs/classes/class_qsk_dialog_window/#function-clickedaction)**() const |
| Q_INVOKABLE QskDialog::DialogCode | **[result](/docs/classes/class_qsk_dialog_window/#function-result)**() const |
| Q_INVOKABLE QskDialog::DialogCode | **[exec](/docs/classes/class_qsk_dialog_window/#function-exec)**() |
| void | **[setDefaultDialogAction](/docs/classes/class_qsk_dialog_window/#function-setdefaultdialogaction)**(QskDialog::Action action) |
| void | **[setDefaultButton](/docs/classes/class_qsk_dialog_window/#function-setdefaultbutton)**(QskPushButton * button) |
| QskPushButton * | **[defaultButton](/docs/classes/class_qsk_dialog_window/#function-defaultbutton)**() const |
| QskDialogButtonBox * | **[buttonBox](/docs/classes/class_qsk_dialog_window/#function-buttonbox)**() |
| const QskDialogButtonBox * | **[buttonBox](/docs/classes/class_qsk_dialog_window/#function-buttonbox)**() const |
| void | **[setDialogContentItem](/docs/classes/class_qsk_dialog_window/#function-setdialogcontentitem)**(QQuickItem * item) |
| QQuickItem * | **[dialogContentItem](/docs/classes/class_qsk_dialog_window/#function-dialogcontentitem)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setResult](/docs/classes/class_qsk_dialog_window/#function-setresult)**(QskDialog::DialogCode r) |
| virtual QskDialogButtonBox * | **[createButtonBox](/docs/classes/class_qsk_dialog_window/#function-createbuttonbox)**() |
| bool | **[event](/docs/classes/class_qsk_dialog_window/#function-event)**(QEvent * event) override |
| void | **[keyPressEvent](/docs/classes/class_qsk_dialog_window/#function-keypressevent)**(QKeyEvent * event) override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QskDialog::Actions | **[dialogActions](/docs/classes/class_qsk_dialog_window/#property-dialogactions)**  |

## Public Slots Documentation

### slot accept

```cpp
void accept()
```


### slot reject

```cpp
void reject()
```


### slot done

```cpp
virtual void done(
    QskDialog::DialogCode result
)
```


## Public Signals Documentation

### signal finished

```cpp
void finished(
    QskDialog::DialogCode result
)
```


### signal accepted

```cpp
void accepted()
```


### signal rejected

```cpp
void rejected()
```


## Public Functions Documentation

### function QskDialogWindow

```cpp
QskDialogWindow(
    QWindow * parent =nullptr
)
```


### function ~QskDialogWindow

```cpp
~QskDialogWindow() override
```


### function dialogActions

```cpp
QskDialog::Actions dialogActions() const
```


### function setDialogActions

```cpp
void setDialogActions(
    QskDialog::Actions actions
)
```


### function clickedAction

```cpp
Q_INVOKABLE QskDialog::Action clickedAction() const
```


### function result

```cpp
Q_INVOKABLE QskDialog::DialogCode result() const
```


### function exec

```cpp
Q_INVOKABLE QskDialog::DialogCode exec()
```


### function setDefaultDialogAction

```cpp
void setDefaultDialogAction(
    QskDialog::Action action
)
```


### function setDefaultButton

```cpp
void setDefaultButton(
    QskPushButton * button
)
```


### function defaultButton

```cpp
QskPushButton * defaultButton() const
```


### function buttonBox

```cpp
QskDialogButtonBox * buttonBox()
```


### function buttonBox

```cpp
const QskDialogButtonBox * buttonBox() const
```


### function setDialogContentItem

```cpp
void setDialogContentItem(
    QQuickItem * item
)
```


### function dialogContentItem

```cpp
QQuickItem * dialogContentItem() const
```


## Protected Functions Documentation

### function setResult

```cpp
void setResult(
    QskDialog::DialogCode r
)
```


### function createButtonBox

```cpp
virtual QskDialogButtonBox * createButtonBox()
```


### function event

```cpp
bool event(
    QEvent * event
) override
```


### function keyPressEvent

```cpp
void keyPressEvent(
    QKeyEvent * event
) override
```


## Public Property Documentation

### property dialogActions

```cpp
QskDialog::Actions dialogActions;
```


-------------------------------

Updated on 22 January 2021 at 17:05:48 CET