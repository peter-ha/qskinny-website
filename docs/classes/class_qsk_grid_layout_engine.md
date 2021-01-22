---
title: QskGridLayoutEngine
layout: docs

---


**Module:** **[Layouts](/docs/modules/group___layouts/)**



Inherits from QskLayoutEngine2D

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGridLayoutEngine](/docs/classes/class_qsk_grid_layout_engine/#function-qskgridlayoutengine)**() |
| | **[~QskGridLayoutEngine](/docs/classes/class_qsk_grid_layout_engine/#function-~qskgridlayoutengine)**() override |
| int | **[count](/docs/classes/class_qsk_grid_layout_engine/#function-count)**() const override |
| bool | **[setStretchFactor](/docs/classes/class_qsk_grid_layout_engine/#function-setstretchfactor)**(int pos, int stretch, Qt::Orientation orientation) |
| int | **[stretchFactor](/docs/classes/class_qsk_grid_layout_engine/#function-stretchfactor)**(int pos, Qt::Orientation orientation) const |
| bool | **[setRowSizeHint](/docs/classes/class_qsk_grid_layout_engine/#function-setrowsizehint)**(int row, Qt::SizeHint which, qreal height) |
| qreal | **[rowSizeHint](/docs/classes/class_qsk_grid_layout_engine/#function-rowsizehint)**(int row, Qt::SizeHint which) const |
| bool | **[setColumnSizeHint](/docs/classes/class_qsk_grid_layout_engine/#function-setcolumnsizehint)**(int column, Qt::SizeHint which, qreal width) |
| qreal | **[columnSizeHint](/docs/classes/class_qsk_grid_layout_engine/#function-columnsizehint)**(int column, Qt::SizeHint which) const |
| int | **[insertItem](/docs/classes/class_qsk_grid_layout_engine/#function-insertitem)**(QQuickItem * item, const QRect & grid) |
| int | **[insertSpacer](/docs/classes/class_qsk_grid_layout_engine/#function-insertspacer)**(const QSizeF & spacing, const QRect & grid) |
| bool | **[removeAt](/docs/classes/class_qsk_grid_layout_engine/#function-removeat)**(int index) |
| bool | **[clear](/docs/classes/class_qsk_grid_layout_engine/#function-clear)**() |
| QQuickItem * | **[itemAt](/docs/classes/class_qsk_grid_layout_engine/#function-itemat)**(int index) const override |
| QSizeF | **[spacerAt](/docs/classes/class_qsk_grid_layout_engine/#function-spacerat)**(int index) const |
| QQuickItem * | **[itemAt](/docs/classes/class_qsk_grid_layout_engine/#function-itemat)**(int row, int column) const |
| int | **[indexAt](/docs/classes/class_qsk_grid_layout_engine/#function-indexat)**(int row, int column) const |
| bool | **[setGridAt](/docs/classes/class_qsk_grid_layout_engine/#function-setgridat)**(int index, const QRect & grid) |
| QRect | **[gridAt](/docs/classes/class_qsk_grid_layout_engine/#function-gridat)**(int index) const |
| QRect | **[effectiveGridAt](/docs/classes/class_qsk_grid_layout_engine/#function-effectivegridat)**(int index) const |
| void | **[transpose](/docs/classes/class_qsk_grid_layout_engine/#function-transpose)**() |

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

Updated on 22 January 2021 at 17:05:48 CET