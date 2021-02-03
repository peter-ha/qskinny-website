---
title: QskDialogButtonBox
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group__Dialogs/)**



Inherits from QskBox

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskDialogButtonBox/#subcontrol-panel)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskDialogButtonBox](/docs/classes/classQskDialogButtonBox/#function-qskdialogbuttonbox)**(QQuickItem * parent =nullptr) |
| | **[QskDialogButtonBox](/docs/classes/classQskDialogButtonBox/#function-qskdialogbuttonbox)**(Qt::Orientation orientation, QQuickItem * parent =nullptr) |
| | **[~QskDialogButtonBox](/docs/classes/classQskDialogButtonBox/#function-~qskdialogbuttonbox)**() override |
| void | **[setOrientation](/docs/classes/classQskDialogButtonBox/#function-setorientation)**(Qt::Orientation orientation) |
| Qt::Orientation | **[orientation](/docs/classes/classQskDialogButtonBox/#function-orientation)**() const |
| void | **[setCenteredButtons](/docs/classes/classQskDialogButtonBox/#function-setcenteredbuttons)**(bool center) |
| bool | **[centeredButtons](/docs/classes/classQskDialogButtonBox/#function-centeredbuttons)**() const |
| void | **[addButton](/docs/classes/classQskDialogButtonBox/#function-addbutton)**(QskPushButton * button, QskDialog::ActionRole role) |
| void | **[removeButton](/docs/classes/classQskDialogButtonBox/#function-removebutton)**(QskPushButton * button) |
| void | **[clear](/docs/classes/classQskDialogButtonBox/#function-clear)**() |
| QVector< QskPushButton * > | **[buttons](/docs/classes/classQskDialogButtonBox/#function-buttons)**() const |
| QVector< QskPushButton * > | **[buttons](/docs/classes/classQskDialogButtonBox/#function-buttons)**(QskDialog::ActionRole role) const |
| QskDialog::ActionRole | **[actionRole](/docs/classes/classQskDialogButtonBox/#function-actionrole)**(const QskPushButton * button) const |
| void | **[addAction](/docs/classes/classQskDialogButtonBox/#function-addaction)**(QskDialog::Action action) |
| void | **[setActions](/docs/classes/classQskDialogButtonBox/#function-setactions)**(QskDialog::Actions actions) |
| QskDialog::Actions | **[actions](/docs/classes/classQskDialogButtonBox/#function-actions)**() const |
| QskDialog::Action | **[action](/docs/classes/classQskDialogButtonBox/#function-action)**(const QskPushButton * button) const |
| QskPushButton * | **[button](/docs/classes/classQskDialogButtonBox/#function-button)**(QskDialog::Action action) const |
| QskDialog::Action | **[clickedAction](/docs/classes/classQskDialogButtonBox/#function-clickedaction)**() const |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/classQskDialogButtonBox/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |
| void | **[setDefaultButton](/docs/classes/classQskDialogButtonBox/#function-setdefaultbutton)**(QskPushButton * button) |
| QskPushButton * | **[defaultButton](/docs/classes/classQskDialogButtonBox/#function-defaultbutton)**() const |
| bool | **[isDefaultButtonKeyEvent](/docs/classes/classQskDialogButtonBox/#function-isdefaultbuttonkeyevent)**(const QKeyEvent * event) |
| QString | **[buttonText](/docs/classes/classQskDialogButtonBox/#function-buttontext)**(QskDialog::Action action) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/classQskDialogButtonBox/#function-event)**(QEvent * event) override |
| void | **[updateLayout](/docs/classes/classQskDialogButtonBox/#function-updatelayout)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/classQskDialogButtonBox/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |
| virtual QskPushButton * | **[createButton](/docs/classes/classQskDialogButtonBox/#function-createbutton)**(QskDialog::Action action) const |
| void | **[invalidateLayout](/docs/classes/classQskDialogButtonBox/#function-invalidatelayout)**() |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[clicked](/docs/classes/classQskDialogButtonBox/#signal-clicked)**(QskPushButton * button) |
| void | **[accepted](/docs/classes/classQskDialogButtonBox/#signal-accepted)**() |
| void | **[rejected](/docs/classes/classQskDialogButtonBox/#signal-rejected)**() |
| void | **[centeredButtonsChanged](/docs/classes/classQskDialogButtonBox/#signal-centeredbuttonschanged)**() |
| void | **[orientationChanged](/docs/classes/classQskDialogButtonBox/#signal-orientationchanged)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qt::Orientation | **[orientation](/docs/classes/classQskDialogButtonBox/#property-orientation)**  |
| bool | **[centeredButtons](/docs/classes/classQskDialogButtonBox/#property-centeredbuttons)**  |

## Public Subcontrols Documentation

### subcontrol Panel




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

Updated on  3 February 2021 at 15:05:43 CET