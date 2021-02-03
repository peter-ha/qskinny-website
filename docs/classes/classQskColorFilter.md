---
title: QskColorFilter
layout: docs

---


**Module:** **[Graphic](/docs/modules/group__Graphic/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskColorFilter](/docs/classes/classQskColorFilter/#function-qskcolorfilter)**() =default |
| void | **[addColorSubstitution](/docs/classes/classQskColorFilter/#function-addcolorsubstitution)**(QRgb from, QRgb to) |
| void | **[addColorSubstitution](/docs/classes/classQskColorFilter/#function-addcolorsubstitution)**(Qt::GlobalColor from, QRgb to) |
| void | **[addColorSubstitution](/docs/classes/classQskColorFilter/#function-addcolorsubstitution)**(QRgb from, Qt::GlobalColor to) |
| void | **[addColorSubstitution](/docs/classes/classQskColorFilter/#function-addcolorsubstitution)**(Qt::GlobalColor from, Qt::GlobalColor to) |
| void | **[reset](/docs/classes/classQskColorFilter/#function-reset)**() |
| QPen | **[substituted](/docs/classes/classQskColorFilter/#function-substituted)**(const QPen & pen) const |
| QBrush | **[substituted](/docs/classes/classQskColorFilter/#function-substituted)**(const QBrush & brush) const |
| QColor | **[substituted](/docs/classes/classQskColorFilter/#function-substituted)**(const QColor & color) const |
| QRgb | **[substituted](/docs/classes/classQskColorFilter/#function-substituted)**(const QRgb & rgb) const |
| bool | **[isIdentity](/docs/classes/classQskColorFilter/#function-isidentity)**() const |
| bool | **[operator==](/docs/classes/classQskColorFilter/#function-operator==)**(const QskColorFilter & other) const |
| bool | **[operator!=](/docs/classes/classQskColorFilter/#function-operator!=)**(const QskColorFilter & other) const |
| const QVector< QPair< QRgb, QRgb > > & | **[substitutions](/docs/classes/classQskColorFilter/#function-substitutions)**() const |
| QskColorFilter | **[interpolated](/docs/classes/classQskColorFilter/#function-interpolated)**(const QskColorFilter & other, qreal value) const |
| QVariant | **[interpolate](/docs/classes/classQskColorFilter/#function-interpolate)**(const QskColorFilter & from, const QskColorFilter & to, qreal progress) |

## Public Functions Documentation

### function QskColorFilter

```cpp
QskColorFilter() =default
```


### function addColorSubstitution

```cpp
void addColorSubstitution(
    QRgb from,
    QRgb to
)
```


### function addColorSubstitution

```cpp
inline void addColorSubstitution(
    Qt::GlobalColor from,
    QRgb to
)
```


### function addColorSubstitution

```cpp
inline void addColorSubstitution(
    QRgb from,
    Qt::GlobalColor to
)
```


### function addColorSubstitution

```cpp
inline void addColorSubstitution(
    Qt::GlobalColor from,
    Qt::GlobalColor to
)
```


### function reset

```cpp
void reset()
```


### function substituted

```cpp
QPen substituted(
    const QPen & pen
) const
```


### function substituted

```cpp
QBrush substituted(
    const QBrush & brush
) const
```


### function substituted

```cpp
QColor substituted(
    const QColor & color
) const
```


### function substituted

```cpp
QRgb substituted(
    const QRgb & rgb
) const
```


### function isIdentity

```cpp
inline bool isIdentity() const
```


### function operator==

```cpp
inline bool operator==(
    const QskColorFilter & other
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const QskColorFilter & other
) const
```


### function substitutions

```cpp
inline const QVector< QPair< QRgb, QRgb > > & substitutions() const
```


### function interpolated

```cpp
QskColorFilter interpolated(
    const QskColorFilter & other,
    qreal value
) const
```


### function interpolate

```cpp
static QVariant interpolate(
    const QskColorFilter & from,
    const QskColorFilter & to,
    qreal progress
)
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET