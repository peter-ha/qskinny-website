---
title: QskSimpleListBox
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from QskListView

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setEntries](/docs/classes/class_qsk_simple_list_box/#slot-setentries)**(const QStringList & entries) |
| void | **[clear](/docs/classes/class_qsk_simple_list_box/#slot-clear)**() |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[entriesChanged](/docs/classes/class_qsk_simple_list_box/#signal-entrieschanged)**() |
| void | **[selectedEntryChanged](/docs/classes/class_qsk_simple_list_box/#signal-selectedentrychanged)**(const QString & ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSimpleListBox](/docs/classes/class_qsk_simple_list_box/#function-qsksimplelistbox)**(QQuickItem * parent =nullptr) |
| | **[~QskSimpleListBox](/docs/classes/class_qsk_simple_list_box/#function-~qsksimplelistbox)**() override |
| void | **[setColumnWidthHint](/docs/classes/class_qsk_simple_list_box/#function-setcolumnwidthhint)**(int column, qreal width) |
| qreal | **[columnWidthHint](/docs/classes/class_qsk_simple_list_box/#function-columnwidthhint)**(int column) const |
| void | **[insert](/docs/classes/class_qsk_simple_list_box/#function-insert)**(const QStringList & list, int index) |
| void | **[insert](/docs/classes/class_qsk_simple_list_box/#function-insert)**(const QString & text, int index) |
| void | **[append](/docs/classes/class_qsk_simple_list_box/#function-append)**(const QStringList & entries) |
| void | **[append](/docs/classes/class_qsk_simple_list_box/#function-append)**(const QString & entry) |
| void | **[removeAt](/docs/classes/class_qsk_simple_list_box/#function-removeat)**(int index) |
| void | **[removeBulk](/docs/classes/class_qsk_simple_list_box/#function-removebulk)**(int from, int to =-1) |
| int | **[rowCount](/docs/classes/class_qsk_simple_list_box/#function-rowcount)**() const override |
| int | **[columnCount](/docs/classes/class_qsk_simple_list_box/#function-columncount)**() const override |
| qreal | **[columnWidth](/docs/classes/class_qsk_simple_list_box/#function-columnwidth)**(int col) const override |
| qreal | **[rowHeight](/docs/classes/class_qsk_simple_list_box/#function-rowheight)**() const override |
| QString | **[entryAt](/docs/classes/class_qsk_simple_list_box/#function-entryat)**(int row) const |
| QString | **[selectedEntry](/docs/classes/class_qsk_simple_list_box/#function-selectedentry)**() const |
| QStringList | **[entries](/docs/classes/class_qsk_simple_list_box/#function-entries)**() const |
| QVariant | **[valueAt](/docs/classes/class_qsk_simple_list_box/#function-valueat)**(int row, int col) const override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QStringList | **[entries](/docs/classes/class_qsk_simple_list_box/#property-entries)**  |

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


## Public Property Documentation

### property entries

```cpp
QStringList entries;
```


-------------------------------

Updated on 22 January 2021 at 17:05:49 CET