---
title: QskGraphicTextureFactory
layout: docs

---


**Module:** **[Graphic](/docs/modules/group__Graphic/)**



Inherits from QQuickTextureFactory

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGraphicTextureFactory](/docs/classes/classQskGraphicTextureFactory/#function-qskgraphictexturefactory)**() |
| | **[QskGraphicTextureFactory](/docs/classes/classQskGraphicTextureFactory/#function-qskgraphictexturefactory)**(const [QskGraphic](/docs/classes/classQskGraphic/) & graphic, const QSize & size) |
| | **[~QskGraphicTextureFactory](/docs/classes/classQskGraphicTextureFactory/#function-~qskgraphictexturefactory)**() override |
| void | **[setGraphic](/docs/classes/classQskGraphicTextureFactory/#function-setgraphic)**(const [QskGraphic](/docs/classes/classQskGraphic/) & graphic) |
| [QskGraphic](/docs/classes/classQskGraphic/) | **[graphic](/docs/classes/classQskGraphicTextureFactory/#function-graphic)**() const |
| void | **[setColorFilter](/docs/classes/classQskGraphicTextureFactory/#function-setcolorfilter)**(const QskColorFilter & colorFilter) |
| const QskColorFilter & | **[colorFilter](/docs/classes/classQskGraphicTextureFactory/#function-colorfilter)**() const |
| void | **[setSize](/docs/classes/classQskGraphicTextureFactory/#function-setsize)**(const QSize & size) |
| QSize | **[size](/docs/classes/classQskGraphicTextureFactory/#function-size)**() const |
| QSGTexture * | **[createTexture](/docs/classes/classQskGraphicTextureFactory/#function-createtexture)**(QQuickWindow * window) const override |
| QSize | **[textureSize](/docs/classes/classQskGraphicTextureFactory/#function-texturesize)**() const override |
| int | **[textureByteCount](/docs/classes/classQskGraphicTextureFactory/#function-texturebytecount)**() const override |
| QImage | **[image](/docs/classes/classQskGraphicTextureFactory/#function-image)**() const override |

## Public Functions Documentation

### function QskGraphicTextureFactory

```cpp
QskGraphicTextureFactory()
```


### function QskGraphicTextureFactory

```cpp
QskGraphicTextureFactory(
    const QskGraphic & graphic,
    const QSize & size
)
```


### function ~QskGraphicTextureFactory

```cpp
~QskGraphicTextureFactory() override
```


### function setGraphic

```cpp
void setGraphic(
    const QskGraphic & graphic
)
```


### function graphic

```cpp
QskGraphic graphic() const
```


### function setColorFilter

```cpp
void setColorFilter(
    const QskColorFilter & colorFilter
)
```


### function colorFilter

```cpp
const QskColorFilter & colorFilter() const
```


### function setSize

```cpp
void setSize(
    const QSize & size
)
```


### function size

```cpp
QSize size() const
```


### function createTexture

```cpp
QSGTexture * createTexture(
    QQuickWindow * window
) const override
```


### function textureSize

```cpp
QSize textureSize() const override
```


### function textureByteCount

```cpp
int textureByteCount() const override
```


### function image

```cpp
QImage image() const override
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET