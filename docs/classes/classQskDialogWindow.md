---
title: QskDialogWindow
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group__Dialogs/)**



Inherits from QskWindow

Inherited by [QskMessageWindow](/docs/classes/classQskMessageWindow/), [QskSelectionWindow](/docs/classes/classQskSelectionWindow/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskDialogWindow](/docs/classes/classQskDialogWindow/#function-qskdialogwindow)**(QWindow * parent =nullptr) |
| | **[~QskDialogWindow](/docs/classes/classQskDialogWindow/#function-~qskdialogwindow)**() override |
| QskDialog::Actions | **[dialogActions](/docs/classes/classQskDialogWindow/#function-dialogactions)**() const |
| void | **[setDialogActions](/docs/classes/classQskDialogWindow/#function-setdialogactions)**(QskDialog::Actions actions) |
| Q_INVOKABLE QskDialog::Action | **[clickedAction](/docs/classes/classQskDialogWindow/#function-clickedaction)**() const |
| Q_INVOKABLE QskDialog::DialogCode | **[result](/docs/classes/classQskDialogWindow/#function-result)**() const |
| Q_INVOKABLE QskDialog::DialogCode | **[exec](/docs/classes/classQskDialogWindow/#function-exec)**() |
| void | **[setDefaultDialogAction](/docs/classes/classQskDialogWindow/#function-setdefaultdialogaction)**(QskDialog::Action action) |
| void | **[setDefaultButton](/docs/classes/classQskDialogWindow/#function-setdefaultbutton)**(QskPushButton * button) |
| QskPushButton * | **[defaultButton](/docs/classes/classQskDialogWindow/#function-defaultbutton)**() const |
| QskDialogButtonBox * | **[buttonBox](/docs/classes/classQskDialogWindow/#function-buttonbox)**() |
| const QskDialogButtonBox * | **[buttonBox](/docs/classes/classQskDialogWindow/#function-buttonbox)**() const |
| void | **[setDialogContentItem](/docs/classes/classQskDialogWindow/#function-setdialogcontentitem)**(QQuickItem * item) |
| QQuickItem * | **[dialogContentItem](/docs/classes/classQskDialogWindow/#function-dialogcontentitem)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setResult](/docs/classes/classQskDialogWindow/#function-setresult)**(QskDialog::DialogCode r) |
| virtual QskDialogButtonBox * | **[createButtonBox](/docs/classes/classQskDialogWindow/#function-createbuttonbox)**() |
| bool | **[event](/docs/classes/classQskDialogWindow/#function-event)**(QEvent * event) override |
| void | **[keyPressEvent](/docs/classes/classQskDialogWindow/#function-keypressevent)**(QKeyEvent * event) override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[finished](/docs/classes/classQskDialogWindow/#signal-finished)**(QskDialog::DialogCode result) |
| void | **[accepted](/docs/classes/classQskDialogWindow/#signal-accepted)**() |
| void | **[rejected](/docs/classes/classQskDialogWindow/#signal-rejected)**() |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[accept](/docs/classes/classQskDialogWindow/#slot-accept)**() |
| void | **[reject](/docs/classes/classQskDialogWindow/#slot-reject)**() |
| virtual void | **[done](/docs/classes/classQskDialogWindow/#slot-done)**(QskDialog::DialogCode result) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QskDialog::Actions | **[dialogActions](/docs/classes/classQskDialogWindow/#property-dialogactions)**  |

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


## Public Property Documentation

### property dialogActions

```cpp
QskDialog::Actions dialogActions;
```


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET