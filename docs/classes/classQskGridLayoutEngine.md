---
title: QskGridLayoutEngine
layout: docs

---


**Module:** **[Layouts](/docs/modules/group__Layouts/)**



Inherits from QskLayoutEngine2D

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGridLayoutEngine](/docs/classes/classQskGridLayoutEngine/#function-qskgridlayoutengine)**() |
| | **[~QskGridLayoutEngine](/docs/classes/classQskGridLayoutEngine/#function-~qskgridlayoutengine)**() override |
| int | **[count](/docs/classes/classQskGridLayoutEngine/#function-count)**() const override |
| bool | **[setStretchFactor](/docs/classes/classQskGridLayoutEngine/#function-setstretchfactor)**(int pos, int stretch, Qt::Orientation orientation) |
| int | **[stretchFactor](/docs/classes/classQskGridLayoutEngine/#function-stretchfactor)**(int pos, Qt::Orientation orientation) const |
| bool | **[setRowSizeHint](/docs/classes/classQskGridLayoutEngine/#function-setrowsizehint)**(int row, Qt::SizeHint which, qreal height) |
| qreal | **[rowSizeHint](/docs/classes/classQskGridLayoutEngine/#function-rowsizehint)**(int row, Qt::SizeHint which) const |
| bool | **[setColumnSizeHint](/docs/classes/classQskGridLayoutEngine/#function-setcolumnsizehint)**(int column, Qt::SizeHint which, qreal width) |
| qreal | **[columnSizeHint](/docs/classes/classQskGridLayoutEngine/#function-columnsizehint)**(int column, Qt::SizeHint which) const |
| int | **[insertItem](/docs/classes/classQskGridLayoutEngine/#function-insertitem)**(QQuickItem * item, const QRect & grid) |
| int | **[insertSpacer](/docs/classes/classQskGridLayoutEngine/#function-insertspacer)**(const QSizeF & spacing, const QRect & grid) |
| bool | **[removeAt](/docs/classes/classQskGridLayoutEngine/#function-removeat)**(int index) |
| bool | **[clear](/docs/classes/classQskGridLayoutEngine/#function-clear)**() |
| QQuickItem * | **[itemAt](/docs/classes/classQskGridLayoutEngine/#function-itemat)**(int index) const override |
| QSizeF | **[spacerAt](/docs/classes/classQskGridLayoutEngine/#function-spacerat)**(int index) const |
| QQuickItem * | **[itemAt](/docs/classes/classQskGridLayoutEngine/#function-itemat)**(int row, int column) const |
| int | **[indexAt](/docs/classes/classQskGridLayoutEngine/#function-indexat)**(int row, int column) const |
| bool | **[setGridAt](/docs/classes/classQskGridLayoutEngine/#function-setgridat)**(int index, const QRect & grid) |
| QRect | **[gridAt](/docs/classes/classQskGridLayoutEngine/#function-gridat)**(int index) const |
| QRect | **[effectiveGridAt](/docs/classes/classQskGridLayoutEngine/#function-effectivegridat)**(int index) const |
| void | **[transpose](/docs/classes/classQskGridLayoutEngine/#function-transpose)**() |

## Public Functions Documentation

### function QskGridLayoutEngine

```cpp
QskGridLayoutEngine()
```


### function ~QskGridLayoutEngine

```cpp
~QskGridLayoutEngine() override
```


### function count

```cpp
int count() const override
```


### function setStretchFactor

```cpp
bool setStretchFactor(
    int pos,
    int stretch,
    Qt::Orientation orientation
)
```


### function stretchFactor

```cpp
int stretchFactor(
    int pos,
    Qt::Orientation orientation
) const
```


### function setRowSizeHint

```cpp
bool setRowSizeHint(
    int row,
    Qt::SizeHint which,
    qreal height
)
```


### function rowSizeHint

```cpp
qreal rowSizeHint(
    int row,
    Qt::SizeHint which
) const
```


### function setColumnSizeHint

```cpp
bool setColumnSizeHint(
    int column,
    Qt::SizeHint which,
    qreal width
)
```


### function columnSizeHint

```cpp
qreal columnSizeHint(
    int column,
    Qt::SizeHint which
) const
```


### function insertItem

```cpp
int insertItem(
    QQuickItem * item,
    const QRect & grid
)
```


### function insertSpacer

```cpp
int insertSpacer(
    const QSizeF & spacing,
    const QRect & grid
)
```


### function removeAt

```cpp
bool removeAt(
    int index
)
```


### function clear

```cpp
bool clear()
```


### function itemAt

```cpp
QQuickItem * itemAt(
    int index
) const override
```


### function spacerAt

```cpp
QSizeF spacerAt(
    int index
) const
```


### function itemAt

```cpp
QQuickItem * itemAt(
    int row,
    int column
) const
```


### function indexAt

```cpp
int indexAt(
    int row,
    int column
) const
```


### function setGridAt

```cpp
bool setGridAt(
    int index,
    const QRect & grid
)
```


### function gridAt

```cpp
QRect gridAt(
    int index
) const
```


### function effectiveGridAt

```cpp
QRect effectiveGridAt(
    int index
) const
```


### function transpose

```cpp
void transpose()
```


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET