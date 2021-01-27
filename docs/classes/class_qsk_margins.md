---
title: QskMargins
layout: docs

---


**Module:** **[Core](/docs/modules/group___core/)**



Inherits from QMarginsF

## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskMargins](/docs/classes/class_qsk_margins/#function-qskmargins)**() =default |
| constexpr | **[QskMargins](/docs/classes/class_qsk_margins/#function-qskmargins)**(const QMarginsF & margins) |
| constexpr | **[QskMargins](/docs/classes/class_qsk_margins/#function-qskmargins)**(const QMargins & margins) |
| constexpr | **[QskMargins](/docs/classes/class_qsk_margins/#function-qskmargins)**(qreal left, qreal top, qreal right, qreal bottom) |
| constexpr | **[QskMargins](/docs/classes/class_qsk_margins/#function-qskmargins)**(qreal margin) |
| constexpr | **[QskMargins](/docs/classes/class_qsk_margins/#function-qskmargins)**(qreal horizontal, qreal vertical) |
| QskMargins | **[mirrored](/docs/classes/class_qsk_margins/#function-mirrored)**(Qt::Orientations orientations) const |
| constexpr QskMargins | **[rotated](/docs/classes/class_qsk_margins/#function-rotated)**() const |
| constexpr QskMargins | **[translated](/docs/classes/class_qsk_margins/#function-translated)**(qreal dx, qreal dy) const |
| constexpr QskMargins | **[grownBy](/docs/classes/class_qsk_margins/#function-grownby)**(qreal dx, qreal dy) const |
| constexpr QskMargins | **[shrunkBy](/docs/classes/class_qsk_margins/#function-shrunkby)**(qreal dx, qreal dy) const |
| constexpr QskMargins | **[expandedTo](/docs/classes/class_qsk_margins/#function-expandedto)**(const QskMargins & other) const |
| constexpr QskMargins | **[boundedTo](/docs/classes/class_qsk_margins/#function-boundedto)**(const QskMargins & other) const |
| void | **[setMargins](/docs/classes/class_qsk_margins/#function-setmargins)**(qreal margin) |
| void | **[setMargins](/docs/classes/class_qsk_margins/#function-setmargins)**(qreal horizontal, qreal vertical) |
| void | **[setMarginsAt](/docs/classes/class_qsk_margins/#function-setmarginsat)**(Qt::Edges edges, qreal value) |
| qreal | **[marginAt](/docs/classes/class_qsk_margins/#function-marginat)**(Qt::Edge edge) const |
| constexpr qreal | **[width](/docs/classes/class_qsk_margins/#function-width)**() const |
| constexpr qreal | **[height](/docs/classes/class_qsk_margins/#function-height)**() const |
| constexpr qreal | **[extent](/docs/classes/class_qsk_margins/#function-extent)**(Qt::Orientation orientation) const |
| QskMargins | **[interpolated](/docs/classes/class_qsk_margins/#function-interpolated)**(const QskMargins & to, qreal progress) const |
| constexpr bool | **[isExpanding](/docs/classes/class_qsk_margins/#function-isexpanding)**() const |
| QVariant | **[interpolate](/docs/classes/class_qsk_margins/#function-interpolate)**(const QskMargins & m1, const QskMargins & m2, qreal progress) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[left](/docs/classes/class_qsk_margins/#property-left)**  |
| qreal | **[top](/docs/classes/class_qsk_margins/#property-top)**  |
| qreal | **[right](/docs/classes/class_qsk_margins/#property-right)**  |
| qreal | **[bottom](/docs/classes/class_qsk_margins/#property-bottom)**  |

## Public Functions Documentation

### function QskMargins

```cpp
constexpr QskMargins() =default
```


### function QskMargins

```cpp
inline constexpr QskMargins(
    const QMarginsF & margins
)
```


### function QskMargins

```cpp
inline constexpr QskMargins(
    const QMargins & margins
)
```


### function QskMargins

```cpp
constexpr QskMargins(
    qreal left,
    qreal top,
    qreal right,
    qreal bottom
)
```


### function QskMargins

```cpp
inline constexpr QskMargins(
    qreal margin
)
```


### function QskMargins

```cpp
inline constexpr QskMargins(
    qreal horizontal,
    qreal vertical
)
```


### function mirrored

```cpp
inline QskMargins mirrored(
    Qt::Orientations orientations
) const
```


### function rotated

```cpp
inline constexpr QskMargins rotated() const
```


### function translated

```cpp
inline constexpr QskMargins translated(
    qreal dx,
    qreal dy
) const
```


### function grownBy

```cpp
inline constexpr QskMargins grownBy(
    qreal dx,
    qreal dy
) const
```


### function shrunkBy

```cpp
inline constexpr QskMargins shrunkBy(
    qreal dx,
    qreal dy
) const
```


### function expandedTo

```cpp
inline constexpr QskMargins expandedTo(
    const QskMargins & other
) const
```


### function boundedTo

```cpp
inline constexpr QskMargins boundedTo(
    const QskMargins & other
) const
```


### function setMargins

```cpp
inline void setMargins(
    qreal margin
)
```


### function setMargins

```cpp
inline void setMargins(
    qreal horizontal,
    qreal vertical
)
```


### function setMarginsAt

```cpp
void setMarginsAt(
    Qt::Edges edges,
    qreal value
)
```


### function marginAt

```cpp
qreal marginAt(
    Qt::Edge edge
) const
```


### function width

```cpp
inline constexpr qreal width() const
```


### function height

```cpp
inline constexpr qreal height() const
```


### function extent

```cpp
inline constexpr qreal extent(
    Qt::Orientation orientation
) const
```


### function interpolated

```cpp
QskMargins interpolated(
    const QskMargins & to,
    qreal progress
) const
```


### function isExpanding

```cpp
inline constexpr bool isExpanding() const
```


### function interpolate

```cpp
static QVariant interpolate(
    const QskMargins & m1,
    const QskMargins & m2,
    qreal progress
)
```


## Public Property Documentation

### property left

```cpp
qreal left;
```


### property top

```cpp
qreal top;
```


### property right

```cpp
qreal right;
```


### property bottom

```cpp
qreal bottom;
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET