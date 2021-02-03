---
title: QskTextColors
layout: docs

---


**Module:** **[Themeing](/docs/modules/group__Themeing/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTextColors](/docs/classes/classQskTextColors/#function-qsktextcolors)**(const QColor & text =QColor(), const QColor & style =QColor(), const QColor & link =QColor()) |
| QskTextColors | **[interpolated](/docs/classes/classQskTextColors/#function-interpolated)**(const QskTextColors & to, qreal value) const |
| uint | **[hash](/docs/classes/classQskTextColors/#function-hash)**(uint seed =0) const |
| QVariant | **[interpolate](/docs/classes/classQskTextColors/#function-interpolate)**(const QskTextColors & from, const QskTextColors & to, qreal ratio) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| QColor | **[textColor](/docs/classes/classQskTextColors/#variable-textcolor)**  |
| QColor | **[styleColor](/docs/classes/classQskTextColors/#variable-stylecolor)**  |
| QColor | **[linkColor](/docs/classes/classQskTextColors/#variable-linkcolor)**  |

## Public Functions Documentation

### function QskTextColors

```cpp
inline QskTextColors(
    const QColor & text =QColor(),
    const QColor & style =QColor(),
    const QColor & link =QColor()
)
```


### function interpolated

```cpp
QskTextColors interpolated(
    const QskTextColors & to,
    qreal value
) const
```


### function hash

```cpp
uint hash(
    uint seed =0
) const
```


### function interpolate

```cpp
static QVariant interpolate(
    const QskTextColors & from,
    const QskTextColors & to,
    qreal ratio
)
```


## Public Attributes Documentation

### variable textColor

```cpp
QColor textColor;
```


### variable styleColor

```cpp
QColor styleColor;
```


### variable linkColor

```cpp
QColor linkColor;
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET