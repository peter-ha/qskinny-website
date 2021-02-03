---
title: QskBoxBorderColors
layout: docs

---


**Module:** **[Themeing](/docs/modules/group__Themeing/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBoxBorderColors](/docs/classes/classQskBoxBorderColors/#function-qskboxbordercolors)**() |
| | **[QskBoxBorderColors](/docs/classes/classQskBoxBorderColors/#function-qskboxbordercolors)**(const QColor & left, const QColor & top, const QColor & right, const QColor & bottom) |
| | **[QskBoxBorderColors](/docs/classes/classQskBoxBorderColors/#function-qskboxbordercolors)**(Qt::GlobalColor color) |
| | **[QskBoxBorderColors](/docs/classes/classQskBoxBorderColors/#function-qskboxbordercolors)**(QRgb rgb) |
| | **[QskBoxBorderColors](/docs/classes/classQskBoxBorderColors/#function-qskboxbordercolors)**(const QColor & color) |
| | **[~QskBoxBorderColors](/docs/classes/classQskBoxBorderColors/#function-~qskboxbordercolors)**() |
| bool | **[operator==](/docs/classes/classQskBoxBorderColors/#function-operator==)**(const QskBoxBorderColors & other) const |
| bool | **[operator!=](/docs/classes/classQskBoxBorderColors/#function-operator!=)**(const QskBoxBorderColors & other) const |
| void | **[setAlpha](/docs/classes/classQskBoxBorderColors/#function-setalpha)**(int alpha) |
| void | **[setColors](/docs/classes/classQskBoxBorderColors/#function-setcolors)**(const QColor & color) |
| void | **[setColors](/docs/classes/classQskBoxBorderColors/#function-setcolors)**(const QColor & left, const QColor & top, const QColor & right, const QColor & bottom) |
| void | **[setColor](/docs/classes/classQskBoxBorderColors/#function-setcolor)**(Qsk::Position position, const QColor & color) |
| QColor | **[color](/docs/classes/classQskBoxBorderColors/#function-color)**(Qsk::Position position) const |
| void | **[setColorsAt](/docs/classes/classQskBoxBorderColors/#function-setcolorsat)**(Qt::Edges edges, const QColor & color) |
| QColor | **[colorAt](/docs/classes/classQskBoxBorderColors/#function-colorat)**(Qt::Edge edge) const |
| QRgb | **[rgb](/docs/classes/classQskBoxBorderColors/#function-rgb)**(Qsk::Position position) const |
| QskBoxBorderColors | **[interpolated](/docs/classes/classQskBoxBorderColors/#function-interpolated)**(const QskBoxBorderColors & to, qreal value) const |
| uint | **[hash](/docs/classes/classQskBoxBorderColors/#function-hash)**(uint seed =0) const |
| bool | **[isMonochrome](/docs/classes/classQskBoxBorderColors/#function-ismonochrome)**() const |
| bool | **[isVisible](/docs/classes/classQskBoxBorderColors/#function-isvisible)**() const |
| QVariant | **[interpolate](/docs/classes/classQskBoxBorderColors/#function-interpolate)**(const QskBoxBorderColors & from, const QskBoxBorderColors & to, qreal ratio) |

## Public Functions Documentation

### function QskBoxBorderColors

```cpp
QskBoxBorderColors()
```


### function QskBoxBorderColors

```cpp
QskBoxBorderColors(
    const QColor & left,
    const QColor & top,
    const QColor & right,
    const QColor & bottom
)
```


### function QskBoxBorderColors

```cpp
inline QskBoxBorderColors(
    Qt::GlobalColor color
)
```


### function QskBoxBorderColors

```cpp
inline QskBoxBorderColors(
    QRgb rgb
)
```


### function QskBoxBorderColors

```cpp
QskBoxBorderColors(
    const QColor & color
)
```


### function ~QskBoxBorderColors

```cpp
~QskBoxBorderColors()
```


### function operator==

```cpp
bool operator==(
    const QskBoxBorderColors & other
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const QskBoxBorderColors & other
) const
```


### function setAlpha

```cpp
void setAlpha(
    int alpha
)
```


### function setColors

```cpp
void setColors(
    const QColor & color
)
```


### function setColors

```cpp
void setColors(
    const QColor & left,
    const QColor & top,
    const QColor & right,
    const QColor & bottom
)
```


### function setColor

```cpp
void setColor(
    Qsk::Position position,
    const QColor & color
)
```


### function color

```cpp
inline QColor color(
    Qsk::Position position
) const
```


### function setColorsAt

```cpp
void setColorsAt(
    Qt::Edges edges,
    const QColor & color
)
```


### function colorAt

```cpp
QColor colorAt(
    Qt::Edge edge
) const
```


### function rgb

```cpp
inline QRgb rgb(
    Qsk::Position position
) const
```


### function interpolated

```cpp
QskBoxBorderColors interpolated(
    const QskBoxBorderColors & to,
    qreal value
) const
```


### function hash

```cpp
uint hash(
    uint seed =0
) const
```


### function isMonochrome

```cpp
bool isMonochrome() const
```


### function isVisible

```cpp
bool isVisible() const
```


### function interpolate

```cpp
static QVariant interpolate(
    const QskBoxBorderColors & from,
    const QskBoxBorderColors & to,
    qreal ratio
)
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET