---
title: QskSimpleListBox
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from QskListView

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSimpleListBox](/docs/classes/classQskSimpleListBox/#function-qsksimplelistbox)**(QQuickItem * parent =nullptr) |
| | **[~QskSimpleListBox](/docs/classes/classQskSimpleListBox/#function-~qsksimplelistbox)**() override |
| void | **[setColumnWidthHint](/docs/classes/classQskSimpleListBox/#function-setcolumnwidthhint)**(int column, qreal width) |
| qreal | **[columnWidthHint](/docs/classes/classQskSimpleListBox/#function-columnwidthhint)**(int column) const |
| void | **[insert](/docs/classes/classQskSimpleListBox/#function-insert)**(const QStringList & list, int index) |
| void | **[insert](/docs/classes/classQskSimpleListBox/#function-insert)**(const QString & text, int index) |
| void | **[append](/docs/classes/classQskSimpleListBox/#function-append)**(const QStringList & entries) |
| void | **[append](/docs/classes/classQskSimpleListBox/#function-append)**(const QString & entry) |
| void | **[removeAt](/docs/classes/classQskSimpleListBox/#function-removeat)**(int index) |
| void | **[removeBulk](/docs/classes/classQskSimpleListBox/#function-removebulk)**(int from, int to =-1) |
| int | **[rowCount](/docs/classes/classQskSimpleListBox/#function-rowcount)**() const override |
| int | **[columnCount](/docs/classes/classQskSimpleListBox/#function-columncount)**() const override |
| qreal | **[columnWidth](/docs/classes/classQskSimpleListBox/#function-columnwidth)**(int col) const override |
| qreal | **[rowHeight](/docs/classes/classQskSimpleListBox/#function-rowheight)**() const override |
| QString | **[entryAt](/docs/classes/classQskSimpleListBox/#function-entryat)**(int row) const |
| QString | **[selectedEntry](/docs/classes/classQskSimpleListBox/#function-selectedentry)**() const |
| QStringList | **[entries](/docs/classes/classQskSimpleListBox/#function-entries)**() const |
| QVariant | **[valueAt](/docs/classes/classQskSimpleListBox/#function-valueat)**(int row, int col) const override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[entriesChanged](/docs/classes/classQskSimpleListBox/#signal-entrieschanged)**() |
| void | **[selectedEntryChanged](/docs/classes/classQskSimpleListBox/#signal-selectedentrychanged)**(const QString & ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setEntries](/docs/classes/classQskSimpleListBox/#slot-setentries)**(const QStringList & entries) |
| void | **[clear](/docs/classes/classQskSimpleListBox/#slot-clear)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QStringList | **[entries](/docs/classes/classQskSimpleListBox/#property-entries)**  |

## Public Functions Documentation

### function QskSimpleListBox

```cpp
QskSimpleListBox(
    QQuickItem * parent =nullptr
)
```


### function ~QskSimpleListBox

```cpp
~QskSimpleListBox() override
```


### function setColumnWidthHint

```cpp
void setColumnWidthHint(
    int column,
    qreal width
)
```


### function columnWidthHint

```cpp
qreal columnWidthHint(
    int column
) const
```


### function insert

```cpp
void insert(
    const QStringList & list,
    int index
)
```


### function insert

```cpp
void insert(
    const QString & text,
    int index
)
```


### function append

```cpp
inline void append(
    const QStringList & entries
)
```


### function append

```cpp
inline void append(
    const QString & entry
)
```


### function removeAt

```cpp
void removeAt(
    int index
)
```


### function removeBulk

```cpp
void removeBulk(
    int from,
    int to =-1
)
```


### function rowCount

```cpp
int rowCount() const override
```


### function columnCount

```cpp
int columnCount() const override
```


### function columnWidth

```cpp
qreal columnWidth(
    int col
) const override
```


### function rowHeight

```cpp
qreal rowHeight() const override
```


### function entryAt

```cpp
QString entryAt(
    int row
) const
```


### function selectedEntry

```cpp
inline QString selectedEntry() const
```


### function entries

```cpp
QStringList entries() const
```


### function valueAt

```cpp
QVariant valueAt(
    int row,
    int col
) const override
```


## Public Signals Documentation

### signal entriesChanged

```cpp
void entriesChanged()
```


### signal selectedEntryChanged

```cpp
void selectedEntryChanged(
    const QString & 
)
```


## Public Slots Documentation

### slot setEntries

```cpp
void setEntries(
    const QStringList & entries
)
```


### slot clear

```cpp
void clear()
```


## Public Property Documentation

### property entries

```cpp
QStringList entries;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET