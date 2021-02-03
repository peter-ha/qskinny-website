---
title: QskDialogSubWindow
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group__Dialogs/)**



Inherits from QskSubWindow

Inherited by [QskMessageSubWindow](/docs/classes/classQskMessageSubWindow/), [QskSelectionSubWindow](/docs/classes/classQskSelectionSubWindow/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskDialogSubWindow](/docs/classes/classQskDialogSubWindow/#function-qskdialogsubwindow)**(QQuickItem * parent =nullptr) |
| | **[~QskDialogSubWindow](/docs/classes/classQskDialogSubWindow/#function-~qskdialogsubwindow)**() override |
| QskDialog::Actions | **[dialogActions](/docs/classes/classQskDialogSubWindow/#function-dialogactions)**() const |
| void | **[setDialogActions](/docs/classes/classQskDialogSubWindow/#function-setdialogactions)**(QskDialog::Actions actions) |
| void | **[addDialogAction](/docs/classes/classQskDialogSubWindow/#function-adddialogaction)**(QskDialog::Action action) |
| void | **[addDialogButton](/docs/classes/classQskDialogSubWindow/#function-adddialogbutton)**(QskPushButton * button, QskDialog::ActionRole actionRole) |
| Q_INVOKABLE QskDialog::Action | **[clickedAction](/docs/classes/classQskDialogSubWindow/#function-clickedaction)**() const |
| Q_INVOKABLE QskDialog::DialogCode | **[result](/docs/classes/classQskDialogSubWindow/#function-result)**() const |
| Q_INVOKABLE QskDialog::DialogCode | **[exec](/docs/classes/classQskDialogSubWindow/#function-exec)**() |
| void | **[setDefaultDialogAction](/docs/classes/classQskDialogSubWindow/#function-setdefaultdialogaction)**(QskDialog::Action action) |
| void | **[setDefaultButton](/docs/classes/classQskDialogSubWindow/#function-setdefaultbutton)**(QskPushButton * button) |
| QskPushButton * | **[defaultButton](/docs/classes/classQskDialogSubWindow/#function-defaultbutton)**() const |
| QskDialogButtonBox * | **[buttonBox](/docs/classes/classQskDialogSubWindow/#function-buttonbox)**() |
| const QskDialogButtonBox * | **[buttonBox](/docs/classes/classQskDialogSubWindow/#function-buttonbox)**() const |
| void | **[setContentItem](/docs/classes/classQskDialogSubWindow/#function-setcontentitem)**(QQuickItem * item) |
| QQuickItem * | **[contentItem](/docs/classes/classQskDialogSubWindow/#function-contentitem)**() const |
| void | **[setContentPadding](/docs/classes/classQskDialogSubWindow/#function-setcontentpadding)**(const QMarginsF & padding) |
| QMarginsF | **[contentPadding](/docs/classes/classQskDialogSubWindow/#function-contentpadding)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setResult](/docs/classes/classQskDialogSubWindow/#function-setresult)**(QskDialog::DialogCode result) |
| void | **[keyPressEvent](/docs/classes/classQskDialogSubWindow/#function-keypressevent)**(QKeyEvent * event) override |
| void | **[updateLayout](/docs/classes/classQskDialogSubWindow/#function-updatelayout)**() override |
| void | **[aboutToShow](/docs/classes/classQskDialogSubWindow/#function-abouttoshow)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/classQskDialogSubWindow/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |
| virtual QskDialogButtonBox * | **[createButtonBox](/docs/classes/classQskDialogSubWindow/#function-createbuttonbox)**() |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[finished](/docs/classes/classQskDialogSubWindow/#signal-finished)**(QskDialog::DialogCode ) |
| void | **[accepted](/docs/classes/classQskDialogSubWindow/#signal-accepted)**() |
| void | **[rejected](/docs/classes/classQskDialogSubWindow/#signal-rejected)**() |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[accept](/docs/classes/classQskDialogSubWindow/#slot-accept)**() |
| void | **[reject](/docs/classes/classQskDialogSubWindow/#slot-reject)**() |
| virtual void | **[done](/docs/classes/classQskDialogSubWindow/#slot-done)**(QskDialog::DialogCode result) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QskDialog::Actions | **[dialogActions](/docs/classes/classQskDialogSubWindow/#property-dialogactions)**  |

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