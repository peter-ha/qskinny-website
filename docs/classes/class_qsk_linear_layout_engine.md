---
title: QskLinearLayoutEngine
layout: docs

---


**Module:** **[Layouts](/docs/modules/group___layouts/)**



Inherits from QskLayoutEngine2D

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskLinearLayoutEngine](/docs/classes/class_qsk_linear_layout_engine/#function-qsklinearlayoutengine)**(Qt::Orientation orientation, uint dimension) |
| | **[~QskLinearLayoutEngine](/docs/classes/class_qsk_linear_layout_engine/#function-~qsklinearlayoutengine)**() override |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_linear_layout_engine/#function-orientation)**() const |
| bool | **[setOrientation](/docs/classes/class_qsk_linear_layout_engine/#function-setorientation)**(Qt::Orientation orientation) |
| bool | **[setDimension](/docs/classes/class_qsk_linear_layout_engine/#function-setdimension)**(uint dimension) |
| uint | **[dimension](/docs/classes/class_qsk_linear_layout_engine/#function-dimension)**() const |
| int | **[count](/docs/classes/class_qsk_linear_layout_engine/#function-count)**() const override |
| int | **[insertItem](/docs/classes/class_qsk_linear_layout_engine/#function-insertitem)**(QQuickItem * item, int index) |
| int | **[addItem](/docs/classes/class_qsk_linear_layout_engine/#function-additem)**(QQuickItem * item) |
| int | **[insertSpacerAt](/docs/classes/class_qsk_linear_layout_engine/#function-insertspacerat)**(int index, qreal spacing) |
| int | **[addSpacer](/docs/classes/class_qsk_linear_layout_engine/#function-addspacer)**(qreal spacing) |
| bool | **[removeAt](/docs/classes/class_qsk_linear_layout_engine/#function-removeat)**(int index) |
| bool | **[clear](/docs/classes/class_qsk_linear_layout_engine/#function-clear)**() |
| QQuickItem * | **[itemAt](/docs/classes/class_qsk_linear_layout_engine/#function-itemat)**(int index) const override |
| qreal | **[spacerAt](/docs/classes/class_qsk_linear_layout_engine/#function-spacerat)**(int index) const |
| bool | **[setStretchFactorAt](/docs/classes/class_qsk_linear_layout_engine/#function-setstretchfactorat)**(int index, int stretchFactor) |
| int | **[stretchFactorAt](/docs/classes/class_qsk_linear_layout_engine/#function-stretchfactorat)**(int index) const |

## Public Functions Documentation

### function QskLinearLayoutEngine

```cpp
QskLinearLayoutEngine(
    Qt::Orientation orientation,
    uint dimension
)
```


### function ~QskLinearLayoutEngine

```cpp
~QskLinearLayoutEngine() override
```


### function orientation

```cpp
Qt::Orientation orientation() const
```


### function setOrientation

```cpp
bool setOrientation(
    Qt::Orientation orientation
)
```


### function setDimension

```cpp
bool setDimension(
    uint dimension
)
```


### function dimension

```cpp
uint dimension() const
```


### function count

```cpp
int count() const override
```


### function insertItem

```cpp
int insertItem(
    QQuickItem * item,
    int index
)
```


### function addItem

```cpp
inline int addItem(
    QQuickItem * item
)
```


### function insertSpacerAt

```cpp
int insertSpacerAt(
    int index,
    qreal spacing
)
```


### function addSpacer

```cpp
inline int addSpacer(
    qreal spacing
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
qreal spacerAt(
    int index
) const
```


### function setStretchFactorAt

```cpp
bool setStretchFactorAt(
    int index,
    int stretchFactor
)
```


### function stretchFactorAt

```cpp
int stretchFactorAt(
    int index
) const
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET