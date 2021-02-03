---
title: QskTextOptions
layout: docs

---


**Module:** **[Themeing](/docs/modules/group__Themeing/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[FontSizeMode](/docs/classes/classQskTextOptions/#enum-fontsizemode)** { FixedSize, HorizontalFit, VerticalFit, Fit} |
| enum| **[WrapMode](/docs/classes/classQskTextOptions/#enum-wrapmode)** { NoWrap = QTextOption::NoWrap, WordWrap = QTextOption::WordWrap, WrapAnywhere = QTextOption::WrapAnywhere, Wrap = QTextOption::WrapAtWordBoundaryOrAnywhere} |
| enum| **[TextFormat](/docs/classes/classQskTextOptions/#enum-textformat)** { PlainText = Qt::PlainText, RichText = Qt::RichText, AutoText = Qt::AutoText, StyledText = 4} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskTextOptions](/docs/classes/classQskTextOptions/#function-qsktextoptions)**() |
| void | **[setFormat](/docs/classes/classQskTextOptions/#function-setformat)**(TextFormat format) |
| TextFormat | **[effectiveFormat](/docs/classes/classQskTextOptions/#function-effectiveformat)**(const QString & text) const |
| constexpr Qt::TextElideMode | **[elideMode](/docs/classes/classQskTextOptions/#function-elidemode)**() const |
| void | **[setElideMode](/docs/classes/classQskTextOptions/#function-setelidemode)**(Qt::TextElideMode elideMode) |
| constexpr Qt::TextElideMode | **[effectiveElideMode](/docs/classes/classQskTextOptions/#function-effectiveelidemode)**() const |
| constexpr FontSizeMode | **[fontSizeMode](/docs/classes/classQskTextOptions/#function-fontsizemode)**() const |
| void | **[setFontSizeMode](/docs/classes/classQskTextOptions/#function-setfontsizemode)**(FontSizeMode fontSizeMode) |
| constexpr WrapMode | **[wrapMode](/docs/classes/classQskTextOptions/#function-wrapmode)**() const |
| void | **[setWrapMode](/docs/classes/classQskTextOptions/#function-setwrapmode)**(WrapMode wrapMode) |
| constexpr int | **[maximumLineCount](/docs/classes/classQskTextOptions/#function-maximumlinecount)**() const |
| void | **[setMaximumLineCount](/docs/classes/classQskTextOptions/#function-setmaximumlinecount)**(int lineCount) |
| constexpr bool | **[operator==](/docs/classes/classQskTextOptions/#function-operator==)**(const QskTextOptions & other) const |
| constexpr bool | **[operator!=](/docs/classes/classQskTextOptions/#function-operator!=)**(const QskTextOptions & other) const |
| int | **[textFlags](/docs/classes/classQskTextOptions/#function-textflags)**() const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| TextFormat | **[format](/docs/classes/classQskTextOptions/#property-format)**  |
| Qt::TextElideMode | **[elideMode](/docs/classes/classQskTextOptions/#property-elidemode)**  |
| WrapMode | **[wrapMode](/docs/classes/classQskTextOptions/#property-wrapmode)**  |
| FontSizeMode | **[fontSizeMode](/docs/classes/classQskTextOptions/#property-fontsizemode)**  |
| int | **[maximumLineCount](/docs/classes/classQskTextOptions/#property-maximumlinecount)**  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr TextFormat const | **[noexcept](/docs/classes/classQskTextOptions/#variable-noexcept)**  |

## Public Types Documentation

### enum FontSizeMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FixedSize | |   |
| HorizontalFit | |   |
| VerticalFit | |   |
| Fit | |   |




### enum WrapMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoWrap | QTextOption::NoWrap|   |
| WordWrap | QTextOption::WordWrap|   |
| WrapAnywhere | QTextOption::WrapAnywhere|   |
| Wrap | QTextOption::WrapAtWordBoundaryOrAnywhere|   |




### enum TextFormat

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PlainText | Qt::PlainText|   |
| RichText | Qt::RichText|   |
| AutoText | Qt::AutoText|   |
| StyledText | 4|   |




## Public Functions Documentation

### function QskTextOptions

```cpp
inline constexpr QskTextOptions()
```


### function setFormat

```cpp
inline void setFormat(
    TextFormat format
)
```


### function effectiveFormat

```cpp
TextFormat effectiveFormat(
    const QString & text
) const
```


### function elideMode

```cpp
inline constexpr Qt::TextElideMode elideMode() const
```


### function setElideMode

```cpp
inline void setElideMode(
    Qt::TextElideMode elideMode
)
```


### function effectiveElideMode

```cpp
inline constexpr Qt::TextElideMode effectiveElideMode() const
```


### function fontSizeMode

```cpp
inline constexpr FontSizeMode fontSizeMode() const
```


### function setFontSizeMode

```cpp
inline void setFontSizeMode(
    FontSizeMode fontSizeMode
)
```


### function wrapMode

```cpp
inline constexpr WrapMode wrapMode() const
```


### function setWrapMode

```cpp
inline void setWrapMode(
    WrapMode wrapMode
)
```


### function maximumLineCount

```cpp
inline constexpr int maximumLineCount() const
```


### function setMaximumLineCount

```cpp
inline void setMaximumLineCount(
    int lineCount
)
```


### function operator==

```cpp
inline constexpr bool operator==(
    const QskTextOptions & other
) const
```


### function operator!=

```cpp
inline constexpr bool operator!=(
    const QskTextOptions & other
) const
```


### function textFlags

```cpp
int textFlags() const
```


## Public Property Documentation

### property format

```cpp
TextFormat format;
```


### property elideMode

```cpp
Qt::TextElideMode elideMode;
```


### property wrapMode

```cpp
WrapMode wrapMode;
```


### property fontSizeMode

```cpp
FontSizeMode fontSizeMode;
```


### property maximumLineCount

```cpp
int maximumLineCount;
```


## Public Attributes Documentation

### variable noexcept

```cpp
constexpr TextFormat const noexcept;
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET