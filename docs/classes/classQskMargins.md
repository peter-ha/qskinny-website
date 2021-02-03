---
title: QskMargins
layout: docs

---


**Module:** **[Core](/docs/modules/group__Core/)**



Inherits from QMarginsF

## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskMargins](/docs/classes/classQskMargins/#function-qskmargins)**() =default |
| constexpr | **[QskMargins](/docs/classes/classQskMargins/#function-qskmargins)**(const QMarginsF & margins) |
| constexpr | **[QskMargins](/docs/classes/classQskMargins/#function-qskmargins)**(const QMargins & margins) |
| constexpr | **[QskMargins](/docs/classes/classQskMargins/#function-qskmargins)**(qreal left, qreal top, qreal right, qreal bottom) |
| constexpr | **[QskMargins](/docs/classes/classQskMargins/#function-qskmargins)**(qreal margin) |
| constexpr | **[QskMargins](/docs/classes/classQskMargins/#function-qskmargins)**(qreal horizontal, qreal vertical) |
| QskMargins | **[mirrored](/docs/classes/classQskMargins/#function-mirrored)**(Qt::Orientations orientations) const |
| constexpr QskMargins | **[rotated](/docs/classes/classQskMargins/#function-rotated)**() const |
| constexpr QskMargins | **[translated](/docs/classes/classQskMargins/#function-translated)**(qreal dx, qreal dy) const |
| constexpr QskMargins | **[grownBy](/docs/classes/classQskMargins/#function-grownby)**(qreal dx, qreal dy) const |
| constexpr QskMargins | **[shrunkBy](/docs/classes/classQskMargins/#function-shrunkby)**(qreal dx, qreal dy) const |
| constexpr QskMargins | **[expandedTo](/docs/classes/classQskMargins/#function-expandedto)**(const QskMargins & other) const |
| constexpr QskMargins | **[boundedTo](/docs/classes/classQskMargins/#function-boundedto)**(const QskMargins & other) const |
| void | **[setMargins](/docs/classes/classQskMargins/#function-setmargins)**(qreal margin) |
| void | **[setMargins](/docs/classes/classQskMargins/#function-setmargins)**(qreal horizontal, qreal vertical) |
| void | **[setMarginsAt](/docs/classes/classQskMargins/#function-setmarginsat)**(Qt::Edges edges, qreal value) |
| qreal | **[marginAt](/docs/classes/classQskMargins/#function-marginat)**(Qt::Edge edge) const |
| constexpr qreal | **[width](/docs/classes/classQskMargins/#function-width)**() const |
| constexpr qreal | **[height](/docs/classes/classQskMargins/#function-height)**() const |
| constexpr qreal | **[extent](/docs/classes/classQskMargins/#function-extent)**(Qt::Orientation orientation) const |
| QskMargins | **[interpolated](/docs/classes/classQskMargins/#function-interpolated)**(const QskMargins & to, qreal progress) const |
| constexpr bool | **[isExpanding](/docs/classes/classQskMargins/#function-isexpanding)**() const |
| QVariant | **[interpolate](/docs/classes/classQskMargins/#function-interpolate)**(const QskMargins & m1, const QskMargins & m2, qreal progress) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[left](/docs/classes/classQskMargins/#property-left)**  |
| qreal | **[top](/docs/classes/classQskMargins/#property-top)**  |
| qreal | **[right](/docs/classes/classQskMargins/#property-right)**  |
| qreal | **[bottom](/docs/classes/classQskMargins/#property-bottom)**  |

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

Updated on  3 February 2021 at 15:05:46 CET