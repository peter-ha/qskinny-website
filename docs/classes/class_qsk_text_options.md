---
title: QskTextOptions
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[FontSizeMode](/docs/classes/class_qsk_text_options/#enum-fontsizemode)** { FixedSize, HorizontalFit, VerticalFit, Fit} |
| enum| **[WrapMode](/docs/classes/class_qsk_text_options/#enum-wrapmode)** { NoWrap = QTextOption::NoWrap, WordWrap = QTextOption::WordWrap, WrapAnywhere = QTextOption::WrapAnywhere, Wrap = QTextOption::WrapAtWordBoundaryOrAnywhere} |
| enum| **[TextFormat](/docs/classes/class_qsk_text_options/#enum-textformat)** { PlainText = Qt::PlainText, RichText = Qt::RichText, AutoText = Qt::AutoText, StyledText = 4} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskTextOptions](/docs/classes/class_qsk_text_options/#function-qsktextoptions)**() |
| constexpr TextFormat | **[format](/docs/classes/class_qsk_text_options/#function-format)**() const |
| void | **[setFormat](/docs/classes/class_qsk_text_options/#function-setformat)**(TextFormat format) |
| TextFormat | **[effectiveFormat](/docs/classes/class_qsk_text_options/#function-effectiveformat)**(const QString & text) const |
| constexpr Qt::TextElideMode | **[elideMode](/docs/classes/class_qsk_text_options/#function-elidemode)**() const |
| void | **[setElideMode](/docs/classes/class_qsk_text_options/#function-setelidemode)**(Qt::TextElideMode elideMode) |
| constexpr Qt::TextElideMode | **[effectiveElideMode](/docs/classes/class_qsk_text_options/#function-effectiveelidemode)**() const |
| constexpr FontSizeMode | **[fontSizeMode](/docs/classes/class_qsk_text_options/#function-fontsizemode)**() const |
| void | **[setFontSizeMode](/docs/classes/class_qsk_text_options/#function-setfontsizemode)**(FontSizeMode fontSizeMode) |
| constexpr WrapMode | **[wrapMode](/docs/classes/class_qsk_text_options/#function-wrapmode)**() const |
| void | **[setWrapMode](/docs/classes/class_qsk_text_options/#function-setwrapmode)**(WrapMode wrapMode) |
| constexpr int | **[maximumLineCount](/docs/classes/class_qsk_text_options/#function-maximumlinecount)**() const |
| void | **[setMaximumLineCount](/docs/classes/class_qsk_text_options/#function-setmaximumlinecount)**(int lineCount) |
| constexpr bool | **[operator==](/docs/classes/class_qsk_text_options/#function-operator==)**(const QskTextOptions & other) const |
| constexpr bool | **[operator!=](/docs/classes/class_qsk_text_options/#function-operator!=)**(const QskTextOptions & other) const |
| int | **[textFlags](/docs/classes/class_qsk_text_options/#function-textflags)**() const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| TextFormat | **[format](/docs/classes/class_qsk_text_options/#property-format)**  |
| Qt::TextElideMode | **[elideMode](/docs/classes/class_qsk_text_options/#property-elidemode)**  |
| WrapMode | **[wrapMode](/docs/classes/class_qsk_text_options/#property-wrapmode)**  |
| FontSizeMode | **[fontSizeMode](/docs/classes/class_qsk_text_options/#property-fontsizemode)**  |
| int | **[maximumLineCount](/docs/classes/class_qsk_text_options/#property-maximumlinecount)**  |

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


### function format

```cpp
constexpr TextFormat format() const
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
constexpr Qt::TextElideMode elideMode() const
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
constexpr FontSizeMode fontSizeMode() const
```


### function setFontSizeMode

```cpp
inline void setFontSizeMode(
    FontSizeMode fontSizeMode
)
```


### function wrapMode

```cpp
constexpr WrapMode wrapMode() const
```


### function setWrapMode

```cpp
inline void setWrapMode(
    WrapMode wrapMode
)
```


### function maximumLineCount

```cpp
constexpr int maximumLineCount() const
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


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET