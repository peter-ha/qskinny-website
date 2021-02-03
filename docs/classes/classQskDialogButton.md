---
title: QskDialogButton
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group__Dialogs/)**



Inherits from QskPushButton

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskDialogButton/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[Text](/docs/classes/classQskDialogButton/#subcontrol-text)**  |
| const QskAspect::Subcontrol | **[Graphic](/docs/classes/classQskDialogButton/#subcontrol-graphic)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskDialogButton](/docs/classes/classQskDialogButton/#function-qskdialogbutton)**(QskDialog::Action action, QQuickItem * parent =nullptr) |
| | **[QskDialogButton](/docs/classes/classQskDialogButton/#function-qskdialogbutton)**(QQuickItem * parent =nullptr) |
| | **[~QskDialogButton](/docs/classes/classQskDialogButton/#function-~qskdialogbutton)**() override |
| void | **[setAction](/docs/classes/classQskDialogButton/#function-setaction)**(QskDialog::Action action) |
| QskDialog::Action | **[action](/docs/classes/classQskDialogButton/#function-action)**() const |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/classQskDialogButton/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/classQskDialogButton/#function-changeevent)**(QEvent * event) override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[actionChanged](/docs/classes/classQskDialogButton/#signal-actionchanged)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QskDialog::Action | **[action](/docs/classes/classQskDialogButton/#property-action)**  |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol Text




### subcontrol Graphic




## Public Functions Documentation

### function QskDialogButton

```cpp
QskDialogButton(
    QskDialog::Action action,
    QQuickItem * parent =nullptr
)
```


### function QskDialogButton

```cpp
QskDialogButton(
    QQuickItem * parent =nullptr
)
```


### function ~QskDialogButton

```cpp
~QskDialogButton() override
```


### function setAction

```cpp
void setAction(
    QskDialog::Action action
)
```


### function action

```cpp
QskDialog::Action action() const
```


### function effectiveSubcontrol

```cpp
QskAspect::Subcontrol effectiveSubcontrol(
    QskAspect::Subcontrol subControl
) const override
```


## Protected Functions Documentation

### function changeEvent

```cpp
void changeEvent(
    QEvent * event
) override
```


## Public Signals Documentation

### signal actionChanged

```cpp
void actionChanged()
```


## Public Property Documentation

### property action

```cpp
QskDialog::Action action;
```


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET