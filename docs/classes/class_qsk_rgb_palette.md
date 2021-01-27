---
title: QskRgbPalette
layout: docs

---


**Module:** **[Core](/docs/modules/group___core/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Weight](/docs/classes/class_qsk_rgb_palette/#enum-weight)** { W50, W100, W200, W300, W400, W500, W600, W700, W800, W900, NumWeights} |
| enum| **[Theme](/docs/classes/class_qsk_rgb_palette/#enum-theme)** { Red, Pink, Purple, DeepPurple, Indigo, Blue, LightBlue, Cyan, Teal, Green, LightGreen, Lime, Yellow, Amber, Orange, DeepOrange, Brown, Grey, BlueGrey, NumThemes} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| QskRgbPalette | **[palette](/docs/classes/class_qsk_rgb_palette/#function-palette)**(Theme theme) |
| QVector< QskGradientStop > | **[colorStops](/docs/classes/class_qsk_rgb_palette/#function-colorstops)**(Theme theme, bool discrete =false) |
| QVector< QskGradientStop > | **[colorStops](/docs/classes/class_qsk_rgb_palette/#function-colorstops)**(const QVector< QRgb > & rgb, bool discrete =false) |
| QRgb | **[rgb](/docs/classes/class_qsk_rgb_palette/#function-rgb)**(Weight weight) const |
| QColor | **[color](/docs/classes/class_qsk_rgb_palette/#function-color)**(Weight weight) const |
| QVector< QskGradientStop > | **[colorStops](/docs/classes/class_qsk_rgb_palette/#function-colorstops)**(bool discrete =false) const |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| const QRgb * | **[m_rgb](/docs/classes/class_qsk_rgb_palette/#variable-m_rgb)**  |

## Public Types Documentation

### enum Weight

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| W50 | |   |
| W100 | |   |
| W200 | |   |
| W300 | |   |
| W400 | |   |
| W500 | |   |
| W600 | |   |
| W700 | |   |
| W800 | |   |
| W900 | |   |
| NumWeights | |   |




### enum Theme

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Red | |   |
| Pink | |   |
| Purple | |   |
| DeepPurple | |   |
| Indigo | |   |
| Blue | |   |
| LightBlue | |   |
| Cyan | |   |
| Teal | |   |
| Green | |   |
| LightGreen | |   |
| Lime | |   |
| Yellow | |   |
| Amber | |   |
| Orange | |   |
| DeepOrange | |   |
| Brown | |   |
| Grey | |   |
| BlueGrey | |   |
| NumThemes | |   |




## Public Functions Documentation

### function palette

```cpp
static QskRgbPalette palette(
    Theme theme
)
```


### function colorStops

```cpp
static QVector< QskGradientStop > colorStops(
    Theme theme,
    bool discrete =false
)
```


### function colorStops

```cpp
static QVector< QskGradientStop > colorStops(
    const QVector< QRgb > & rgb,
    bool discrete =false
)
```


### function rgb

```cpp
inline QRgb rgb(
    Weight weight
) const
```


### function color

```cpp
inline QColor color(
    Weight weight
) const
```


### function colorStops

```cpp
QVector< QskGradientStop > colorStops(
    bool discrete =false
) const
```


## Protected Attributes Documentation

### variable m_rgb

```cpp
const QRgb * m_rgb;
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET