---
title: QskDialogSubWindow
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group___dialogs/)**



Inherits from QskSubWindow

Inherited by [QskMessageSubWindow](/docs/classes/class_qsk_message_sub_window/), [QskSelectionSubWindow](/docs/classes/class_qsk_selection_sub_window/)

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[accept](/docs/classes/class_qsk_dialog_sub_window/#slot-accept)**() |
| void | **[reject](/docs/classes/class_qsk_dialog_sub_window/#slot-reject)**() |
| virtual void | **[done](/docs/classes/class_qsk_dialog_sub_window/#slot-done)**(QskDialog::DialogCode result) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[finished](/docs/classes/class_qsk_dialog_sub_window/#signal-finished)**(QskDialog::DialogCode ) |
| void | **[accepted](/docs/classes/class_qsk_dialog_sub_window/#signal-accepted)**() |
| void | **[rejected](/docs/classes/class_qsk_dialog_sub_window/#signal-rejected)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskDialogSubWindow](/docs/classes/class_qsk_dialog_sub_window/#function-qskdialogsubwindow)**(QQuickItem * parent =nullptr) |
| | **[~QskDialogSubWindow](/docs/classes/class_qsk_dialog_sub_window/#function-~qskdialogsubwindow)**() override |
| QskDialog::Actions | **[dialogActions](/docs/classes/class_qsk_dialog_sub_window/#function-dialogactions)**() const |
| void | **[setDialogActions](/docs/classes/class_qsk_dialog_sub_window/#function-setdialogactions)**(QskDialog::Actions actions) |
| void | **[addDialogAction](/docs/classes/class_qsk_dialog_sub_window/#function-adddialogaction)**(QskDialog::Action action) |
| void | **[addDialogButton](/docs/classes/class_qsk_dialog_sub_window/#function-adddialogbutton)**(QskPushButton * button, QskDialog::ActionRole actionRole) |
| Q_INVOKABLE QskDialog::Action | **[clickedAction](/docs/classes/class_qsk_dialog_sub_window/#function-clickedaction)**() const |
| Q_INVOKABLE QskDialog::DialogCode | **[result](/docs/classes/class_qsk_dialog_sub_window/#function-result)**() const |
| Q_INVOKABLE QskDialog::DialogCode | **[exec](/docs/classes/class_qsk_dialog_sub_window/#function-exec)**() |
| void | **[setDefaultDialogAction](/docs/classes/class_qsk_dialog_sub_window/#function-setdefaultdialogaction)**(QskDialog::Action action) |
| void | **[setDefaultButton](/docs/classes/class_qsk_dialog_sub_window/#function-setdefaultbutton)**(QskPushButton * button) |
| QskPushButton * | **[defaultButton](/docs/classes/class_qsk_dialog_sub_window/#function-defaultbutton)**() const |
| QskDialogButtonBox * | **[buttonBox](/docs/classes/class_qsk_dialog_sub_window/#function-buttonbox)**() |
| const QskDialogButtonBox * | **[buttonBox](/docs/classes/class_qsk_dialog_sub_window/#function-buttonbox)**() const |
| void | **[setContentItem](/docs/classes/class_qsk_dialog_sub_window/#function-setcontentitem)**(QQuickItem * item) |
| QQuickItem * | **[contentItem](/docs/classes/class_qsk_dialog_sub_window/#function-contentitem)**() const |
| void | **[setContentPadding](/docs/classes/class_qsk_dialog_sub_window/#function-setcontentpadding)**(const QMarginsF & padding) |
| QMarginsF | **[contentPadding](/docs/classes/class_qsk_dialog_sub_window/#function-contentpadding)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setResult](/docs/classes/class_qsk_dialog_sub_window/#function-setresult)**(QskDialog::DialogCode result) |
| void | **[keyPressEvent](/docs/classes/class_qsk_dialog_sub_window/#function-keypressevent)**(QKeyEvent * event) override |
| void | **[updateLayout](/docs/classes/class_qsk_dialog_sub_window/#function-updatelayout)**() override |
| void | **[aboutToShow](/docs/classes/class_qsk_dialog_sub_window/#function-abouttoshow)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/class_qsk_dialog_sub_window/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |
| virtual QskDialogButtonBox * | **[createButtonBox](/docs/classes/class_qsk_dialog_sub_window/#function-createbuttonbox)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QskDialog::Actions | **[dialogActions](/docs/classes/class_qsk_dialog_sub_window/#property-dialogactions)**  |

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
    QskDialog::DialogCode 
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

### function QskDialogSubWindow

```cpp
QskDialogSubWindow(
    QQuickItem * parent =nullptr
)
```


### function ~QskDialogSubWindow

```cpp
~QskDialogSubWindow() override
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


### function addDialogAction

```cpp
void addDialogAction(
    QskDialog::Action action
)
```


### function addDialogButton

```cpp
void addDialogButton(
    QskPushButton * button,
    QskDialog::ActionRole actionRole
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


### function setContentItem

```cpp
void setContentItem(
    QQuickItem * item
)
```


### function contentItem

```cpp
QQuickItem * contentItem() const
```


### function setContentPadding

```cpp
void setContentPadding(
    const QMarginsF & padding
)
```


### function contentPadding

```cpp
QMarginsF contentPadding() const
```


## Protected Functions Documentation

### function setResult

```cpp
void setResult(
    QskDialog::DialogCode result
)
```


### function keyPressEvent

```cpp
void keyPressEvent(
    QKeyEvent * event
) override
```


### function updateLayout

```cpp
void updateLayout() override
```


### function aboutToShow

```cpp
void aboutToShow() override
```


### function layoutSizeHint

```cpp
QSizeF layoutSizeHint(
    Qt::SizeHint which,
    const QSizeF & constraint
) const override
```


### function createButtonBox

```cpp
virtual QskDialogButtonBox * createButtonBox()
```


## Public Property Documentation

### property dialogActions

```cpp
QskDialog::Actions dialogActions;
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET