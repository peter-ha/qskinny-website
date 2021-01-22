---
title: QskTextColors
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTextColors](/docs/classes/class_qsk_text_colors/#function-qsktextcolors)**(const QColor & text =QColor(), const QColor & style =QColor(), const QColor & link =QColor()) |
| QskTextColors | **[interpolated](/docs/classes/class_qsk_text_colors/#function-interpolated)**(const QskTextColors & to, qreal value) const |
| uint | **[hash](/docs/classes/class_qsk_text_colors/#function-hash)**(uint seed =0) const |
| QVariant | **[interpolate](/docs/classes/class_qsk_text_colors/#function-interpolate)**(const QskTextColors & from, const QskTextColors & to, qreal ratio) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| QColor | **[textColor](/docs/classes/class_qsk_text_colors/#variable-textcolor)**  |
| QColor | **[styleColor](/docs/classes/class_qsk_text_colors/#variable-stylecolor)**  |
| QColor | **[linkColor](/docs/classes/class_qsk_text_colors/#variable-linkcolor)**  |

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

Updated on 22 January 2021 at 17:05:49 CET