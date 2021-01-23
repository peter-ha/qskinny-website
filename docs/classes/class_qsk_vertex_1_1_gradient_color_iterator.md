---
title: QskVertex::GradientColorIterator
layout: docs

---




Inherits from QskVertex::ColorIterator

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[GradientColorIterator](/docs/classes/class_qsk_vertex_1_1_gradient_color_iterator/#function-gradientcoloriterator)**(qreal value1, qreal value2, const QVector< QskGradientStop > stops) |
| qreal | **[value](/docs/classes/class_qsk_vertex_1_1_gradient_color_iterator/#function-value)**() const |
| Color | **[color](/docs/classes/class_qsk_vertex_1_1_gradient_color_iterator/#function-color)**() const |
| Color | **[colorAt](/docs/classes/class_qsk_vertex_1_1_gradient_color_iterator/#function-colorat)**(qreal value) const |
| bool | **[advance](/docs/classes/class_qsk_vertex_1_1_gradient_color_iterator/#function-advance)**() |
| bool | **[isDone](/docs/classes/class_qsk_vertex_1_1_gradient_color_iterator/#function-isdone)**() const |

## Public Functions Documentation

### function GradientColorIterator

```cpp
inline GradientColorIterator(
    qreal value1,
    qreal value2,
    const QVector< QskGradientStop > stops
)
```


### function value

```cpp
inline qreal value() const
```


### function color

```cpp
inline Color color() const
```


### function colorAt

```cpp
inline Color colorAt(
    qreal value
) const
```


### function advance

```cpp
inline bool advance()
```


### function isDone

```cpp
inline bool isDone() const
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET