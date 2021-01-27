---
title: QskSelectionWindow
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group___dialogs/)**



Inherits from QskDialogWindow

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setInfoText](/docs/classes/class_qsk_selection_window/#slot-setinfotext)**(const QString & text) |
| void | **[setEntries](/docs/classes/class_qsk_selection_window/#slot-setentries)**(const QStringList & entries) |
| void | **[setSelectedRow](/docs/classes/class_qsk_selection_window/#slot-setselectedrow)**(int row) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[infoTextChanged](/docs/classes/class_qsk_selection_window/#signal-infotextchanged)**(const QString & ) |
| void | **[infoTextOptionsChanged](/docs/classes/class_qsk_selection_window/#signal-infotextoptionschanged)**(const QskTextOptions & ) |
| void | **[selectedRowChanged](/docs/classes/class_qsk_selection_window/#signal-selectedrowchanged)**(int ) |
| void | **[selectedEntryChanged](/docs/classes/class_qsk_selection_window/#signal-selectedentrychanged)**(const QString & ) |
| void | **[entriesChanged](/docs/classes/class_qsk_selection_window/#signal-entrieschanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSelectionWindow](/docs/classes/class_qsk_selection_window/#function-qskselectionwindow)**(QWindow * parent =nullptr) |
| | **[~QskSelectionWindow](/docs/classes/class_qsk_selection_window/#function-~qskselectionwindow)**() override |
| void | **[setInfoTextOptions](/docs/classes/class_qsk_selection_window/#function-setinfotextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[infoTextOptions](/docs/classes/class_qsk_selection_window/#function-infotextoptions)**() const |
| QString | **[infoText](/docs/classes/class_qsk_selection_window/#function-infotext)**() const |
| Q_INVOKABLE QStringList | **[entries](/docs/classes/class_qsk_selection_window/#function-entries)**() const |
| Q_INVOKABLE int | **[selectedRow](/docs/classes/class_qsk_selection_window/#function-selectedrow)**() const |
| Q_INVOKABLE QString | **[selectedEntry](/docs/classes/class_qsk_selection_window/#function-selectedentry)**() const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[infoText](/docs/classes/class_qsk_selection_window/#property-infotext)**  |
| QskTextOptions | **[infoTextOptions](/docs/classes/class_qsk_selection_window/#property-infotextoptions)**  |
| QStringList | **[entries](/docs/classes/class_qsk_selection_window/#property-entries)**  |
| int | **[selectedRow](/docs/classes/class_qsk_selection_window/#property-selectedrow)**  |

## Public Slots Documentation

### slot setInfoText

```cpp
void setInfoText(
    const QString & text
)
```


### slot setEntries

```cpp
void setEntries(
    const QStringList & entries
)
```


### slot setSelectedRow

```cpp
void setSelectedRow(
    int row
)
```


## Public Signals Documentation

### signal infoTextChanged

```cpp
void infoTextChanged(
    const QString & 
)
```


### signal infoTextOptionsChanged

```cpp
void infoTextOptionsChanged(
    const QskTextOptions & 
)
```


### signal selectedRowChanged

```cpp
void selectedRowChanged(
    int 
)
```


### signal selectedEntryChanged

```cpp
void selectedEntryChanged(
    const QString & 
)
```


### signal entriesChanged

```cpp
void entriesChanged()
```


## Public Functions Documentation

### function QskSelectionWindow

```cpp
QskSelectionWindow(
    QWindow * parent =nullptr
)
```


### function ~QskSelectionWindow

```cpp
~QskSelectionWindow() override
```


### function setInfoTextOptions

```cpp
void setInfoTextOptions(
    const QskTextOptions & options
)
```


### function infoTextOptions

```cpp
QskTextOptions infoTextOptions() const
```


### function infoText

```cpp
QString infoText() const
```


### function entries

```cpp
Q_INVOKABLE QStringList entries() const
```


### function selectedRow

```cpp
Q_INVOKABLE int selectedRow() const
```


### function selectedEntry

```cpp
Q_INVOKABLE QString selectedEntry() const
```


## Public Property Documentation

### property infoText

```cpp
QString infoText;
```


### property infoTextOptions

```cpp
QskTextOptions infoTextOptions;
```


### property entries

```cpp
QStringList entries;
```


### property selectedRow

```cpp
int selectedRow;
```


-------------------------------

Updated on 26 January 2021 at 09:44:53 CET