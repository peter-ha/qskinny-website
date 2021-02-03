---
title: QskGradientStop
layout: docs

---




## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGradientStop](/docs/classes/classQskGradientStop/#function-qskgradientstop)**() |
| | **[QskGradientStop](/docs/classes/classQskGradientStop/#function-qskgradientstop)**(qreal position, const QColor & color) |
| bool | **[operator==](/docs/classes/classQskGradientStop/#function-operator==)**(const QskGradientStop & other) const |
| bool | **[operator!=](/docs/classes/classQskGradientStop/#function-operator!=)**(const QskGradientStop & other) const |
| void | **[setStop](/docs/classes/classQskGradientStop/#function-setstop)**(qreal position, const QColor & color) |
| qreal | **[position](/docs/classes/classQskGradientStop/#function-position)**() const |
| void | **[setPosition](/docs/classes/classQskGradientStop/#function-setposition)**(qreal position) |
| void | **[resetPosition](/docs/classes/classQskGradientStop/#function-resetposition)**() |
| const QColor & | **[color](/docs/classes/classQskGradientStop/#function-color)**() const |
| void | **[setColor](/docs/classes/classQskGradientStop/#function-setcolor)**(const QColor & color) |
| void | **[resetColor](/docs/classes/classQskGradientStop/#function-resetcolor)**() |
| uint | **[hash](/docs/classes/classQskGradientStop/#function-hash)**(uint seed) const |
| QColor | **[interpolated](/docs/classes/classQskGradientStop/#function-interpolated)**(const QskGradientStop & s1, const QskGradientStop & s2, qreal position) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[position](/docs/classes/classQskGradientStop/#property-position)**  |
| QColor | **[color](/docs/classes/classQskGradientStop/#property-color)**  |

## Public Functions Documentation

### function QskGradientStop

```cpp
inline QskGradientStop()
```


### function QskGradientStop

```cpp
inline QskGradientStop(
    qreal position,
    const QColor & color
)
```


### function operator==

```cpp
inline bool operator==(
    const QskGradientStop & other
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const QskGradientStop & other
) const
```


### function setStop

```cpp
void setStop(
    qreal position,
    const QColor & color
)
```


### function position

```cpp
inline qreal position() const
```


### function setPosition

```cpp
void setPosition(
    qreal position
)
```


### function resetPosition

```cpp
void resetPosition()
```


### function color

```cpp
inline const QColor & color() const
```


### function setColor

```cpp
void setColor(
    const QColor & color
)
```


### function resetColor

```cpp
void resetColor()
```


### function hash

```cpp
uint hash(
    uint seed
) const
```


### function interpolated

```cpp
static QColor interpolated(
    const QskGradientStop & s1,
    const QskGradientStop & s2,
    qreal position
)
```


## Public Property Documentation

### property position

```cpp
qreal position;
```


### property color

```cpp
QColor color;
```


-------------------------------

Updated on  3 February 2021 at 15:05:41 CET