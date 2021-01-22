---
title: QskGradientStop
layout: docs

---




## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGradientStop](/docs/classes/class_qsk_gradient_stop/#function-qskgradientstop)**() |
| | **[QskGradientStop](/docs/classes/class_qsk_gradient_stop/#function-qskgradientstop)**(qreal position, const QColor & color) |
| bool | **[operator==](/docs/classes/class_qsk_gradient_stop/#function-operator==)**(const QskGradientStop & other) const |
| bool | **[operator!=](/docs/classes/class_qsk_gradient_stop/#function-operator!=)**(const QskGradientStop & other) const |
| void | **[setStop](/docs/classes/class_qsk_gradient_stop/#function-setstop)**(qreal position, const QColor & color) |
| qreal | **[position](/docs/classes/class_qsk_gradient_stop/#function-position)**() const |
| void | **[setPosition](/docs/classes/class_qsk_gradient_stop/#function-setposition)**(qreal position) |
| void | **[resetPosition](/docs/classes/class_qsk_gradient_stop/#function-resetposition)**() |
| const QColor & | **[color](/docs/classes/class_qsk_gradient_stop/#function-color)**() const |
| void | **[setColor](/docs/classes/class_qsk_gradient_stop/#function-setcolor)**(const QColor & color) |
| void | **[resetColor](/docs/classes/class_qsk_gradient_stop/#function-resetcolor)**() |
| uint | **[hash](/docs/classes/class_qsk_gradient_stop/#function-hash)**(uint seed) const |
| QColor | **[interpolated](/docs/classes/class_qsk_gradient_stop/#function-interpolated)**(const QskGradientStop & s1, const QskGradientStop & s2, qreal position) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[position](/docs/classes/class_qsk_gradient_stop/#property-position)**  |
| QColor | **[color](/docs/classes/class_qsk_gradient_stop/#property-color)**  |

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
qreal position() const
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
const QColor & color() const
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

Updated on 22 January 2021 at 17:05:48 CET