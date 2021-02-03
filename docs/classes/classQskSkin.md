---
title: QskSkin
layout: docs

---


**Module:** **[Themeing](/docs/modules/group__Themeing/)**



Inherits from QObject

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[SkinFontRole](/docs/classes/classQskSkin/#enum-skinfontrole)** { DefaultFont = 0, TinyFont, SmallFont, MediumFont, LargeFont, HugeFont} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkin](/docs/classes/classQskSkin/#function-qskskin)**(QObject * parent =nullptr) |
| | **[~QskSkin](/docs/classes/classQskSkin/#function-~qskskin)**() override |
| template <typename Control ,typename Skinlet \> <br>void | **[declareSkinlet](/docs/classes/classQskSkin/#function-declareskinlet)**() |
| virtual void | **[resetColors](/docs/classes/classQskSkin/#function-resetcolors)**(const QColor & accent) |
| void | **[setSkinHint](/docs/classes/classQskSkin/#function-setskinhint)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QVariant & hint) |
| const QVariant & | **[skinHint](/docs/classes/classQskSkin/#function-skinhint)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| void | **[setGraphicFilter](/docs/classes/classQskSkin/#function-setgraphicfilter)**(int graphicRole, const QskColorFilter & colorFilter) |
| void | **[resetGraphicFilter](/docs/classes/classQskSkin/#function-resetgraphicfilter)**(int graphicRole) |
| QskColorFilter | **[graphicFilter](/docs/classes/classQskSkin/#function-graphicfilter)**(int graphicRole) const |
| void | **[setFont](/docs/classes/classQskSkin/#function-setfont)**(int fontRole, const QFont & font) |
| void | **[resetFont](/docs/classes/classQskSkin/#function-resetfont)**(int fontRole) |
| QFont | **[font](/docs/classes/classQskSkin/#function-font)**(int fontRole) const |
| void | **[setupFonts](/docs/classes/classQskSkin/#function-setupfonts)**(const QString & family, int weight =-1, bool italic =false) |
| virtual [QskGraphic](/docs/classes/classQskGraphic/) | **[symbol](/docs/classes/classQskSkin/#function-symbol)**(int symbolType) const |
| void | **[addGraphicProvider](/docs/classes/classQskSkin/#function-addgraphicprovider)**(const QString & providerId, QskGraphicProvider * provider) |
| QskGraphicProvider * | **[graphicProvider](/docs/classes/classQskSkin/#function-graphicprovider)**(const QString & providerId) const |
| bool | **[hasGraphicProvider](/docs/classes/classQskSkin/#function-hasgraphicprovider)**() const |
| virtual const int * | **[dialogButtonLayout](/docs/classes/classQskSkin/#function-dialogbuttonlayout)**(Qt::Orientation orientation) const |
| void | **[setStateMask](/docs/classes/classQskSkin/#function-setstatemask)**(QskAspect::State mask) |
| QskAspect::State | **[stateMask](/docs/classes/classQskSkin/#function-statemask)**() const |
| [QskSkinlet](/docs/classes/classQskSkinlet/) * | **[skinlet](/docs/classes/classQskSkin/#function-skinlet)**(const QMetaObject * metaObject) |
| const QskSkinHintTable & | **[hintTable](/docs/classes/classQskSkin/#function-hinttable)**() const |
| QskSkinHintTable & | **[hintTable](/docs/classes/classQskSkin/#function-hinttable)**() |
| const std::unordered_map< int, QFont > & | **[fonts](/docs/classes/classQskSkin/#function-fonts)**() const |
| const std::unordered_map< int, QskColorFilter > & | **[graphicFilters](/docs/classes/classQskSkin/#function-graphicfilters)**() const |

## Public Types Documentation

### enum SkinFontRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DefaultFont | 0|   |
| TinyFont | |   |
| SmallFont | |   |
| MediumFont | |   |
| LargeFont | |   |
| HugeFont | |   |




## Public Functions Documentation

### function QskSkin

```cpp
QskSkin(
    QObject * parent =nullptr
)
```


### function ~QskSkin

```cpp
~QskSkin() override
```


### function declareSkinlet

```cpp
template <typename Control ,
typename Skinlet >
inline void declareSkinlet()
```


### function resetColors

```cpp
virtual void resetColors(
    const QColor & accent
)
```


### function setSkinHint

```cpp
void setSkinHint(
    QskAspect aspect,
    const QVariant & hint
)
```


### function skinHint

```cpp
const QVariant & skinHint(
    QskAspect aspect
) const
```


### function setGraphicFilter

```cpp
void setGraphicFilter(
    int graphicRole,
    const QskColorFilter & colorFilter
)
```


### function resetGraphicFilter

```cpp
void resetGraphicFilter(
    int graphicRole
)
```


### function graphicFilter

```cpp
QskColorFilter graphicFilter(
    int graphicRole
) const
```


### function setFont

```cpp
void setFont(
    int fontRole,
    const QFont & font
)
```


### function resetFont

```cpp
void resetFont(
    int fontRole
)
```


### function font

```cpp
QFont font(
    int fontRole
) const
```


### function setupFonts

```cpp
void setupFonts(
    const QString & family,
    int weight =-1,
    bool italic =false
)
```


### function symbol

```cpp
virtual QskGraphic symbol(
    int symbolType
) const
```


### function addGraphicProvider

```cpp
void addGraphicProvider(
    const QString & providerId,
    QskGraphicProvider * provider
)
```


### function graphicProvider

```cpp
QskGraphicProvider * graphicProvider(
    const QString & providerId
) const
```


### function hasGraphicProvider

```cpp
bool hasGraphicProvider() const
```


### function dialogButtonLayout

```cpp
virtual const int * dialogButtonLayout(
    Qt::Orientation orientation
) const
```


### function setStateMask

```cpp
void setStateMask(
    QskAspect::State mask
)
```


### function stateMask

```cpp
QskAspect::State stateMask() const
```


### function skinlet

```cpp
QskSkinlet * skinlet(
    const QMetaObject * metaObject
)
```


### function hintTable

```cpp
const QskSkinHintTable & hintTable() const
```


### function hintTable

```cpp
QskSkinHintTable & hintTable()
```


### function fonts

```cpp
const std::unordered_map< int, QFont > & fonts() const
```


### function graphicFilters

```cpp
const std::unordered_map< int, QskColorFilter > & graphicFilters() const
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET