---
title: QskVertex::Color
layout: docs

---




## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[Color](/docs/classes/class_qsk_vertex_1_1_color/#function-color)**() |
| constexpr | **[Color](/docs/classes/class_qsk_vertex_1_1_color/#function-color)**(unsigned char red, unsigned char green, unsigned char blue, unsigned char alpha) |
| | **[Color](/docs/classes/class_qsk_vertex_1_1_color/#function-color)**(QRgb rgb) |
| | **[Color](/docs/classes/class_qsk_vertex_1_1_color/#function-color)**(const QColor & color) |
| Color | **[interpolatedTo](/docs/classes/class_qsk_vertex_1_1_color/#function-interpolatedto)**(Color colorTo, double ratio) const |
| constexpr bool | **[operator==](/docs/classes/class_qsk_vertex_1_1_color/#function-operator==)**(const Color & other) const |
| constexpr bool | **[operator!=](/docs/classes/class_qsk_vertex_1_1_color/#function-operator!=)**(const Color & other) const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[r](/docs/classes/class_qsk_vertex_1_1_color/#variable-r)**  |
| unsigned char | **[g](/docs/classes/class_qsk_vertex_1_1_color/#variable-g)**  |
| unsigned char | **[b](/docs/classes/class_qsk_vertex_1_1_color/#variable-b)**  |
| unsigned char | **[a](/docs/classes/class_qsk_vertex_1_1_color/#variable-a)**  |

## Public Functions Documentation

### function Color

```cpp
inline constexpr Color()
```


### function Color

```cpp
inline constexpr Color(
    unsigned char red,
    unsigned char green,
    unsigned char blue,
    unsigned char alpha
)
```


### function Color

```cpp
inline Color(
    QRgb rgb
)
```


### function Color

```cpp
inline Color(
    const QColor & color
)
```


### function interpolatedTo

```cpp
inline Color interpolatedTo(
    Color colorTo,
    double ratio
) const
```


### function operator==

```cpp
inline constexpr bool operator==(
    const Color & other
) const
```


### function operator!=

```cpp
inline constexpr bool operator!=(
    const Color & other
) const
```


## Public Attributes Documentation

### variable r

```cpp
unsigned char r;
```


### variable g

```cpp
unsigned char g;
```


### variable b

```cpp
unsigned char b;
```


### variable a

```cpp
unsigned char a;
```


-------------------------------

Updated on 22 January 2021 at 17:05:48 CET