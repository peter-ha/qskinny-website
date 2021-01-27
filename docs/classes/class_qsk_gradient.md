---
title: QskGradient
layout: docs

---


**Module:** **[Core](/docs/modules/group___core/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Orientation](/docs/classes/class_qsk_gradient/#enum-orientation)** { Horizontal, Vertical, Diagonal} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGradient](/docs/classes/class_qsk_gradient/#function-qskgradient)**() |
| | **[QskGradient](/docs/classes/class_qsk_gradient/#function-qskgradient)**(Qt::GlobalColor color) |
| | **[QskGradient](/docs/classes/class_qsk_gradient/#function-qskgradient)**(QRgb rgb) |
| | **[QskGradient](/docs/classes/class_qsk_gradient/#function-qskgradient)**(const QColor & color) |
| | **[QskGradient](/docs/classes/class_qsk_gradient/#function-qskgradient)**(Qt::Orientation orientation, const QVector< QskGradientStop > & stops) |
| | **[QskGradient](/docs/classes/class_qsk_gradient/#function-qskgradient)**(Qt::Orientation orientation, const QColor & startColor, const QColor & stopColor) |
| | **[QskGradient](/docs/classes/class_qsk_gradient/#function-qskgradient)**(Orientation orientation, const QVector< QskGradientStop > & stops) |
| | **[QskGradient](/docs/classes/class_qsk_gradient/#function-qskgradient)**(Orientation orientation, const QColor & startColor, const QColor & stopColor) |
| | **[~QskGradient](/docs/classes/class_qsk_gradient/#function-~qskgradient)**() |
| void | **[setOrientation](/docs/classes/class_qsk_gradient/#function-setorientation)**(Qt::Orientation orientation) |
| void | **[setOrientation](/docs/classes/class_qsk_gradient/#function-setorientation)**(Orientation orientation) |
| Orientation | **[orientation](/docs/classes/class_qsk_gradient/#function-orientation)**() const |
| bool | **[isValid](/docs/classes/class_qsk_gradient/#function-isvalid)**() const |
| Q_INVOKABLE void | **[invalidate](/docs/classes/class_qsk_gradient/#function-invalidate)**() |
| bool | **[operator==](/docs/classes/class_qsk_gradient/#function-operator==)**(const QskGradient & other) const |
| bool | **[operator!=](/docs/classes/class_qsk_gradient/#function-operator!=)**(const QskGradient & other) const |
| void | **[setColor](/docs/classes/class_qsk_gradient/#function-setcolor)**(const QColor & color) |
| void | **[setColors](/docs/classes/class_qsk_gradient/#function-setcolors)**(const QColor & startColor, const QColor & stopColor) |
| Q_INVOKABLE QColor | **[startColor](/docs/classes/class_qsk_gradient/#function-startcolor)**() const |
| Q_INVOKABLE QColor | **[endColor](/docs/classes/class_qsk_gradient/#function-endcolor)**() const |
| Q_INVOKABLE void | **[setStops](/docs/classes/class_qsk_gradient/#function-setstops)**(const QVector< QskGradientStop > & stops) |
| Q_INVOKABLE QVector< QskGradientStop > | **[stops](/docs/classes/class_qsk_gradient/#function-stops)**() const |
| Q_INVOKABLE bool | **[hasStopAt](/docs/classes/class_qsk_gradient/#function-hasstopat)**(qreal value) const |
| void | **[setAlpha](/docs/classes/class_qsk_gradient/#function-setalpha)**(int alpha) |
| bool | **[isMonochrome](/docs/classes/class_qsk_gradient/#function-ismonochrome)**() const |
| bool | **[isVisible](/docs/classes/class_qsk_gradient/#function-isvisible)**() const |
| void | **[reverse](/docs/classes/class_qsk_gradient/#function-reverse)**() |
| QskGradient | **[reversed](/docs/classes/class_qsk_gradient/#function-reversed)**() const |
| QskGradient | **[extracted](/docs/classes/class_qsk_gradient/#function-extracted)**(qreal from, qreal start) const |
| QskGradient | **[interpolated](/docs/classes/class_qsk_gradient/#function-interpolated)**(const QskGradient & to, qreal value) const |
| uint | **[hash](/docs/classes/class_qsk_gradient/#function-hash)**(uint seed) const |
| Q_INVOKABLE qreal | **[stopAt](/docs/classes/class_qsk_gradient/#function-stopat)**(int index) const |
| Q_INVOKABLE QColor | **[colorAt](/docs/classes/class_qsk_gradient/#function-colorat)**(int index) const |
| QVariant | **[interpolate](/docs/classes/class_qsk_gradient/#function-interpolate)**(const QskGradient & from, const QskGradient & to, qreal progress) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Orientation | **[orientation](/docs/classes/class_qsk_gradient/#property-orientation)**  |
| QVector< QskGradientStop > | **[stops](/docs/classes/class_qsk_gradient/#property-stops)**  |
| bool | **[valid](/docs/classes/class_qsk_gradient/#property-valid)**  |
| bool | **[visible](/docs/classes/class_qsk_gradient/#property-visible)**  |
| bool | **[monochrome](/docs/classes/class_qsk_gradient/#property-monochrome)**  |

## Public Types Documentation

### enum Orientation

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Horizontal | |   |
| Vertical | |   |
| Diagonal | |   |




## Public Functions Documentation

### function QskGradient

```cpp
QskGradient()
```


### function QskGradient

```cpp
inline QskGradient(
    Qt::GlobalColor color
)
```


### function QskGradient

```cpp
inline QskGradient(
    QRgb rgb
)
```


### function QskGradient

```cpp
QskGradient(
    const QColor & color
)
```


### function QskGradient

```cpp
QskGradient(
    Qt::Orientation orientation,
    const QVector< QskGradientStop > & stops
)
```


### function QskGradient

```cpp
QskGradient(
    Qt::Orientation orientation,
    const QColor & startColor,
    const QColor & stopColor
)
```


### function QskGradient

```cpp
QskGradient(
    Orientation orientation,
    const QVector< QskGradientStop > & stops
)
```


### function QskGradient

```cpp
QskGradient(
    Orientation orientation,
    const QColor & startColor,
    const QColor & stopColor
)
```


### function ~QskGradient

```cpp
~QskGradient()
```


### function setOrientation

```cpp
void setOrientation(
    Qt::Orientation orientation
)
```


### function setOrientation

```cpp
void setOrientation(
    Orientation orientation
)
```


### function orientation

```cpp
Orientation orientation() const
```


### function isValid

```cpp
bool isValid() const
```


### function invalidate

```cpp
Q_INVOKABLE void invalidate()
```


### function operator==

```cpp
inline bool operator==(
    const QskGradient & other
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const QskGradient & other
) const
```


### function setColor

```cpp
void setColor(
    const QColor & color
)
```


### function setColors

```cpp
void setColors(
    const QColor & startColor,
    const QColor & stopColor
)
```


### function startColor

```cpp
inline Q_INVOKABLE QColor startColor() const
```


### function endColor

```cpp
inline Q_INVOKABLE QColor endColor() const
```


### function setStops

```cpp
Q_INVOKABLE void setStops(
    const QVector< QskGradientStop > & stops
)
```


### function stops

```cpp
Q_INVOKABLE QVector< QskGradientStop > stops() const
```


### function hasStopAt

```cpp
Q_INVOKABLE bool hasStopAt(
    qreal value
) const
```


### function setAlpha

```cpp
void setAlpha(
    int alpha
)
```


### function isMonochrome

```cpp
bool isMonochrome() const
```


### function isVisible

```cpp
bool isVisible() const
```


### function reverse

```cpp
void reverse()
```


### function reversed

```cpp
QskGradient reversed() const
```


### function extracted

```cpp
QskGradient extracted(
    qreal from,
    qreal start
) const
```


### function interpolated

```cpp
QskGradient interpolated(
    const QskGradient & to,
    qreal value
) const
```


### function hash

```cpp
uint hash(
    uint seed
) const
```


### function stopAt

```cpp
Q_INVOKABLE qreal stopAt(
    int index
) const
```


### function colorAt

```cpp
Q_INVOKABLE QColor colorAt(
    int index
) const
```


### function interpolate

```cpp
static QVariant interpolate(
    const QskGradient & from,
    const QskGradient & to,
    qreal progress
)
```


## Public Property Documentation

### property orientation

```cpp
Orientation orientation;
```


### property stops

```cpp
QVector< QskGradientStop > stops;
```


### property valid

```cpp
bool valid;
```


### property visible

```cpp
bool visible;
```


### property monochrome

```cpp
bool monochrome;
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET