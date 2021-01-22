---
title: QskLayoutEngine2D
layout: docs

---


**Module:** **[Layouts](/docs/modules/group___layouts/)**



Inherited by [QskGridLayoutEngine](/docs/classes/class_qsk_grid_layout_engine/), [QskLinearLayoutEngine](/docs/classes/class_qsk_linear_layout_engine/)

## Protected Types

|                | Name           |
| -------------- | -------------- |
| enum| **[@13](/docs/classes/class_qsk_layout_engine2_d/#enum-@13)** { ElementCache = 1 << 0, LayoutCache = 1 << 1} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskLayoutEngine2D](/docs/classes/class_qsk_layout_engine2_d/#function-qsklayoutengine2d)**() |
| virtual | **[~QskLayoutEngine2D](/docs/classes/class_qsk_layout_engine2_d/#function-~qsklayoutengine2d)**() |
| virtual int | **[count](/docs/classes/class_qsk_layout_engine2_d/#function-count)**() const =0 |
| virtual QQuickItem * | **[itemAt](/docs/classes/class_qsk_layout_engine2_d/#function-itemat)**(int index) const =0 |
| int | **[indexOf](/docs/classes/class_qsk_layout_engine2_d/#function-indexof)**(const QQuickItem * item) const |
| int | **[rowCount](/docs/classes/class_qsk_layout_engine2_d/#function-rowcount)**() const |
| int | **[columnCount](/docs/classes/class_qsk_layout_engine2_d/#function-columncount)**() const |
| bool | **[setVisualDirection](/docs/classes/class_qsk_layout_engine2_d/#function-setvisualdirection)**(Qt::LayoutDirection direction) |
| Qt::LayoutDirection | **[visualDirection](/docs/classes/class_qsk_layout_engine2_d/#function-visualdirection)**() const |
| bool | **[setDefaultAlignment](/docs/classes/class_qsk_layout_engine2_d/#function-setdefaultalignment)**(Qt::Alignment alignment) |
| Qt::Alignment | **[defaultAlignment](/docs/classes/class_qsk_layout_engine2_d/#function-defaultalignment)**() const |
| bool | **[setExtraSpacingAt](/docs/classes/class_qsk_layout_engine2_d/#function-setextraspacingat)**(Qt::Edges edges) |
| Qt::Edges | **[extraSpacingAt](/docs/classes/class_qsk_layout_engine2_d/#function-extraspacingat)**() const |
| bool | **[setSpacing](/docs/classes/class_qsk_layout_engine2_d/#function-setspacing)**(qreal spacing, Qt::Orientations orientations) |
| qreal | **[spacing](/docs/classes/class_qsk_layout_engine2_d/#function-spacing)**(Qt::Orientation orientation) const |
| qreal | **[defaultSpacing](/docs/classes/class_qsk_layout_engine2_d/#function-defaultspacing)**(Qt::Orientation ) const |
| void | **[invalidate](/docs/classes/class_qsk_layout_engine2_d/#function-invalidate)**() |
| qreal | **[widthForHeight](/docs/classes/class_qsk_layout_engine2_d/#function-widthforheight)**(qreal height) const |
| qreal | **[heightForWidth](/docs/classes/class_qsk_layout_engine2_d/#function-heightforwidth)**(qreal width) const |
| QSizeF | **[sizeHint](/docs/classes/class_qsk_layout_engine2_d/#function-sizehint)**(Qt::SizeHint which, const QSizeF & constraint) const |
| void | **[setGeometries](/docs/classes/class_qsk_layout_engine2_d/#function-setgeometries)**(const QRectF & rect) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[layoutItem](/docs/classes/class_qsk_layout_engine2_d/#function-layoutitem)**(QQuickItem * item, const QRect & grid) const |
| QskLayoutHint | **[layoutHint](/docs/classes/class_qsk_layout_engine2_d/#function-layouthint)**(const QQuickItem * item, Qt::Orientation orientation, qreal constraint) const |
| void | **[invalidate](/docs/classes/class_qsk_layout_engine2_d/#function-invalidate)**(int what) |
| bool | **[requiresAdjustment](/docs/classes/class_qsk_layout_engine2_d/#function-requiresadjustment)**(const QQuickItem * item) const |

## Protected Types Documentation

### enum @13

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ElementCache | 1 << 0|   |
| LayoutCache | 1 << 1|   |




## Public Functions Documentation

### function QskLayoutEngine2D

```cpp
QskLayoutEngine2D()
```


### function ~QskLayoutEngine2D

```cpp
virtual ~QskLayoutEngine2D()
```


### function count

```cpp
virtual int count() const =0
```


### function itemAt

```cpp
virtual QQuickItem * itemAt(
    int index
) const =0
```


### function indexOf

```cpp
int indexOf(
    const QQuickItem * item
) const
```


### function rowCount

```cpp
inline int rowCount() const
```


### function columnCount

```cpp
inline int columnCount() const
```


### function setVisualDirection

```cpp
bool setVisualDirection(
    Qt::LayoutDirection direction
)
```


### function visualDirection

```cpp
Qt::LayoutDirection visualDirection() const
```


### function setDefaultAlignment

```cpp
bool setDefaultAlignment(
    Qt::Alignment alignment
)
```


### function defaultAlignment

```cpp
Qt::Alignment defaultAlignment() const
```


### function setExtraSpacingAt

```cpp
bool setExtraSpacingAt(
    Qt::Edges edges
)
```


### function extraSpacingAt

```cpp
Qt::Edges extraSpacingAt() const
```


### function setSpacing

```cpp
bool setSpacing(
    qreal spacing,
    Qt::Orientations orientations
)
```


### function spacing

```cpp
qreal spacing(
    Qt::Orientation orientation
) const
```


### function defaultSpacing

```cpp
qreal defaultSpacing(
    Qt::Orientation 
) const
```


### function invalidate

```cpp
inline void invalidate()
```


### function widthForHeight

```cpp
qreal widthForHeight(
    qreal height
) const
```


### function heightForWidth

```cpp
qreal heightForWidth(
    qreal width
) const
```


### function sizeHint

```cpp
QSizeF sizeHint(
    Qt::SizeHint which,
    const QSizeF & constraint
) const
```


### function setGeometries

```cpp
void setGeometries(
    const QRectF & rect
)
```


## Protected Functions Documentation

### function layoutItem

```cpp
void layoutItem(
    QQuickItem * item,
    const QRect & grid
) const
```


### function layoutHint

```cpp
QskLayoutHint layoutHint(
    const QQuickItem * item,
    Qt::Orientation orientation,
    qreal constraint
) const
```


### function invalidate

```cpp
void invalidate(
    int what
)
```


### function requiresAdjustment

```cpp
bool requiresAdjustment(
    const QQuickItem * item
) const
```


-------------------------------

Updated on 22 January 2021 at 17:05:49 CET