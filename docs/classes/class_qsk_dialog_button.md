---
title: QskDialogButton
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group___dialogs/)**



Inherits from QskPushButton

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[actionChanged](/docs/classes/class_qsk_dialog_button/#signal-actionchanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskDialogButton](/docs/classes/class_qsk_dialog_button/#function-qskdialogbutton)**(QskDialog::Action action, QQuickItem * parent =nullptr) |
| | **[QskDialogButton](/docs/classes/class_qsk_dialog_button/#function-qskdialogbutton)**(QQuickItem * parent =nullptr) |
| | **[~QskDialogButton](/docs/classes/class_qsk_dialog_button/#function-~qskdialogbutton)**() override |
| void | **[setAction](/docs/classes/class_qsk_dialog_button/#function-setaction)**(QskDialog::Action action) |
| QskDialog::Action | **[action](/docs/classes/class_qsk_dialog_button/#function-action)**() const |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/class_qsk_dialog_button/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/class_qsk_dialog_button/#function-changeevent)**(QEvent * event) override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QskDialog::Action | **[action](/docs/classes/class_qsk_dialog_button/#property-action)**  |

## Public Signals Documentation

### signal actionChanged

```cpp
void actionChanged()
```


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


## Public Property Documentation

### property action

```cpp
QskDialog::Action action;
```


-------------------------------

Updated on 22 January 2021 at 17:05:48 CET