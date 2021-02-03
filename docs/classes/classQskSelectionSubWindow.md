---
title: QskSelectionSubWindow
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group__Dialogs/)**



Inherits from QskDialogSubWindow

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSelectionSubWindow](/docs/classes/classQskSelectionSubWindow/#function-qskselectionsubwindow)**(QQuickItem * parent =nullptr) |
| | **[~QskSelectionSubWindow](/docs/classes/classQskSelectionSubWindow/#function-~qskselectionsubwindow)**() override |
| void | **[setInfoTextOptions](/docs/classes/classQskSelectionSubWindow/#function-setinfotextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[infoTextOptions](/docs/classes/classQskSelectionSubWindow/#function-infotextoptions)**() const |
| QString | **[infoText](/docs/classes/classQskSelectionSubWindow/#function-infotext)**() const |
| Q_INVOKABLE QStringList | **[entries](/docs/classes/classQskSelectionSubWindow/#function-entries)**() const |
| Q_INVOKABLE int | **[selectedRow](/docs/classes/classQskSelectionSubWindow/#function-selectedrow)**() const |
| Q_INVOKABLE QString | **[selectedEntry](/docs/classes/classQskSelectionSubWindow/#function-selectedentry)**() const |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[infoTextChanged](/docs/classes/classQskSelectionSubWindow/#signal-infotextchanged)**(const QString & ) |
| void | **[infoTextOptionsChanged](/docs/classes/classQskSelectionSubWindow/#signal-infotextoptionschanged)**(const QskTextOptions & ) |
| void | **[selectedRowChanged](/docs/classes/classQskSelectionSubWindow/#signal-selectedrowchanged)**(int ) |
| void | **[selectedEntryChanged](/docs/classes/classQskSelectionSubWindow/#signal-selectedentrychanged)**(const QString & ) |
| void | **[entriesChanged](/docs/classes/classQskSelectionSubWindow/#signal-entrieschanged)**() |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setInfoText](/docs/classes/classQskSelectionSubWindow/#slot-setinfotext)**(const QString & text) |
| void | **[setEntries](/docs/classes/classQskSelectionSubWindow/#slot-setentries)**(const QStringList & entries) |
| void | **[setSelectedRow](/docs/classes/classQskSelectionSubWindow/#slot-setselectedrow)**(int row) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[infoText](/docs/classes/classQskSelectionSubWindow/#property-infotext)**  |
| QskTextOptions | **[infoTextOptions](/docs/classes/classQskSelectionSubWindow/#property-infotextoptions)**  |
| QStringList | **[entries](/docs/classes/classQskSelectionSubWindow/#property-entries)**  |
| int | **[selectedRow](/docs/classes/classQskSelectionSubWindow/#property-selectedrow)**  |

## Public Functions Documentation

### function QskSelectionSubWindow

```cpp
QskSelectionSubWindow(
    QQuickItem * parent =nullptr
)
```


### function ~QskSelectionSubWindow

```cpp
~QskSelectionSubWindow() override
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

Updated on  3 February 2021 at 15:05:43 CET