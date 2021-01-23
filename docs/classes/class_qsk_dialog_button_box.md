---
title: QskDialogButtonBox
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group___dialogs/)**



Inherits from QskBox

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[clicked](/docs/classes/class_qsk_dialog_button_box/#signal-clicked)**(QskPushButton * button) |
| void | **[accepted](/docs/classes/class_qsk_dialog_button_box/#signal-accepted)**() |
| void | **[rejected](/docs/classes/class_qsk_dialog_button_box/#signal-rejected)**() |
| void | **[centeredButtonsChanged](/docs/classes/class_qsk_dialog_button_box/#signal-centeredbuttonschanged)**() |
| void | **[orientationChanged](/docs/classes/class_qsk_dialog_button_box/#signal-orientationchanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskDialogButtonBox](/docs/classes/class_qsk_dialog_button_box/#function-qskdialogbuttonbox)**(QQuickItem * parent =nullptr) |
| | **[QskDialogButtonBox](/docs/classes/class_qsk_dialog_button_box/#function-qskdialogbuttonbox)**(Qt::Orientation orientation, QQuickItem * parent =nullptr) |
| | **[~QskDialogButtonBox](/docs/classes/class_qsk_dialog_button_box/#function-~qskdialogbuttonbox)**() override |
| void | **[setOrientation](/docs/classes/class_qsk_dialog_button_box/#function-setorientation)**(Qt::Orientation orientation) |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_dialog_button_box/#function-orientation)**() const |
| void | **[setCenteredButtons](/docs/classes/class_qsk_dialog_button_box/#function-setcenteredbuttons)**(bool center) |
| bool | **[centeredButtons](/docs/classes/class_qsk_dialog_button_box/#function-centeredbuttons)**() const |
| void | **[addButton](/docs/classes/class_qsk_dialog_button_box/#function-addbutton)**(QskPushButton * button, QskDialog::ActionRole role) |
| void | **[removeButton](/docs/classes/class_qsk_dialog_button_box/#function-removebutton)**(QskPushButton * button) |
| void | **[clear](/docs/classes/class_qsk_dialog_button_box/#function-clear)**() |
| QVector< QskPushButton * > | **[buttons](/docs/classes/class_qsk_dialog_button_box/#function-buttons)**() const |
| QVector< QskPushButton * > | **[buttons](/docs/classes/class_qsk_dialog_button_box/#function-buttons)**(QskDialog::ActionRole role) const |
| QskDialog::ActionRole | **[actionRole](/docs/classes/class_qsk_dialog_button_box/#function-actionrole)**(const QskPushButton * button) const |
| void | **[addAction](/docs/classes/class_qsk_dialog_button_box/#function-addaction)**(QskDialog::Action action) |
| void | **[setActions](/docs/classes/class_qsk_dialog_button_box/#function-setactions)**(QskDialog::Actions actions) |
| QskDialog::Actions | **[actions](/docs/classes/class_qsk_dialog_button_box/#function-actions)**() const |
| QskDialog::Action | **[action](/docs/classes/class_qsk_dialog_button_box/#function-action)**(const QskPushButton * button) const |
| QskPushButton * | **[button](/docs/classes/class_qsk_dialog_button_box/#function-button)**(QskDialog::Action action) const |
| QskDialog::Action | **[clickedAction](/docs/classes/class_qsk_dialog_button_box/#function-clickedaction)**() const |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/class_qsk_dialog_button_box/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |
| void | **[setDefaultButton](/docs/classes/class_qsk_dialog_button_box/#function-setdefaultbutton)**(QskPushButton * button) |
| QskPushButton * | **[defaultButton](/docs/classes/class_qsk_dialog_button_box/#function-defaultbutton)**() const |
| bool | **[isDefaultButtonKeyEvent](/docs/classes/class_qsk_dialog_button_box/#function-isdefaultbuttonkeyevent)**(const QKeyEvent * event) |
| QString | **[buttonText](/docs/classes/class_qsk_dialog_button_box/#function-buttontext)**(QskDialog::Action action) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/class_qsk_dialog_button_box/#function-event)**(QEvent * event) override |
| void | **[updateLayout](/docs/classes/class_qsk_dialog_button_box/#function-updatelayout)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/class_qsk_dialog_button_box/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |
| virtual QskPushButton * | **[createButton](/docs/classes/class_qsk_dialog_button_box/#function-createbutton)**(QskDialog::Action action) const |
| void | **[invalidateLayout](/docs/classes/class_qsk_dialog_button_box/#function-invalidatelayout)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_dialog_button_box/#property-orientation)**  |
| bool | **[centeredButtons](/docs/classes/class_qsk_dialog_button_box/#property-centeredbuttons)**  |

## Public Signals Documentation

### signal clicked

```cpp
void clicked(
    QskPushButton * button
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


### signal centeredButtonsChanged

```cpp
void centeredButtonsChanged()
```


### signal orientationChanged

```cpp
void orientationChanged()
```


## Public Functions Documentation

### function QskDialogButtonBox

```cpp
QskDialogButtonBox(
    QQuickItem * parent =nullptr
)
```


### function QskDialogButtonBox

```cpp
QskDialogButtonBox(
    Qt::Orientation orientation,
    QQuickItem * parent =nullptr
)
```


### function ~QskDialogButtonBox

```cpp
~QskDialogButtonBox() override
```


### function setOrientation

```cpp
void setOrientation(
    Qt::Orientation orientation
)
```


### function orientation

```cpp
Qt::Orientation orientation() const
```


### function setCenteredButtons

```cpp
void setCenteredButtons(
    bool center
)
```


### function centeredButtons

```cpp
bool centeredButtons() const
```


### function addButton

```cpp
void addButton(
    QskPushButton * button,
    QskDialog::ActionRole role
)
```


### function removeButton

```cpp
void removeButton(
    QskPushButton * button
)
```


### function clear

```cpp
void clear()
```


### function buttons

```cpp
QVector< QskPushButton * > buttons() const
```


### function buttons

```cpp
QVector< QskPushButton * > buttons(
    QskDialog::ActionRole role
) const
```


### function actionRole

```cpp
QskDialog::ActionRole actionRole(
    const QskPushButton * button
) const
```


### function addAction

```cpp
void addAction(
    QskDialog::Action action
)
```


### function setActions

```cpp
void setActions(
    QskDialog::Actions actions
)
```


### function actions

```cpp
QskDialog::Actions actions() const
```


### function action

```cpp
QskDialog::Action action(
    const QskPushButton * button
) const
```


### function button

```cpp
QskPushButton * button(
    QskDialog::Action action
) const
```


### function clickedAction

```cpp
QskDialog::Action clickedAction() const
```


### function effectiveSubcontrol

```cpp
QskAspect::Subcontrol effectiveSubcontrol(
    QskAspect::Subcontrol subControl
) const override
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


### function isDefaultButtonKeyEvent

```cpp
static bool isDefaultButtonKeyEvent(
    const QKeyEvent * event
)
```


### function buttonText

```cpp
static QString buttonText(
    QskDialog::Action action
)
```


## Protected Functions Documentation

### function event

```cpp
bool event(
    QEvent * event
) override
```


### function updateLayout

```cpp
void updateLayout() override
```


### function layoutSizeHint

```cpp
QSizeF layoutSizeHint(
    Qt::SizeHint which,
    const QSizeF & constraint
) const override
```


### function createButton

```cpp
virtual QskPushButton * createButton(
    QskDialog::Action action
) const
```


### function invalidateLayout

```cpp
void invalidateLayout()
```


## Public Property Documentation

### property orientation

```cpp
Qt::Orientation orientation;
```


### property centeredButtons

```cpp
bool centeredButtons;
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET